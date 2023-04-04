<script>

import { store } from '../store.js';
import AppCard from './AppCard.vue';

import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Breakpoints',
    components: {
        AppCard,
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        store,
    }),
})
// FINE CODICE DI PROVE PER CAROUSEL
</script>

<template>
    <main class="container-centered">
        <h2>FILM</h2>
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="movie in store.movies" :key="movie">
                <div class="carousel__item">
                    <AppCard :searchItem="movie" :itemType="'movie'"></AppCard>
                </div>

            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <h2>SERIE TV</h2>
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="series in store.series" :key="series">
                <div class="carousel__item">
                    <AppCard :searchItem="series" :itemType="'series'"></AppCard>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: 100px;

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    .carousel {
        text-align: start;
    }
}
</style>