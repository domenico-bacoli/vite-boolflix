import { reactive } from 'vue';

export const store = reactive({
    baseAPI: 'https://api.themoviedb.org/3',

    APIsearchMovies: 'https://api.themoviedb.org/3/search/movie?api_key=039ed4dd946ea3a9b91c880f13f9942f&query=',

    isLoading: true,

    movies: [],

    series: [],

    userValueInput: "",

});