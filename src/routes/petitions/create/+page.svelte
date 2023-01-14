<script>
    import {pb} from "$lib/auth.js"

    let title = ""
    let content = ""

    let failedMessage = ""
    let failed = false

    async function publish_petition() {
        try {
            const res = await pb.collection("petitions").create({
                title: title,
                content: content,
                creator_name: pb.authStore.model.name,
                petition_signers: []
            })
        } catch (err) {
            failed = true
        }
    }

</script>
<div class="create-petition-form">
    <h1>Créer une pétition</h1>
    <div class="title">
        <label for="title">Titre</label>
        <input type="text" name="title" bind:value={title}>
    </div>
    <div class="content">
        <label for="content">Contenu</label>
        <textarea name="content" bind:value={content}></textarea>
    </div>
    <div class="submit">
        {#if content.length < 100 || title.length < 10}
            <p class="error">Le titre doit être au moins 10 caractères de long et le contenu doit faire au moins 100
                caractères.</p>
        {:else}
            <a href="/petitions" on:click={publish_petition} id="submit-button">Publier</a>
        {/if}
    </div>
</div>

<style>
    .create-petition-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 20px 20px;
        font-size: x-large;
        background-color: #f5f5f5;
        border-radius: 15px;
        padding-bottom: 10px;
    }

    .title {
        display: inline-flex;
        align-items: center;
        margin-right: 260px;
    }

    .title label {
        margin-right: 20px;
    }

    .content {
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 50px;
        display: inline-flex;
        align-items: center;
    }

    .content textarea {
        width: 500px;
        height: 200px;
        margin-left: 20px;
        border-radius: 10px;
    }

    .submit {
        display: inline-flex;
        align-items: center;
    }

    p {
        margin-right: 10px;
    }

    input {
        border-radius: 5px;
        height: 25px;
    }

    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 10px;
    }

    .error {
        margin-top: 0;
        font-size: smaller;
    }
</style>
