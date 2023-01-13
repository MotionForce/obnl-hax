<script>
    //DO NOT FORGET: change uncomment next statement after back-end is done
    // export let petitions;
    let petitions = [];
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