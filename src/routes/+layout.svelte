<script>
    import Navbar from "$lib/navbar.svelte";
</script>

<main>
    <div class="main-page">
        <Navbar/>
        <slot/>
    </div>
</main>

<style>

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
    
    * {
        font-family: 'Poppins', sans-serif;
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

</style>