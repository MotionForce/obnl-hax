<script>
    import Navbar from "$lib/navbar.svelte";
</script>

<main>
    <Navbar />
    <slot />
</main>

<style>
    * {
        font-family: sans-serif;
    }
</style>