<script>
    //DO NOT FORGET: change uncomment next statement after back-end is done
    // export let petitions;
    let petitions = [
        {
            id: 1,
            title: "Petition 1",
            description: "Petition 1 description",
        },
        {
            id: 2,
            title: "Petition 2",
            description: "Petition 2 description"}];
</script>

<div class="petitions">
    <h1>Petitions:</h1>
    {#each petitions as petition}
        <div class="petition">
            <h2>{petition.title}</h2>
            <p>{petition.description}</p>
            <a href="{petition.url}">Sign</a>
        </div>
    {/each}
</div>

<style>
    .petitions {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .petition {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        width: 50%;
        margin: 10px;
    }
</style>