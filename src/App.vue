<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  created() {
    //Richiesta API che avverrà al caricamento della pagina
    // axios.get('https://api.themoviedb.org/3/search/movie?api_key=039ed4dd946ea3a9b91c880f13f9942f&query=rings').then((res) => {
    //   console.log(res);
    //   this.store.movies = res.data.results;
    // });
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    movieSearch() {
      let userApiCall = this.store.APIsearchQuery + this.store.userValueInput;
      axios.get(userApiCall).then((res) => {
        this.store.movies = res.data.results;
        console.log(res);

      });
    }
  },
}

</script>

<template>
  <AppHeader @searchMovie="movieSearch()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
