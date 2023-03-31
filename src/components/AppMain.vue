<script>
import { store } from '../store.js';
import MovieItem from './MovieItem.vue';
import SeriesItem from './SeriesItem.vue';

export default {
    data() {
        return {
            store,
        };
    },

    components: {
        MovieItem,
        SeriesItem
    }
}
</script>

<template>
    <main class="container-centered">
        <h2>FILM</h2>
        <div id="movies-container">
            <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
        </div>

        <h2>SERIE TV</h2>
        <div id="series-tv-container">
            <SeriesItem v-for="series in store.series" :series="series"></SeriesItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    h2 {
        margin-bottom: 20px;
    }

    #movies-container,
    #series-tv-container {
        // display: flex;
        // flex-flow: row wrap;
        // height: 400px;
        // gap: 20px;
        // overflow: auto;
        // margin-bottom: 30px;

        //test
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-padding: 24px;
        border-radius: 20px;
        gap: 20px;

    }
}
</style>