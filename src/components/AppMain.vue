<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';

import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

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
        activeMovieIndex: 0,
        activeSeriesIndex: 0,
    }),

    methods: {
        startJumbo(index) {
            this.activeMovieIndex = index;
            this.activeSeriesIndex = index;
            console.log(this.store.movies[this.activeMovieIndex].title);
        },
    }
})
</script>

<template>
    <!-- START CARD PREVIEW WORK IN PROGRESS -->
    <div class="card-preview"
        :style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/original' + this.store.movies[this.activeMovieIndex].backdrop_path + ')' }">
        <div class="overlay">
            <div class=" card-preview-details container-centered">
                <div class="preview-title">
                    <div class="title">Titolo:
                        <div class="title-text">
                            {{ this.store.movies[this.activeMovieIndex].title }}
                        </div>
                    </div>
                </div>
                <div class="preview-overview">
                    <div class="overview">Overview:
                        <div class="overview-text">{{ this.store.movies[this.activeMovieIndex].overview }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END CARD PREVIEW WORK IN PROGRESS -->
    <main class="container-centered">

        <section id="movie" v-show="store.isFilmActive">
            <h2>FILM</h2>
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="(movie, index) in store.movies" :key="movie"
                    :class="index == activeMovieIndex ? 'active' : ''" @click="startJumbo(index)">
                    <div class="carousel__item">
                        <AppCard :searchItem="movie" :itemType="'movie'"></AppCard>
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

        <section id="tv-series" v-show="store.isSerieTvActive">
            <h2>SERIE TV</h2>
            <Carousel :settings="settings" :breakpoints="breakpoints">
                <Slide v-for="( series, index ) in store.series" :key="series">
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
// CARD PREVIEW
.card-preview {
    display: flex;
    align-items: center;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 70px;

    .overlay {
        display: flex;
        width: 100%;
        height: 100%;
        background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    }

    .card-preview-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        .preview-title {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 18px;
        }

        .title,
        .overview {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 22px;
            color: rgb(220, 31, 43);

        }

        .preview-overview {
            width: 30%;
            font-weight: bold;

        }

        .title-text {
            color: white;
        }

        .overview-text {
            color: white;
            text-transform: lowercase;
            font-size: 0.6em;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

//END CARD PREVIEW
main {
    padding-top: 30px;

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    .carousel {
        text-align: start;
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
}
</style>
