<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';

import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
  }
}

</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss" scoped></style>
