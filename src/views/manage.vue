<template>
  <div class="manage">
    <div style="margin-bottom: 10px">
      <el-button type="primary" @click="dialogVisible=true">新建文档</el-button>
    </div>
    <el-table
      :data="menus"
      style="width: 100%"
      v-loading="tableLoading"
      border
    >
      <el-table-column
        prop="url"
        label="url">
        <template slot-scope="scope">
          <a href="javascript:;" @click="gotoPage(scope.row.dir, scope.row.key)">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="action"
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click="deleteRow(scope.row.dir)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="新建文档"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form :model="buildData" :rules="rules">
        <el-form-item label="入口地址" :label-width="formLabelWidth" prop="entry">
          <el-input v-model="buildData.entry" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="遍历规则" :label-width="formLabelWidth">
          <el-input v-model="buildData.rule" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="附加cookie" :label-width="formLabelWidth">
          <el-input v-model="buildData.cookie" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitBuild()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'manage',
  data() {
    return {
      dialogVisible: false,
      buildData: {
        entry: '',
        rule: '',
        cookie: ''
      },
      rules: {
        entry: [
          { required: true, message: '请输入入口', trigger: 'blur' }
        ]
      },
      formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapGetters(['menus', 'tableLoading'])
  },
  methods: {
    deleteRow(key) {
      this.$store.dispatch('deleteDoc', key);
    },
    gotoPage(dir, key) {
      this.$store.commit('changeSelectUrl', key);
      this.$router.push('/');
    },
    commitBuild() {
      this.dialogVisible = false;
      this.$store.dispatch('buildDoc', this.buildData);
    }
  }
}
</script>

<style scoped>
.manage{
  width: 80%;
  margin: 30px auto;
}
</style>
