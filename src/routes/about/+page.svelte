<script>
    let authorNames = ["Andrey Kovalskiy", "Émilien Lavallée"];
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
        background-color: #eee;
        padding: 10px;
    }
</style>