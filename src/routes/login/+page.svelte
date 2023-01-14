<script>
    import {pb} from "$lib/auth.js"

    let email = ""
    let password = ""
    let failed = false

    async function login() {
        try {
            const authData = await pb.collection("users").authWithPassword(email, password)
            console.log(pb.authStore.isValid)
        } catch (err) {
            failed = true
        }
    }
</script>

<div class="login-form">
    <h1>Connection</h1>
    <div class="email">
        <p>Addresse courriel</p>
        <input type="email" bind:value={email}>
    </div>
    <div class="password">
        <p>Mot de passe</p>
        <input type="password" bind:value={password}>
    </div>
    <div class="submit">
        <a href="/">
            <button on:click={login}>Se connecter</button>
        </a>
    </div>
    <div class="sign-up">
        <p id="sign-up">Pas encore de compte ? <a href="/signup">Inscrivez-vous</a></p>
    </div>
</div>

<style>
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        font-size: x-large;
        color: #212121;
    }

    .email {
        display: inline-flex;
        align-items: center;
    }

    .password {
        display: inline-flex;
        align-items: center;
        margin-left: 46px;
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
        width: 150px;
        height: 25px;
        box-shadow: black 5px 5px;
    }

    button {
        margin: 4px 2px;
    }

    .sign-up {
        font-size: medium;
    }

    label {
        text-shadow: 0 0 1px #000;
    }

</style>