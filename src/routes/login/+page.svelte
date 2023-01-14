<script>
    import {pb} from "$lib/auth.js"

    let email = ""
    let password = ""

    async function login(){
        const authData = await pb.collection("users").authWithPassword(email, password)
        console.log(pb.authStore.isValid)
    }
</script>
addresse courriel <input bind:value={email}><br>
mot de passe <input type="password" bind:value={password}><br>
<br>
<button on:click={login}>Login</button>


