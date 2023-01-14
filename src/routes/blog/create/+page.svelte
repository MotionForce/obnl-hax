<script>
    import {pb} from "$lib/auth.js"
    import {_} from "svelte-i18n";

    let title = ""
    let content = ""
    let failed = false;

    async function create(){
        try{
            await pb.collection("blog_posts").create({
                title: title,
                content: content,
            })
        }catch (err){
            failed = true
        }
    }
</script>
<div class="create-blog-form">
    <h1>{$_('blog.make.title').replace("blog.make.", "")}</h1>
    <div class="title">
        <label for="title">{$_('blog.make.titleInput').replace("blog.make.", "")}</label>
        <input type="text" name="title" bind:value={title}>
    </div>
    <div class="content">
        <label for="content">{$_('blog.make.contentInput').replace("blog.make.", "")}</label>
        <textarea name="content" bind:value={content}></textarea>
    </div>
    <div class="submit">
        {#if content.length < 100 && title.length < 10}
            <p class="error">{$_('blog.make.dMin').replace("blog.make.", "")}</p>
        {:else if content.length < 100 && title.length >= 10}
            <p class="error">{$_('blog.make.cMin').replace("blog.make.", "")}</p>
        {:else if content.length >= 100 && title.length < 10}
            <p class="error">{$_('blog.make.tMin').replace("blog.make.", "")}</p>
        {:else}
            <a href="/blog" on:click={create} id="submit-button"><button>{$_('blog.make.submit').replace("blog.make.", "")}</button></a>
        {/if}
    </div>
</div>

<style>

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

    .create-blog-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 20px 20px;
        font-size: x-large;
        background-color: #4ac23c;
        border-radius: 10px;
        border: 1px solid #000000;
        box-shadow: black 5px 5px;
        padding-bottom: 10px;
    }

    .title {
        display: inline-flex;
        align-items: center;
        margin-left: 50px;
    }

    .title label {
        margin-right: 20px;
    }

    .title input {
        width: 450px;
        box-shadow: black 5px 5px;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        padding: 10px;
        border: 20px;
    }

    .content {
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 50px;
        display: inline-flex;
        flex-direction: column;
    }

    .content textarea {
        width: 500px;
        height: 200px;
        margin-left: 20px;
        margin-top: 5px;
        border-radius: 10px;
        box-shadow: black 5px 5px;
        padding: 10px;
        font-family: 'Poppins', sans-serif;
        resize: none;
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
        margin: 4px 2px;
    }

    .error {
        margin-top: 16px;
        margin-bottom: 17px;
        font-size: smaller;
    }

    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

</style>
