<script>
    import Navbar from "$lib/navbar.svelte";

    let year = new Date().getFullYear();
</script>

<main>
    <div class="main-page">
        <Navbar/>
        <slot/>
    </div>
</main>

<style>
    * {
        font-family: "Arial Rounded MT Light", Arial, sans-serif;
    }

    :global(body) {
        background-image: url("/background-mesh.png");
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
        margin: 0;
        padding: 0;
        backdrop-filter: brightness(130%) blur(5px) saturate(20%);
    }

    footer {
        bottom: 0;
        left: 50%;
        text-align: center;
        margin-top: 2em;
    }

</style>