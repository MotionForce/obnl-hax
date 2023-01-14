<script>
    import {pb} from "$lib/auth.js"

    let blog_posts = []
    let failed_fetch = false;

    let logged_in = pb.authStore.isValid
    let _admin = false;

    async function fetch_posts() {
        try {
            const list = await pb.collection("blog_posts").getList(1, 100, {
                sort: "-created"
            })
            let temp = []
            for (const element of list.items) {
                temp.push({
                    title: element.title,
                    content: element.content,
                    id: element.id,
                    created: element.created,
                })
            }
            blog_posts = temp
        } catch (err) {
            failed_fetch = true;
        }
    }

    setInterval(() => {
        logged_in = pb.authStore.isValid
        if (logged_in) {
            _admin = pb.authStore.model.admin
        }
    }, 1000)

    function parseDate (date) {
        let d = new Date(date)
        return d.toLocaleDateString()
    }

    fetch_posts()
</script>

<div class="head">
    <h1>Nouvelles:</h1>
    {#if _admin && logged_in}
        <button on:click={() => window.location.href = "/blog/create"}>Créer un post</button>
        <p></p>
    {/if}
</div>
<div class="blogs">
    {#each blog_posts as blog}
        <div class="blog">
            <div class="blog-text">
                <div class="title-level">
                    <details>
                        <summary>{blog.title}</summary>
                        <p>{parseDate(blog.created)}</p>
                        <p>{blog.content}</p>
                    </details>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .head h1 {
        margin-right: auto;
    }

    .head button {
        margin-top: 30px;
        margin-bottom: 20px;
        margin-right: 20px;
    }

    .blogs {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 15px auto 15px;
    }

    .blog {
        display: inline;
        width: 100%;
        margin: 10px;
        background-color: #4ac23c;
        border-radius: 10px;
        border: 1px solid #000000;
        box-shadow: black 5px 5px;
    }

    .blog-text {
        display: inline-grid
    }

    .title-level {
        display: inline;
        margin: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    .title-level p {
        margin: 10px;
        font-size: 15px;
        font-weight: normal;
    }

    h2 {
        margin: 10px auto auto 15px;
        float: left;
        grid-column: 1;
        grid-row: 1;
        font-family: "Arial Rounded MT Light", sans-serif;
    }

    button {
        margin-right: 10px;
        margin-left: auto;
        margin-top: 8%;
    }

    p {
        margin: 0 auto 5px 15px;
        grid-column: 1;
        grid-row: 2;
    }

    h1 {
        margin-left: 50px;
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 300%;
    }

</style>