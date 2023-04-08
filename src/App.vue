<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


import { createDOMCompilerError } from '@vue/compiler-dom';
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
      this.store.movies = res.data.results;
      console.log(res);
    });
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
      this.store.series = res.data.results;
      console.log(res);
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
      this.store.isSerieTvActive = true;
      this.store.isFilmActive = true;
    },

    navFilm() {

      axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
        this.store.movies = res.data.results;
      });
      this.store.series = '';
      this.store.isSerieTvActive = false;
      this.store.isFilmActive = true;
    },

    navSerieTv() {

      axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=039ed4dd946ea3a9b91c880f13f9942f').then((res) => {
        this.store.series = res.data.results;
      });
      this.store.movies = '';
      this.store.isFilmActive = false;
      this.store.isSerieTvActive = true;
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
