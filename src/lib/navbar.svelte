<!--suppress ALL -->
<script>
    import { pb } from "$lib/auth.js"
    let logged_in = pb.authStore.isValid

    function sign_out(){
        pb.authStore.clear()
    }
</script>
<div class="navbar">
    <div class="icon">
        <img src="/favicon.png" alt="WIP">
    </div>
    <div class="links">
        <a href="/login">Se connecter</a>
        <a href="/petitions/create">Créer une pétition</a>
        <a href="/petitions">Petitions</a>
        <a href="/">Home</a>
    </div>
</div>
<button on:click={sign_out}>sign out</button>

<style>
    /* Add a black background color to the top navigation */
    .navbar {
        background-color: rgba(51, 51, 51, 0.85);
        overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    .links a {
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

    img {
        width: 25px;
        height: 25px;
        margin: 10px;
        padding: 0;
        position: absolute;
    }
</style>