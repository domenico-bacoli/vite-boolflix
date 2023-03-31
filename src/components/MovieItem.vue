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
        movie: Object,
    },

    methods: {
        flagIcon() {
            let language = this.movie.original_language;

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
    <div class="movie">
        <div class="movie-image">
            <img :src="` ${this.store.imagePath + movie.poster_path} `" alt="">
        </div>
        <div class="movie-details">
            <div class="title"><span>Titolo:</span>{{ movie.title }}</div>
            <div class="original-title"><span>Titolo Originale:</span> {{ movie.original_title }}</div>
            <div class="languages"><span>Lingua:</span><span :class="`fi fi-${flagIcon()} fis`"></span>
                {{ movie.original_language }}</div>
            <div class="vote"><span>Voto Medio:</span> {{ movie.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    // width: calc(100% / 3 - (20px / 3 * 2));
    // background-color: white;
    // color: black;
    // border-radius: 20px;

    //test
    flex: 0 0 25%;
    // padding: 10px;
    border-radius: 10px;
    scroll-snap-align: start;

    .movie-image {

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .movie-details {
        padding: 10px;
    }

    span {
        font-weight: bold;
        text-transform: uppercase;
        padding-right: 6px;
    }
}
</style>