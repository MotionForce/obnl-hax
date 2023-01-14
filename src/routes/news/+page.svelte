<script>

    export let data

</script>
{#each data.post.apiRes.articles as article}
    <h4>{article.title}</h4>
    <p>{article.description}</p>
    <a href={article.url}><button>lire</button></a>
{/each}