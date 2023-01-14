<script>
    //DO NOT FORGET: change uncomment next statement after back-end is done
    // export let petitions;
    let petitions = [
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

<div class="petitions">
    <h1>Petitions:</h1>
    {#each petitions as petition}
        <div class="petition">
            <h2>{petition.title}</h2>
            <p>{petition.user}</p>
            <a href="{petition.url}">Sign</a>
        </div>
    {/each}
</div>

<style>
    .petitions {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .petition {
        display: inline-grid; /*align-items: center;*/
        border: 1px solid black;
        width: 100%;
        margin: 10px;
    }

    h2 {
        margin: 3px auto 0 15px;
        float: left;
        grid-column: 1;
        grid-row: 1;
    }

    a {
        grid-column: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        margin-right: 30px;
        margin-left: auto;
        padding-top: 5%;

    }

    p {
        margin: 0 auto 3px 15px;
        grid-column: 1;
        grid-row: 2;
    }
</style>