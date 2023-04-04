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

    computed: {
        languageFix() {
            switch (this.series.original_language) {
                case "en":
                    return "gb";

                case "ja":
                    return "jp";

                case "zh":
                    return "cn";

                case "ko":
                    return "kr";

                default:
                    return this.series.original_language;
            }
        }
    },

    methods: {

        voteWithStars() {
            return Math.ceil(this.series.vote_average / 2);
        }
    },
}

</script>

<template>
    <div class="series">
        <div class="series-image">
            <img v-if="series.poster_path == null" src="/img/ant-non-disp.jpg" alt="anteprima non disponibile">
            <img v-else :src="` ${this.store.imagePath + series.poster_path} `" :alt="series.name">
        </div>
        <div class="series-details">
            <div class="title"><span>Titolo:</span>{{ series.name }}</div>
            <div class="original-title"><span>Titolo Originale:</span> {{ series.original_name }}</div>
            <div class="languages"><span>Lingua:</span><span :class="`fi fi-${languageFix} fis`"></span></div>
            <div class="vote"><span>Voto Medio:</span><i v-for="number in voteWithStars()" class="fa-solid fa-star"></i><i
                    v-for="number in 5 - voteWithStars()" class="fa-regular fa-star"></i>
            </div>
            <div class="overview"><span>Overview:</span> {{ series.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.series {
    flex: 0 0 23%;
    border-radius: 10px;
    scroll-snap-align: start;
    cursor: pointer;
    margin: 26px 0;
    padding: 10px 10px;
    cursor: pointer;
    transition: all 0.8s;
    height: 100%;

    &:hover {
        transform: scale(1.15);
    }

    &:hover .series-image img {
        transition: opacity 0.6s ease-in-out;
        opacity: 0.10;
    }

    &:first-child {
        margin-left: 10px;
    }

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .series-details {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.7em;
        width: 70%;
        height: 70%;
        transition: all 0.7s;
        overflow: auto;

        .title {
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    &:hover .series-details {
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