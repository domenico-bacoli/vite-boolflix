<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        };
    },

    props: {
        searchItem: Object,
        itemType: String,
    },

    computed: {
        languageFix() {
            switch (this.searchItem.original_language) {
                case "en":
                    return "gb";

                case "ja":
                    return "jp";

                case "zh":
                    return "cn";

                case "ko":
                    return "kr";

                default:
                    return this.searchItem.original_language;
            }
        }
    },

    methods: {
        voteWithStars() {
            return Math.ceil(this.searchItem.vote_average / 2);
        },

    },
}

</script>

<template>
    <div class="card">
        <div class="card-image">
            <img v-if="searchItem.poster_path == null" src="/img/ant-non-disp.jpg" alt="anteprima non disponibile">
            <img v-else :src="` ${this.store.imagePath + searchItem.poster_path} `" :alt="searchItem.title">
        </div>

        <div class="card-details">
            <!-- Controllo tramite prop: itemType la differenziazione tra film e serieTv poichè 
                    per accedere al title dobbiamo usare .title per i film e .name per le serieTv -->
            <div v-if="itemType == 'movie'" class="title"><span>Titolo:</span> {{ searchItem.title }}</div>
            <div v-else class="title"><span>Titolo:</span> {{ searchItem.name }}</div>

            <div v-if="itemType == 'movie'" class="original-title"><span>Titolo Originale:</span> {{
                searchItem.original_title }}</div>
            <div v-else class="original-title"><span>Titolo Originale:</span> {{ searchItem.original_name }}</div>

            <div class="languages"><span>Lingua:</span><span :class="`fi fi-${languageFix} fis`"></span></div>
            <div class="vote"><span>Voto Medio:</span><i v-for="number in voteWithStars()" class="fa-solid fa-star"></i><i
                    v-for="number in 5 - voteWithStars()" class="fa-regular fa-star"></i>
            </div>
            <div class="overview"><span>Overview:</span> {{ searchItem.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    cursor: pointer;
    transition: all 0.8s;
    border-radius: 20px;

    padding: 30px 10px;


    &:hover {
        transform: scale(1.15);
        border-radius: 20px;
    }

    &:hover .card-image img {
        transition: opacity 0.6s ease-in-out;
        opacity: 0.10;
        border-radius: 20px;
    }

    .card-image {

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .card-details {
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

    &:hover .card-details {
        display: flex;
        flex-direction: column;
        gap: 2px;
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