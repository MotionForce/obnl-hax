<script>
    //DO NOT FORGET: change uncomment next statement after back-end is done
    // export let petitions;

    export let petitions = [
        {
            id: 1,
            title: "Petition 1",
            user: "user1",
        },
        {
            id: 2,
            title: "Petition 2",
            user: "user2",
        }];
</script>

<h1>Petitions:</h1>
<div class="petitions">
    {#each petitions as petition}
        <div class="petition">
            <div class="petition-text">
                <h2>{petition.title}</h2>
                <p>{petition.user}</p>
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