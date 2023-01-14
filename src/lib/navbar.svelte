<!--suppress ALL -->
<script>
    import {pb} from "$lib/auth.js"

    let logged_in = pb.authStore.isValid

    function sign_out() {
        pb.authStore.clear()
        logged_in = false
    }
</script>

<div class="navbar">
    <div class="icon">
        <img src="/favicon.png" alt="WIP">
    </div>
    <div class="links">
        <div class="status">
            {#if logged_in === true}
                <img src="/account.png" alt="logged in">
            {/if}
        </div>
        <a href="/login">Se connecter</a>
        <a href="/petitions/create">Créer une pétition</a>
        <a href="/petitions">Pétitions</a>
        <a href="/">Home</a>
        <div class="logout">
            {#if logged_in === true}
                <a href="/logout" id="logout" on:click={sign_out}>Se déconnecter</a>
            {/if}
        </div>
    </div>
</div>

<style>
    /* Add a black background color to the top navigation */
    .navbar {
        background-color: rgba(51, 51, 51, 0.85);
        overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    .links a, .status {
        float: right;
        color: #f2f2f2;
        text-align: left;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    /* Change the color of links on hover */
    .links a:hover {
        background-color: #ddd;
        color: black;
    }

    /* Add a color to the active/current link */
    .links a.active {
        background-color: #1331c7;
        color: white;
    }

    .icon img {
        width: 25px;
        height: 25px;
        margin: 10px;
        padding: 0;
        position: absolute;
    }

    .status img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        margin-bottom: 0;
        padding: 0;
        position: static;
    }
</style>