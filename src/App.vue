<template>
    <div id="app">
        <main_page></main_page>
        <!--<main_page v-if="loaded"></main_page>
        <loading_page v-else></loading_page>-->
    </div>
</template>

<script>

    import main_page from './components/main_page'
    //import loading_page from './components/loading_page'

    export default {
        name: 'app',
        components: {main_page},
        data() {
            return {
                //loaded: false,
            }
        },
        // mounted: function () {
        //     let self = this;
        //     setTimeout(function () {
        //         self.loaded = true
        //     }, 500);
        // }
    }
</script>

<style>
    @import "normalize.css";

    body {
        height: 100vh !important;
    }

    #app {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
