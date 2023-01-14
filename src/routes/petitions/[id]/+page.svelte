<script lang="ts">
    import {pb} from "$lib/auth.js"
    import { construct_svelte_component, identity } from "svelte/internal";

    export let data
    let petition = {
        title: "",
        content: "",
        creator: "",
        signers: JSON.parse("[]"),
    }
    let signed = false
    let failed_fetch = false
    let failed_sign = false
    let already_signed = false

    async function fetch_petition(){
        try{
            const req = await pb.collection("petitions").getOne(`${data.post.id}`)
            petition = {
                title: req.title,
                content: req.content,
                signers: req.signers,
                creator: req.creator_name,
            }
        }catch(err){
            failed_fetch = true;
        }
    }
    
    async function sign(){
        try{
            if (petition.signers.some(item => item === pb.authStore.model.name)){
                already_signed = true
                return
            }
            await pb.collection("petitions").update(`${data.post.id}`, {
                title: petition.title,
                content: petition.content,
                signers: petition.signers,
                creator_name: petition.creator,
            })
            fetch_petition()
        }catch(err){
            failed_sign = true;
        }
    }

    fetch_petition()

</script>
<h2>{petition.title}</h2>
<br>
<p>{petition.content}</p>
Signers<br>
<ul>
{#each petition.signers as signer}
<li>{signer}</li>
{/each}
</ul>
<button on:click={fetch_petition}>Rafraichir</button>
{#if !signed}
<button on:click={sign}>sign</button>
{/if}