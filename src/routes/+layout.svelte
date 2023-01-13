<script>
    import Navbar from "$lib/navbar.svelte";

    let year = new Date().getFullYear();
</script>

<main>
    <Navbar/>
    <slot/>
    <footer>
        <p>Copyright {year}</p>
    </footer>
</main>

<style>
    * {
        font-family: sans-serif;
    }

    footer {
        bottom: 0;
        left: 50%;
        text-align: center;
        margin-top: 2em;
    }

</style>