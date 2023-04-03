<script>

import { store } from '../store.js';
import MovieItem from './MovieItem.vue';
import SeriesItem from './SeriesItem.vue';

export default {
    data() {
        return {
            store,
            activeIndex: 0,
        };
    },

    components: {
        MovieItem,
        SeriesItem,
    },

    methods: {

        next() {
            if (this.activeIndex < this.store.movies.length - 1) {
                this.activeIndex++;
                console.log("cliccato");
            } else {
                this.activeIndex = 0;
            }
        },

        previous() {
            if (this.activeIndex == 0) {
                this.activeIndex = this.store.movies.length - 1;
            } else {
                this.activeIndex--;
                console.log("cliccato");
            }
        },
    }
}
</script>

<template>
    <main class="container-centered">

        <h2>FILM</h2>
        <!-- Inizio slider arrow -->
        <div class="arrow-left" @click="previous()"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="arrow-right" @click="next()"><i class="fa-solid fa-chevron-right"></i></div>
        <!-- Fine slider arrow -->

        <div id="movies-container">
            <MovieItem v-for="(movie, index) in store.movies" :class="index == activeIndex ? 'active' : ''" :movie="movie">
            </MovieItem>
        </div>

        <h2>SERIE TV</h2>
        <div id="series-tv-container">
            <SeriesItem v-for="series in store.series" :series="series"></SeriesItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: 100px;

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    #movies-container,
    #series-tv-container {
        position: relative;
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-padding: 24px;
        border-radius: 20px;

    }

    .arrow-left,
    .arrow-right {
        display: flex;
        justify-content: center;
        color: red;
        font-size: 30px;

    }
}
</style>