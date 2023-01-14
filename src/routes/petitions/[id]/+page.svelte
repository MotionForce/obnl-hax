<script lang="ts">
    import {pb} from "$lib/auth.js"
    import {construct_svelte_component, identity} from "svelte/internal";

    export let data
    let petition = {
        title: "",
        content: "",
        creator: "",
        signers: JSON.parse("[]"),
    }
    let signed = false;
    let failed_fetch = false;
    let failed_sign = false;
    let already_signed = false;

    async function fetch_petition() {
        try {
            const req = await pb.collection("petitions").getOne(`${data.post.id}`)
            petition = {
                title: req.title,
                content: req.content,
                signers: req.signers,
                creator: req.creator_name,
            }
        } catch (err) {
            failed_fetch = true;
        }
    }

    async function sign() {
        try {
            if (petition.signers.some(item => item === pb.authStore.model.name)) {
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
        } catch (err) {
            failed_sign = true;
        }
    }

    fetch_petition()

</script>

<div className="petition">
    <div className="title">
        <div className="title-h1-group">
            <h1>{petition.title}</h1>
            {#if !signed}
                <button on:click={sign}>Signer</button>
            {/if}
        </div>
        <p>Created by {petition.creator}</p>
    </div>
    <div class="content">
        <p>{petition.content}</p>
    </div>
    <div class="signers">
        <h6>Signers: </h6>
        <ul>
            {#each petition.signers as signer}
                <li><p>{signer}</p></li>
            {/each}
        </ul>
    </div>
    <div class="buttons">
        <button on:click={fetch_petition}>Rafraichir</button>
        {#if !signed}
            <button on:click={sign}>Signer</button>
        {/if}
    </div>
    <div>
        {#if failed_fetch}
            <p>Failed to fetch petition</p>
        {/if}
        {#if failed_sign}
            <p>Failed to sign petition</p>
        {/if}
        {#if already_signed}
            <p>You already signed this petition</p>
        {/if}
    </div>
</div>

<style>
    .petition {
        display: flex;
        flex-direction: column;
        background-color: #3bb43e;
        width: 80%;
        padding: 40px;
        border-radius: 15px;
        text-align: justify;
        text-justify: inter-word;
        border: black 1px solid;
        box-shadow: black 10px 10px;
        margin: 50px 50px 50px 11%;
        transform: translateX(-5%);
    }

    .title-h1-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title h1 {
        font-size: 4rem;
        margin-bottom: 0;
        margin-top: 5px;
    }

    .title p {
        font-size: 1.5rem;
        margin-bottom: 15px;
        margin-top: 0;
    }

    .signers {
        display: flex;
        flex-direction: column;
        margin-top: 25px;
    }

    .signers h6 {
        font-size: 1.5rem;
        margin-bottom: 0;
        margin-top: 0;
    }

    .signers p {
        font-size: 1.25rem;
        margin-bottom: 0;
        margin-top: 0;
    }

    button {
        margin-top: 25px;
        margin-bottom: 25px;
        margin-right: 20px;
        padding: 10px;
        width: 10%;
    }
</style>