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
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
      console.log(res);
      this.store.movies = res.data.results;
    });
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
      console.log(res);
      this.store.series = res.data.results;
    });
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    search() {
      this.movieSearch();
      this.seriesSearch();
    },

    movieSearch() {
      let userMovieCall = this.store.APIsearchMovies + this.store.userValueInput;
      axios.get(userMovieCall).then((res) => {
        this.store.movies = res.data.results;
      })
    },

    seriesSearch() {
      let userSeriesCall = this.store.APIsearchSeries + this.store.userValueInput;
      axios.get(userSeriesCall).then((res) => {
        this.store.series = res.data.results;
        console.log(res);
      });
    }
  },
}

</script>

<template>
  <AppHeader @searchMovie="search()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
