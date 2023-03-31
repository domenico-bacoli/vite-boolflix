<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },

    props: {
        series: Object,
    }
}
</script>

<template>
    <div class="series">
        <div class="title"><span>Titolo:</span>{{ series.name }}</div>
        <div class="original-title"><span>Titolo Originale:</span> {{ series.original_name }}</div>
        <div class="languages"><span>Lingua:</span> {{ series.original_language }}</div>
        <div class="vote"><span>Voto Medio:</span> {{ series.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
.series {
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