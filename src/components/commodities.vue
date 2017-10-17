 <template>
 <div>
  <el-table :data="tableData" style="width: 100%">
    
  <el-table-column type="index" width="50">
  </el-table-column>
    
  <el-table-column v-for="(item,index) in tableConfig" :label="item.label" :width="item.width"  v-bind:key="index">
    <template scope="scope">
      {{ scope.row[item.key] | aaa(item.key)}}
    </template>
  </el-table-column>
  </el-table>
  <el-button @click="show">aaa</el-button>
  
  </div>

</template>

  <script>
  import Vue from 'vue'
export default {
  data() {
    return {
      tableConfig: [{label: '生产日期', key:'date' ,width:200}, { label: '名字',key: 'name' , width: 200}, { label: '产地', key: 'address' , width: 200}],
      tableData: [{
        date: '2016-05-02',
        name: '红富士',
        address: '上海'
      }, {
        date: '2016-05-04',
        name: '红富士',
        address: '深圳'
      }, {
        date: '2016-05-01',
        name: '红富士',
        address: '广州'
      }, {
        date: '2016-05-03',
        name: '红富士',
        address: '北京'
      }]
    }
  },
  created () {
    // aixos.get('/url').then(res=>{
    //   this.tableConfig = res.data.tableConfig
    //   this.tableData= res.data.tableData
    // }).err()

  },
  methods: {
    show: function () {
      console.log(this.tableName)
      }
    }
  }

</script>