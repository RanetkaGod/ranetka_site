<template>
    <div class="main-page-wrapper">
        <top-menu></top-menu>
        <full-page id="fullpage" :options="options">
            <div class="section title">
                <div class="content">
                    <div class="image-box logo"><img class="main-logo" src="../assets/Ranetka.png"></div>
                    <div class="image-box japanese"><img class="japanese" src="../assets/hentaibaka.png"></div>
                </div>
                <div @click="move_down" class="nav-block" id="down-wrapper">
                    <arrow-down id="down" class="nav_arrow"></arrow-down>
                </div>
            </div>
            <div class="section main-info">
                <div id="slide1" class="slide">
                    <div class="project-item">
                        <div class="image-slider">
                            <img class="image" src="https://i.imgur.com/2F2Rz3r.png"/>
                        </div>
                        <div class="description">
                            <span class="description-title">Новостной портал</span>
                            <div class="description-content">
                                Данный проект написан при помощи фреймворка vue.js. Новостной портал позволяет пользователям
                                писать статьи на свободные темы, добавлять картинки и прочие медиа файлы. Другие пользователи могут читать статьи, оценивать,
                                комментировать их. Статьи выводятся в списке статей в хронологическом порядке, но также могут быть отсортированы и по другим критериям.
                                Картинки обладают ленивой загрузкой, благодаря чему время на загрузку страницы минимально.
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" class="slide">

                </div>
            </div>
        </full-page>

        <!--<Up id="up" class="nav_arrow"></Up>-->

    </div>
</template>

<script>
    import TopMenu from './TopMenu'
    import ArrowDown from './icons/ArrowDown'

    export default {
        name: "MainPage",
        components: {TopMenu, ArrowDown},
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
                /* eslint-disable */
                fullpage_api.moveSectionDown();
            }
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap')
    @import "../normalize.css"

    $main_color: #F06292
    $complementary_color: #62f0c1
    $additional_complementary_color: #d8f062


    body
        font-family: 'Open Sans', sans-serif
    *
        box-sizing: border-box

    =nav_button_size
        min-width: 50px
        min-height: 50px
        width: 5vw !important
        max-width: 60px
        max-height: 60px !important

    =deselect
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-drag: none
        user-select: none
        -webkit-user-drag: none

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
                bottom: -10px
    //Чтобы не было лага анимации
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
        .project-item
            background: white
            padding: 100px  50px
            display: flex
            flex-direction: row
            box-shadow: 0 0 10px #afafaf
            .description
                padding: 0 40px
                display: flex
                flex-direction: column
                max-width: 600px
                .description-title
                    align-self: center
                    font-size: 30px
                    margin-bottom: 20px
                .description-content
                    line-height: 1.8
                    font-size: 18px

            .image-slider
                position: relative
                display: block
                max-width: 600px
                .image
                    width: 100%
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
                +deselect

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
