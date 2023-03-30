<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },

    components: {

    }
}
</script>

<template>
    <div class="movies-search">
        <input v-model="store.userValueInput" type="text" placeholder="Inserisci un Titolo">
        <button>CERCA</button>
    </div>
</template>

<style lang="scss" scoped>
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
</style>