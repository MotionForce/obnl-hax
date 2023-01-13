<script>
    let authorNames = ["Lorem", "ipsum", "dolor", "sit", "amet"];
</script>

<div class="authors">
    <h2>Authors</h2>
    <ul>
        {#each authorNames as authorName}
            <li>{authorName}</li>
        {/each}
    </ul>
</div>

<style>
    .authors {
        padding: 10px;
    }
</style>