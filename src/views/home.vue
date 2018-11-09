<template>
  <div class="home">
    <iframe v-if="selectUrl" :src="selectUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'home',
  computed: {
    ...mapGetters(['selectUrl'])
  }
}
</script>

<style scoped>
.home, iframe{
  width: 100%;
  height: 100%;
}
</style>

