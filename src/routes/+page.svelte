<script>
    import {_, dictionary, locale} from 'svelte-i18n';
    import {pb} from "$lib/auth.js"
    import translations from "$lib/translation.js"

    dictionary.set(translations)

    let logged_in = pb.authStore.isValid

    setInterval(() => {
        logged_in = pb.authStore.isValid
    }, 1000)
</script>

<div class="main-content">
    <h1>{$_('main.title').split(" ")[0]}<br>{$_('main.title').split(" ")[1].replace("main.", "")}</h1>
    {#if logged_in === true}
        <a href="/petitions">
            <button>{$_('main.viewPetitions').replace("main.", "")}</button>
        </a>
    {:else}
        <a href="/login">
            <button>{$_('main.connect').replace("main.", "")}</button>
        </a>
    {/if}
</div>

<style>
    .main-content {
        text-align: left;
        margin-left: 70px;
        font-size: 3rem;
    }

    h1 {
        margin-top: 50px;
        color: rgb(44, 1, 35)
    }
</style>