
<script>
    import {pb} from "$lib/auth.js"

    let name = ""
    let email = ""
    let password = ""
    let passwordConfirm = ""

    let failed = false

    async function signup(){
        try{
            const authData = await pb.collection("users").create({
                name: "dfjpiqnflwofh",
                email: "what@example.com",
                password: "12345678",
                passwordConfirm: "12345678"
            })
        }catch(err){
            failed = true
        }
    }
</script>
nom <input bind:value={name}><br>
addresse courriel <input bind:value={email}><br>
mot de passe <input type="password" bind:value={password}><br>
confirmez le mot de passe <input type="password" bind:value={passwordConfirm}><br>
{#if password !== passwordConfirm}
<br>
Les mots de passe ne sont pas identiques!
{/if}
<br>
<button on:click={signup}>Login</button>