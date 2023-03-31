<script>
import { store } from '../store.js';
import MovieItem from './MovieItem.vue';

export default {
    data() {
        return {
            store,
        };
    },

    components: {
        MovieItem,
    }
}
</script>

<template>
    <main>
        <div id="movies-container" class="container-centered">
            <MovieItem v-for="movie in store.movies" :movie="movie"></MovieItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {


    #movies-container {
        display: flex;
        flex-flow: row wrap;
        gap: 20px;
    }
}
</style>