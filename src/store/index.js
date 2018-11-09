import Vue from 'vue'
import Vuex from "vuex"
import axios from "axios"
import _ from "lodash";
import { Message, Notification } from 'element-ui';

Vue.use(Vuex);

const baseUrl = '/api';

const store = new Vuex.Store({
  state: {
    menus: [],
    selectUrl: '',
    tableLoading: false
  },

  mutations: {
    changeLoading (state, loading) {
      state.tableLoading = loading;
    },
    changeMenus (state, menus) {
      state.menus = menus.map(i => ({
        key: `/doc/${i.dir}/${i.entry}`,
        name: i.name,
        dir: i.dir
      }))
      if (!state.selectUrl) {
        state.selectUrl = state.menus[0].key;
      }
    },
    addMenus(state, obj) {
      state.menus = [...state.menus, {
        key: `${baseUrl}/${obj.dir}/${obj.entry}`,
        name: obj.name,
        dir: obj.dir
      }];
    },
    deleteMenu(state, dir) {
      _.remove(state.menus, i => i.dir == dir);
      state.menus = [...state.menus];
    },
    changeSelectUrl (state, url) {
      if (url !== this.url) {
        state.selectUrl = url
      }
    }
  },

  actions: {
    async getMenus({ commit }) {
      const result = await axios.get(`${baseUrl}/menus`);
      if (result && result.data) {
        commit('changeMenus', result.data)
      }
    },

    async deleteDoc({ commit }, dir) {
      commit('changeLoading', true);
      const result = await axios.get(`${baseUrl}/delete?dir=${dir}`);
      const isSuccess = result && result.data && result.data.code;
      if (isSuccess) {
        commit('deleteMenu', dir);
      }
      Message({
        message: isSuccess ? '删除成功' : '删除失败',
        type: isSuccess ? 'success' : 'error'
      });
      commit('changeLoading', false);
    },

    async buildDoc({ commit, dispatch }, query) {
      Notification({
        title: '文档生成中',
        message: '时间可能会较长，请耐心等待!'
      });
      let result;

      try {
        result = await axios.post(`${baseUrl}/build`, query);
      } catch (error) {
        console.log(error);
      }
      
      const isSuccess = result && result.data && result.data.code;
      if (isSuccess) {
        Notification({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        })
        commit('addMenus', result.data);
        dispatch('getMenus');
      } else {
        Message.error('请求失败');
      }
    }
  },

  getters: {
    menus: state => state.menus,
    selectUrl: state => state.selectUrl,
    selectStr: state => {
      if (state.selectUrl) {
        const find = state.menus.find(i => i.key == state.selectUrl);
        return find ? find.name : '选择文档'
      }
      return '选择文档'
    },
    tableLoading: state => state.tableLoading
  }
})

export default store;