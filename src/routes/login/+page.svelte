<script>
    import {pb} from "$lib/auth.js"
    import {_} from "svelte-i18n";

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
    <h1>{$_('login.title').replace("login.", "")}</h1>
    <div class="email">
        <p>{$_('login.email').replace("login.", "")}</p>
        <input type="email" bind:value={email}>
    </div>
    <div class="password">
        <p>{$_('login.password').replace("login.", "")}</p>
        <input type="password" bind:value={password}>
    </div>
    <div class="submit">
        <a href="/">
            <button on:click={login}>{$_('login.connect').replace("login.", "")}</button>
        </a>
    </div>
    <div class="sign-up">
        <p id="sign-up">{$_('login.registerTitle').replace("login.", "")}<a href="/signup">{$_('login.register').replace("login.", "")}</a></p>
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