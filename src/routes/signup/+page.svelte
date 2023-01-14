<script>
    import {pb} from "$lib/auth.js"

    let name = ""
    let email = ""
    let password = ""
    let passwordConfirm = ""

    let failed = false
    let er = ""

    async function signup() {
        try {
            const authData = await pb.collection("users").create({
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
                is_admin: false,
            })
        } catch (err) {
            failed = true
            return err
        }
        if (!failed) {
            window.location.href = "/login"
            return "Success"
        }
    }
</script>

<div class="sign-up-form">
    <h1>Créer un compte</h1>
    <div class="username">
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
        <button on:click={er = signup}>S'inscrire</button>
    </div>
    <div class="error">
        {#if failed}
            <p>{er}</p>
        {/if}
    </div>
</div>

<style>
    h1 {
        font-weight: 900;
    }

    .sign-up-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        font-size: x-large;
        color: #2c2c2c;
    }

    .sign-up-form > * {
        margin-top: 10px;
    }

    .username {
        display: inline;
        align-items: center;
        margin-right: 93px;
    }

    .username label {
        margin-right: 0;
    }

    .email {
        display: inline-flex;
        align-items: center;
        margin-left: 15px;
    }

    .password {
        display: inline-flex;
        align-items: center;
        margin-right: 50px;
    }

    .confirm-password {
        display: flex;
        align-items: center;
        margin-right: 210px;
    }

    .confirm-password-text {
        font-size: medium;
    }

    .submit {
        display: inline-flex;
        align-items: center;
    }

    label {
        margin-left: 100px;
        margin-right: 10px;
    }

    input {
        border-radius: 5px;
        width: 150px;
        height: 25px;
        box-shadow: black 5px 5px;
    }

    button {
        margin: 4px 2px;
    }
</style>