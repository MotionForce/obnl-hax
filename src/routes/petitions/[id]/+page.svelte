<script lang="ts">
    import {pb} from "$lib/auth.js"
    import {construct_svelte_component, identity} from "svelte/internal";
    import {_} from "svelte-i18n";

    export let data
    let petition = {
        title: "",
        content: "",
        creator: "",
        signers: JSON.parse("[]"),
    }
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
                created: req.created,
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
            petition.signers.push(pb.authStore.model.name)
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

    function parseDate(date) {
        console.log(date)
        let d = new Date(date)
        return d.toLocaleDateString()
    }

    fetch_petition()

</script>

<div class="petition">
    <div class="title">
        <div class="title-h1-group">
            <h1>{petition.title}</h1>
                <button on:click={sign}>{$_('petitions.v.sign').replace("petitions.v.", "")}</button>
        </div>
        <p>{$_('petitions.v.createdBy').replace("petitions.v.", "")}{petition.creator}</p>
        <p>{parseDate(petition.created)}</p>
    </div>
    <div class="content">
        <p>{petition.content}</p>
    </div>
    <div class="signers">
        <h6>{$_('petitions.v.signers').replace("petitions.v.", "")}</h6>
        <ul>
            {#each petition.signers as signer}
                <li><p>{signer}</p></li>
            {/each}
        </ul>
    </div>
    <div class="buttons">
        <button on:click={fetch_petition}>{$_('petitions.v.refresh').replace("petitions.v.", "")}</button>
            <button on:click={sign}>{$_('petitions.v.sign').replace("petitions.v.", "")}</button>
    </div>
    <div>
        {#if failed_fetch}
            <p>{$_('petitions.v.failFetch').replace("petitions.v.", "")}</p>
        {/if}
        {#if failed_sign}
            <p>{$_('petitions.v.failSign').replace("petitions.v.", "")}</p>
        {/if}
        {#if already_signed}
            <p>{$_('petitions.v.alreadySign').replace("petitions.v.", "")}</p>
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
