<template>
    <div class="top-menu-wrapper">
        <div id="links-wrapper">
            <a id="twitter" target="_blank" rel="noopener noreferrer" href="http://twitter.com/RanetkaGod">
                <div class="social-icon color-icon" id="twitter-color-icon"></div>
                <div class="social-icon white-icon" id="twitter-white-icon"></div>
            </a>
            <a id="instagram" target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/ranetkagod/">
                <div class="social-icon color-icon" id="instagram-color-icon"></div>
                <div class="social-icon white-icon" id="instagram-white-icon"></div>
            </a>
        </div>
    </div>
</template>

<script>



    export default {
        name: "top_menu",
        data() {
            return {

            }
        },
        computed:{
            /**
             * @return {boolean}
             */
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap')
    @keyframes slide_top
        0%
            transform: translateY(-80px)
        50%
            transform: translateY(-80px)
            //opacity: 0
        100%
            transform: translateY(0)
            opacity: 1
    @media (pointer: coarse)
        .color-icon:hover
            opacity: 0 !important

    =flex-row
        display: flex
        flex-direction: row
        justify-content: flex-end

    .top-menu-wrapper
        font-family: 'Roboto', sans-serif
        align-items: center
        width: 100%
        height: 80px
        position: fixed
        -webkit-backface-visibility: hidden
        z-index: 99
        +flex-row
        #links-wrapper
            box-sizing: border-box
            display: block
            animation: 1s ease-out 0s 1 slide_top
            padding: 0 15px 0 15px
            position: relative
            +flex-row
            .icon
                transition: all .2s linear
                cursor: pointer
            a
                box-sizing: border-box
                margin: 0 5px 0 5px
                min-width: 30px
                min-height: 30px
                width: 5vw !important
                max-width: 40px
                max-height: 40px
                position: relative
                display: block
                outline: none
                &:before
                    content: ''
                    display: block
                    position: relative
                    padding-top: 100%
                .social-icon
                    display: block
                    position: absolute
                    width: 100%
                    height: 100%
                    top: 0
                    &.color-icon
                        z-index: 1
                        opacity: 0
                        transition: all .4s
                        &:hover
                            opacity: 1
                    &#twitter-color-icon
                        background: url("../assets/colorfull_twitter.png") no-repeat center
                    &#twitter-white-icon
                        background: url("../assets/white_twitter.png") no-repeat center
                    &#instagram-color-icon
                        background: url("../assets/colorfull_instagram.png") no-repeat center
                    &#instagram-white-icon
                        background: url("../assets/white_instagram.png") no-repeat center
                    background-size: contain !important
</style>