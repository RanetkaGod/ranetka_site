<template>
    <div class="main-page-wrapper">
        <top_menu></top_menu>
        <full-page id="fullpage" :options="options">
            <div class="section title">
                <div class="content">
                    <div class="image-box logo"><img class="main-logo" src="../assets/Ranetka.png"></div>
                    <div class="image-box japanese"><img class="japanese" src="../assets/hentaibaka.png"></div>
                </div>
                <div @click="move_down" class="nav-block" id="down-wrapper">
                    <Down id="down" class="nav_arrow"></Down>
                </div>
            </div>
            <div class="section main-info">
                <div id="slide1" class="slide">
                    <!--<video data-autoplay  loop preload="auto">
                        <source src="../assets/ricardo.mp4"/>
                    </video>-->

                </div>
                <div id="slide2" class="slide">
                    <!--<video data-autoplay loop preload="auto">
                        <source src="../assets/shrek.mp4"/>
                    </video>-->
                </div>
            </div>
        </full-page>

        <!--<Up id="up" class="nav_arrow"></Up>-->

    </div>
</template>

<script>
    import top_menu from './top_menu'
    import Down from '../components/icons/down'
    import Up from '../components/icons/up'

    export default {
        name: "main_page",
        components: {top_menu, Down, Up},
        data() {
            return {
                options: {
                    scrollingSpeed: 700,
                    loopBottom: true,
                    easingcss3: 'ease',
                    scrollHorizontally: true
                },
            }
        },
        methods: {
            move_down: function () {
                fullpage_api.moveSectionDown();
            }
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Aguafina+Script&display=swap')
    @import "../normalize.css"

    $main_color: #F06292
    $complementary_color: #62f0c1
    $additional_complementary_color: #d8f062

    =nav_button_size
        min-width: 40px
        min-height: 40px
        width: 5vw !important
        max-width: 80px
        max-height: 80px !important

    =unhilight
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none

    =flex-row
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center

    =transform-side-arrow($shift)
        transform: translateX($shift)

    @keyframes logo_animation
        0%
            transform: scaleY(0)
        50%
            transform: scaleY(0)
        100%
            transform: scaleY(1)

    @keyframes japanese_animation
        0%
            opacity: 0
        50%
            opacity: 0
        100%
            opacity: 1

    @keyframes move_down_animation
        0%
            opacity: 0
        50%
            opacity: 0
            transform: translateY(-30px)
        100%
            opacity: 1
            transform: translateY(0)

    video
        min-width: 100%
        min-height: 100%

    #down
        height: 100%
        width: 100%
        display: block
    #down-wrapper
        border-radius: 100%
        transition: all .3s ease
        @media (pointer: fine)
            &:hover
                //transform: translateY(10px)
                bottom: -10px //Чтобы не было лага анимации
    .fp-controlArrow
        +nav_button_size
        border: none
        display: block
        height: auto
        transition: all .3s ease
        &:after
            content: ""
            display: block
            padding-bottom: 100%
        &.fp-next
            background: url("../assets/arrow_right.svg") no-repeat
            right: 0
            @media (pointer: fine)
                &:hover
                    +transform-side-arrow(10px)
        &.fp-prev
            background: url("../assets/arrow_left.svg") no-repeat
            left: 0
            @media (pointer: fine)
                &:hover
                    +transform-side-arrow(-10px)
    .main-page-wrapper
        height: 100vh
        width: 100%
    .nav-block
        +nav_button_size
        position: absolute
        margin-left: auto
        margin-right: auto
        left: 0
        right: 0
        bottom: 0
        animation: 1s ease-out 0s 1 move_down_animation
        .nav_arrow
            z-index: 30
            polygon
                fill: white
    .slide
        &#slide1
            background: $complementary_color
        &#slide2
             background: $additional_complementary_color
        .fp-tableCell
            +flex-row
            position: relative
    .section
        &.title
            background: $main_color
            .content
                width: 100%
                height: 100%
                display: flex
                flex-direction: column
                justify-content: center
                align-items: center
                position: relative
                +unhilight
                .image-box
                    position: relative
                    &.logo
                        width: 60vw
                        max-width: 700px
                        min-width: 300px
                    &.japanese
                        width: 40vw
                        max-width: 500px
                        min-width: 220px
                img
                    clear: both
                    position: relative
                    width: 100%
                .main-logo
                    animation: .5s ease-out 0s 1 logo_animation
                .japanese
                    animation: 1s ease-out 0s 1 japanese_animation

        &.main-info
            background: $complementary_color
</style>