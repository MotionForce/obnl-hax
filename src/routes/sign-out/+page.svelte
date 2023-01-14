<script>
    import {_} from "svelte-i18n";
</script>

<div class="content">
    <h1>{$_('signout.title').replace("signout.", "")}</h1>
    <p>{$_('signout.message').replace("signout.", "")}</p><a href="/">
    <button>{$_('signout.home').replace("signout.", "")}</button>
</a>
</div>

<style>
    .content {
        width: 100%;
        max-width: 500px;
        margin: 150px auto;
        background-color: #4ac23c;
        padding: 20px;
        text-align: center;
        scale: 1.5;
        border-radius: 10px;
        border: 1px solid #000000;
        box-shadow: black 5px 5px;
    }
</style>