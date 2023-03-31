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

    emits: ['searchMovie'],

}
</script>

<template>
    <header>
        <div class="movies-search">
            <input v-model="store.userValueInput" type="text" placeholder="Inserisci un Titolo"
                @keyup.enter="$emit('searchMovie')">
            <button @click="$emit('searchMovie')">CERCA</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    margin-bottom: 40px;

    .movies-search {
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        gap: 50px;
        margin: 40px 0;

        input,
        button {
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
        }
    }
}
</style>