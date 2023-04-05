<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },

    components: {

    },

    emits: ['searchMovie', 'homeReturn', 'onlyFilm', 'onlySerieTv'],

}
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <img src="/img/netflix-logo.svg" alt="logo netflix">
                <div class="nav-link">
                    <ul>
                        <li @click="$emit('homeReturn')">Home</li>
                        <li @click="$emit('onlyFilm')">Film</li>
                        <li @click="$emit('onlySerieTv')">Serie TV</li>
                        <li>La mia Lista</li>
                    </ul>
                </div>
            </div>

            <div class="movies-search">
                <input v-model="store.userValueInput" type="text" placeholder="Inserisci un Titolo"
                    @keyup.enter="$emit('searchMovie')">
                <div class="button-search">
                    <button @click="$emit('searchMovie')">CERCA</button>
                </div>
            </div>

        </nav>

    </header>
</template>

<style lang="scss" scoped>
header {

    nav {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        background-color: rgb(11, 11, 11);
        width: 100%;
        z-index: 2;

        .logo {
            display: flex;
            align-items: center;
            gap: 60px;
            height: 100%;
            padding: 22px 60px;

            img {
                height: 100%;
            }

            .nav-link {

                ul {
                    display: flex;
                    align-items: center;
                    gap: 30px;

                    li {
                        font-size: 0.9em;
                        cursor: pointer;

                        &:hover {
                            color: gray;
                        }
                    }
                }
            }

        }

        .movies-search {
            display: flex;
            gap: 20px;

            input {
                padding: 8px 40px;
                border-radius: 8px;
                border: 1px solid white;
                background-color: rgb(11, 11, 11);
                color: white;
            }
        }

        .button-search {
            padding-right: 60px;

            button {
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid transparent;
                cursor: pointer;
                font-weight: bold;
                transition: 0.4s ease;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.6);
                }
            }
        }

    }

    input::placeholder {
        color: gray;
    }

}
</style>