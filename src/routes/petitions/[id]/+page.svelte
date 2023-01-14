<script lang="ts">
    import {pb} from "$lib/auth.js"
    import model from "pocketbase"

    let petition_list = []
    let current_petition = {}
    let petition_text
    let failed = false

    export let data

    async function fetch_list() {
        try {
            const list = await pb.collection("petitions").getList()
            for (const element of list.items) {
                petition_list.push({
                    title: element.title,
                    content: element.content,
                    creator_name: element.creator_name,
                    id: element.id
                })
            }
        } catch (err) {
            console.log(err)
            failed = true;
        }
    }

    for (const element of petition_list) {
        console.log("test")
        if (element.id == data.post.id) {
            current_petition = element
            console.log("pass")
        }
    }

    fetch_list()
</script>

<p>{current_petition}</p>