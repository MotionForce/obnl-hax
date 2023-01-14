<script>

    import {_} from "svelte-i18n";

    export let data

</script>

<div class="header">
    <h1>{$_('news.title').replace("news.", "")}</h1>
</div>
<div class="content">
    {#each data.post.apiRes.articles as article}
        <div class="article-wrapper">
            <div class="article">
                <h4>{article.title}</h4>
                <p>{article.description}</p> <a href={article.url}><button>{$_('news.read').replace("news.", "")}{article.source.name}</button></a>
            </div>
        </div>
    {/each}
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 0 15px auto 15px;
    }

    .article-wrapper {
        display: inline;
        background-color: #3bb43e;
        margin: 10px;
        padding: 5px 20px 20px 20px;
        border-radius: 10px;
        border: 1px solid #000000;
        box-shadow: black 5px 5px;
    }

    h4{
        margin-bottom: 0;
    }

    button{
        margin-top: 10px;
        background-color: #f8fd00;
    }

    h1 {
        margin-left: 20px;
    }
</style>
