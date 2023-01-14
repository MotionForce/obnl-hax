<!--suppress ALL -->
<script>
    import {pb} from "$lib/auth.js"

    let logged_in = pb.authStore.isValid
    let _admin = false;

    function sign_out() {
        pb.authStore.clear()
        logged_in = false
    }

    setInterval(() => {
        logged_in = pb.authStore.isValid
        if (logged_in){
            _admin = pb.authStore.model.admin
        }
    }, 1000)
</script>

<div class="navbar">
    <div class="icon">
        <a href="/">
            <img src="/favicon.png" alt="logo">
        </a>
    </div>
    <div class="links">
        <div class="status">
            {#if logged_in === true}
                <img src="/account.png" alt="logged in">
            {/if}
        </div>
        <div class="logout">
            {#if logged_in === true}
                <a href="/sign-out" id="logout" on:click={sign_out}>Se déconnecter</a>
            {:else}
                <a href="/login">Se connecter</a>
            {/if}
        </div>
        {#if logged_in === true}
            <a href="/petitions/create">Créer une pétition</a>
        {/if}
        <a href="/petitions">Pétitions</a>
        <a href="/blog">Blog</a>
    </div>
</div>

<style>
    /* Add a black background color to the top navigation */
    .navbar {
        background-color: #f5ff00;
        overflow: hidden;
        border-bottom: black 5px solid;
        border-right: black 5px solid;
        border-radius: 0 0 10px 10px;
    }

    /* Style the links inside the navigation bar */
    .links a, .status {
        float: right;
        color: black;
        text-align: left;
        padding: 14px 16px;
        text-decoration: none;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 17px;
    }

    /* Change the color of links on hover */
    .links a:hover {
        background-color: #cdd700;
        color: black;
    }

    /* Add a color to the active/current link */
    .links a.active {
        background-color: #1331c7;
        color: white;
    }

    .icon img {
        width: 40px;
        height: 40px;
        margin: 10px;
        margin-top: 7px;
        padding: 0;
        position: absolute;
    }

    .status img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        margin-bottom: o;
        padding: 0;
        position: static;
    }
</style>