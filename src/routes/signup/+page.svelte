<script>
    import {pb} from "$lib/auth.js"

    let name = ""
    let email = ""
    let password = ""
    let passwordConfirm = ""

    async function signup() {
        const authData = await pb.collection("users").create({
            name: "dfjpiqnflwofh",
            email: "what@example.com",
            password: "12345678",
            passwordConfirm: "12345678"
        })
        console.log(pb.authStore.isValid)
    }
</script>

<div class="sign-up-form">
    <h1>Créer un compte</h1>
    <div class="usename">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" name="username" id="username" bind:value={name}>
    </div>
    <div class="email">
        <label for="email">Courriel</label>
        <input type="email" name="email" id="email" bind:value={email}>
    </div>
    <div class="password">
        <label for="password">Mot de Passe</label>
        <input type="password" name="password" id="password" bind:value={password}>
    </div>
    <div class="confirm-password">
        <label for="confirm-password">Confirmer le mot de passe</label>
        <input type="password" name="confirm-password" id="confirm-password" bind:value={passwordConfirm}>
    </div>
    <div class="confirm-password-text">
        {#if password !== passwordConfirm}
            <p>Les mots de passe ne sont pas identiques!</p>
        {/if}
    </div>
    <div class="submit">
        <button on:click={signup}>S'inscrire</button>
    </div>
</div>

<style>
    .sign-up-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        font-size: x-large;
    }

    .sign-up-form > * {
        margin-top: 10px;
    }

    .email {
        display: inline-flex;
        align-items: center;
    }

    .password {
        display: inline-flex;
        align-items: center;
    }

    .confirm-password {
        display: flex;
        align-items: center;
    }

    .confirm-password-text {
        font-size: medium;
    }

    .submit {
        display: inline-flex;
        align-items: center;
    }

    label {
        margin-right: 10px;
    }

    input {
        border-radius: 5px;
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
</style>