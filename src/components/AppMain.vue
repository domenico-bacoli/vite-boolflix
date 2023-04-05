<script>

import { store } from '../store.js';
import AppCard from './AppCard.vue';

import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

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

</script>

<template>
    <main class="container-centered">
        <section id="movie" v-show="this.store.isFilmClicked == true">
            <h2>FILM</h2>
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="movie in store.movies" :key="movie">
                    <div class="carousel__item">
                        <AppCard :searchItem="movie" :itemType="'movie'">
                        </AppCard>
                    </div>

                </Slide>

                <template #addons>
                    <Navigation>
                        <template #next>
                            <i class="fa-solid fa-chevron-right"></i>
                        </template>
                        <template #prev>
                            <i class="fa-solid fa-chevron-left"></i>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </section>

        <section id="tv-series" v-show="this.store.isSerieTvClicked == true">
            <h2>SERIE TV</h2>
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="series in store.series" :key="series">
                    <div class="carousel__item">
                        <AppCard :searchItem="series" :itemType="'series'">
                        </AppCard>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation>
                        <template #next>
                            <i class="fa-solid fa-chevron-right"></i>
                        </template>
                        <template #prev>
                            <i class="fa-solid fa-chevron-left"></i>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </section>

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

.fa-solid.fa-chevron-right {
    font-size: 46px;
    padding-right: 20px;
    color: white;
    transition: all 0.4s ease-in-out;
}

.fa-solid.fa-chevron-left {
    font-size: 50px;
    padding-left: 20px;
    color: white;
    transition: all 0.5s ease-in-out;
}

.fa-solid.fa-chevron-right:hover,
.fa-solid.fa-chevron-left:hover {
    transform: scale(1.4);
}

.carousel:hover .fa-solid.fa-chevron-right,
.carousel:hover .fa-solid.fa-chevron-left {
    transform: scale(1.4);
}
</style>
