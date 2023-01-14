<script>
    import {pb} from "$lib/auth.js"

    let title = ""
    let content = ""
    let failed = false;

    async function create(){
        try{
            await pb.collection("blog_posts").create({
                title: title,
                content: content,
            })
        }catch (err){
            failed = true
        }
    }
</script>
titre <input bind:value={title}/><br>
contenu <input bind:value={content}/><br>
<button on:click={create}>créer</button>


