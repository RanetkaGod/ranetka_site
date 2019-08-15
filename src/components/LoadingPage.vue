<template>
    <div class="loading-background">
        <img class="loading-img" src="../assets/icon.png">
    </div>
</template>

<script>
    export default {
        name: "LoadingPage"
    }
</script>

<style lang="sass">
    @keyframes spin_logo
        0%
            transform: rotate(0deg)
        100%
            transform: rotate(360deg)

    .loading-background
        width: 100%
        height: 100%
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        background: white
    .loading-img
        opacity: 0.5
        width: 50px
        height: 50px
        animation: .8s linear 0s infinite spin_logo

</style>
