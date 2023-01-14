<script>
    import {pb} from "$lib/auth.js";

    let logged_in = pb.authStore.isValid

    setInterval(() => {
        logged_in = pb.authStore.isValid
    }, 1000)
</script>

<div class="main-content">
    <h1>Gestionnaire <br> pétition</h1>
    {#if logged_in === true}
        <a href="/petitions">
            <button>Voir les pétitions</button>
        </a>
    {:else}
        <a href="/login">
            <button>Se connecter</button>
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
    }
</style>