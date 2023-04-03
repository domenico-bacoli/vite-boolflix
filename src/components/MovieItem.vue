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

    computed: {
        languageFix() {
            switch (this.movie.original_language) {
                case "en":
                    return "gb";

                case "ja":
                    return "jp";

                case "zh":
                    return "cn";

                case "ko":
                    return "kr";

                default:
                    return this.movie.original_language;
            }
        }
    },

    methods: {

        voteWithStars(vote) {
            let num = vote;
            vote = Math.round(num);
            return vote;
        },
    },
}
</script>

<template>
    <div class="movie">
        <div class="movie-image">
            <img v-if="movie.poster_path == null" src="/img/ant-non-disp.jpg" alt="anteprima non disponibile">
            <img v-else :src="` ${this.store.imagePath + movie.poster_path} `" :alt="movie.title">
        </div>

        <div class="movie-details">
            <div class="title"><span>Titolo:</span>{{ movie.title }}</div>
            <div class="original-title"><span>Titolo Originale:</span> {{ movie.original_title }}</div>
            <div class="languages"><span>Lingua:</span><span :class="`fi fi-${languageFix} fis`"></span></div>
            <div class="vote"><span>Voto Medio:</span><i v-for="star in store.starsVote"
                    :class="star < voteWithStars(movie.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
            </div>
            <div class="overview"><span>Overview:</span> {{ movie.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    position: relative;
    flex: 0 0 23%;
    border-radius: 10px;
    scroll-snap-align: start;

    margin: 26px 0;
    padding: 10px 10px;
    cursor: pointer;
    transition: all 0.8s;

    &.active {
        position: sticky;
        z-index: 2;
        border: 3px solid white;
    }

    &:hover {
        transform: scale(1.15);
    }

    &:hover .movie-image img {
        transition: opacity 0.6s ease-in-out;
        opacity: 0.10;
    }

    &:first-child {
        margin-left: 10px;
    }

    .movie-image {

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .movie-details {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.7em;
        width: 80%;
        transition: all 0.7s;
        padding: 10px;
        max-height: 100%;
        overflow: auto;

        .title {
            text-transform: uppercase;
        }
    }

    &:hover .movie-details {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    span {
        font-size: 1.1em;
        font-weight: bold;
        text-transform: uppercase;
        padding-right: 6px;
        color: rgb(220, 31, 43);
    }

    .fa-solid.fa-star {
        color: gold;
    }
}
</style>