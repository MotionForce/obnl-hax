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
            let returned = []
            const list = await pb.collection("petitions").getList()
            for (const element of list.items) {
                let t = {title: element.title, content: element.content, creator_name: element.creator_name, id: element.id}
                // petition_list.push({
                //     title: element.title,
                //     content: element.content,
                //     creator_name: element.creator_name,
                //     id: element.id
                // })
                returned.push(t)
            }
            console.log(returned.length)
            console.log(returned)
            return returned
        } catch (err) {
            console.log(err)
            failed = true;
        }
    }
    petition_list.push({
        title: "test",
        content: "test",
        creator_name: "test",
        id: "test"
    })
    petition_list.push({
        title: "test2",
        content: "test2",
        creator_name: "test2",
        id: "test2"
    })

    for (const element of petition_list) {
        console.log("test")
        if (element.id == data.post.id) {
            current_petition = element
            console.log("pass")
        }
    }

    let fetch_ls = fetch_list()
    console.log(fetch_ls)
    for (const element of fetch_ls) {
        petition_list.push(element)
    }
</script>

<p>{current_petition}</p>