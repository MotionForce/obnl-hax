<script lang="ts">
    import {pb} from "$lib/auth.js"
    import model from "pocketbase"

    let petition_list = []
    let failed = false

    async function fetch_list(){
        try{
            const list = await pb.collection("petitions").getList(1, 100, {
                sort: "-created"
            })
            let temp = []
            for (const element of list.items){
                temp.push({
                    title: element.title,
                    content: element.content,
                    creator_name: element.creator_name,
                    id: element.id
                })
            }
            petition_list = temp
        }catch(err)
        {
            failed = true;
        }
    }
    fetch_list()
</script>
<h1>Petitions:</h1>
<div class="petitions">
    {#each petition_list as petition}
        <div class="petition">
            <div class="petition-text">
                <h2>{petition.title}</h2>
                <p>{petition.creator_name}</p>
            </div>
            <div class="petition-button">
                <a href="/petitions/{petition.id}">
                    <button>Open petition</button>
                </a>
            </div>
        </div>
    {/each}
</div>

<style>
    .petitions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 15px auto 15px;
    }

    .petition {
        display: inline;
        width: 100%;
        margin: 10px;
        background-color: rgba(87, 192, 45, 0.52);
        border-radius: 10px;
    }

    .petition-text {
        display: inline-grid
    }

    .petition-button {
        float: right;
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
        margin-top: 10%;
        padding: 8px;
        background-color: rgba(87, 192, 45, 0.65);
        font-size: 100%;
        border: 0;
        border-radius: 10px;
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