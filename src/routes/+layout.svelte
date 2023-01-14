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
        background-color: #c900c9;
        height: 100vh;
        margin: 0;
        padding: 0;
        color: #212121;
    }

    :global(button) {
        padding: 12px;
        background-color: #3bb43e;
        font-size: 100%;
        font-weight: 600;
        border-radius: 10px;
        border: black 1px solid;
        box-shadow: black 5px 5px;
        cursor: pointer;
    }

</style>