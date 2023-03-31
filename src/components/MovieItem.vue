<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },

    props: {
        movie: Object,
    }
}
</script>

<template>
    <div class="movie">
        <div class="title"><span>Titolo:</span>{{ movie.title }}</div>
        <div class="original-title"><span>Titolo Originale:</span> {{ movie.original_title }}</div>
        <div class="languages"><span>Lingua:</span> {{ movie.original_language }}</div>
        <div class="vote"><span>Voto Medio:</span> {{ movie.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    width: calc(100% / 3 - (20px / 3 * 2));
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 20px;

    span {
        font-weight: bold;
        text-transform: uppercase;
        padding-right: 6px;
    }
}
</style>