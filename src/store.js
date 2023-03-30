import { reactive } from 'vue';

export const store = reactive({

    APIsearchQuery: 'https://api.themoviedb.org/3/search/movie?api_key=039ed4dd946ea3a9b91c880f13f9942f&query=',

    isLoading: true,

    movies: [],

    userValueInput: "",

});