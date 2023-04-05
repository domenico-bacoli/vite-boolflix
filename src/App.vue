<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from "axios";
import { createDOMCompilerError } from '@vue/compiler-dom';
import AppCard from './components/AppCard.vue';

export default {
  data() {
    return {
      store,
    };
  },

  created() {
    //Richiesta API che avverrà al caricamento della pagina
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
      this.store.movies = res.data.results;
    });
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
      this.store.series = res.data.results;
    });
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    search() {
      if (this.store.userValueInput == '') {

      } else {
        this.movieSearch();
        this.seriesSearch();
      }

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
      });
    },

    returnHome() {
      axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
        this.store.movies = res.data.results;
      });
      axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
        this.store.series = res.data.results;
      });
      this.store.isSerieTvClicked = true;
      this.store.isFilmClicked = true;
    },

    navFilm() {

      axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
        this.store.movies = res.data.results;
      });
      this.store.series = '';
      this.store.isSerieTvClicked = false;
      this.store.isFilmClicked = true;
    },

    navSerieTv() {

      axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
        this.store.series = res.data.results;
      });
      this.store.movies = '';
      this.store.isFilmClicked = false;
      this.store.isSerieTvClicked = true;
    },
  },


}

</script>

<template>
  <AppHeader @searchMovie="search()" @homeReturn="returnHome()" @onlyFilm="navFilm()" @onlySerieTv="navSerieTv()">
  </AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
