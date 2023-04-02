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
        SeriesItem,
    },
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
}
</style>