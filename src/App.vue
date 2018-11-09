<template>
  <div id="app">
    <div class="header">
      <router-link to="manage">管理</router-link>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{selectStr}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :key='item.key' :command='item.key' v-for="item in menus">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['menus', 'selectUrl', 'selectStr'])
  },
  methods: {
    ...mapActions(['getMenus']),
    ...mapMutations(['changeSelectUrl']),
    handleCommand (command) {
      this.changeSelectUrl(command)
      if (this.$route.name == 'manage') {
        this.$router.push('/');
      }
    }
  },
  async created() {
    this.getMenus()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, #app{
  width: 100%;
  height: 100%;
  margin: 0;
}
.header{
  position: fixed;
  right: 20px;
  top: 5px;
}
</style>
