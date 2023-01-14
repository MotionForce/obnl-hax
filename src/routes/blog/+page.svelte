<script>
    import {pb} from "$lib/auth.js"

    let blog_posts = []
    let failed_fetch = false;

    async function fetch_posts(){
        try{
            const list = await pb.collection("blog_posts").getList(1, 100, {
                sort: "-created"
            })
            let temp = []
            for (const element in list.items){
                temp.push({
                    title: element.title,
                    content: element.content,
                    id: element.id,
                })
            }
            blog_posts = temp
        }catch(err){
            failed_fetch = true;
        }
    }
    fetch_posts()
</script>