<script>
import { store } from '../store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    data() {
        return {
            store,
        };
    },

    props: {
        series: Object,
    },

    methods: {
        flagIcon() {
            let language = this.series.original_language;

            if (language == 'en') {
                language = 'gb';

            } else if (language == 'ja') {
                language = 'jp';

            } else if (language == 'zh') {
                language = 'cn';

            } else if (language == 'ko') {
                language = 'kr';

            } else if (language == '') {
                language = sconosciuta;

            } return language;

        },
    },
}
</script>

<template>
    <div class="series">
        <div class="series-image">
            <img :src="` ${this.store.imagePath + series.poster_path} `" alt="">
        </div>
        <div class="series-details">
            <div class="title"><span>Titolo:</span>{{ series.name }}</div>
            <div class="original-title"><span>Titolo Originale:</span> {{ series.original_name }}</div>
            <div class="languages"><span>Lingua:</span><span :class="`fi fi-${flagIcon()} fis`"></span>
                {{ series.original_language }} </div>
            <div class="vote"><span>Voto Medio:</span> {{ series.vote_average }}</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.series {
    width: calc(100% / 3 - (20px / 3 * 2));

    color: black;
    background-color: white;

    img {
        width: 100%;
    }

    .series-details {
        padding: 20px;

        span {
            font-weight: bold;
            text-transform: uppercase;
            padding-right: 6px;
        }
    }
}
</style>