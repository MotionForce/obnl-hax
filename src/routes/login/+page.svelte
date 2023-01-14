<script>
    import {pb} from "$lib/auth.js"

    let email = ""
    let password = ""
    let failed = false

    async function login() {
        try{
            const authData = await pb.collection("users").authWithPassword(email, password)
            console.log(pb.authStore.isValid)
        }catch(err){
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
        <button on:click={login}>Se connecter</button>
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
        margin-top: 100px;
        font-size: x-large;
    }

    .email {
        display: inline-flex;
        align-items: center;
    }

    .password {
        display: inline-flex;
        align-items: center;
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

    .sign-up {
        font-size: medium;
    }

</style>