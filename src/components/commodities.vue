 <template>
 <div>
  <el-table :data="tableData" style="width: 100%">
    
  <el-table-column type="index" width="50">
  </el-table-column>
    
  <el-table-column v-for="(item,index) in tableConfig" :label="item.label" :width="item.width"  v-bind:key="index">
    <template scope="scope" >
      <span v-show="!scope.row.edit">
      {{ scope.row[item.key] }} 
      </span>
      <el-input v-model="scope.row[item.key]" v-show="scope.row.edit"></el-input>
      
    </template>
  </el-table-column>
  <el-table-column>
    <template scope="scope">
      <el-button @click="detil(scope.row)">详情</el-button>
      <el-button @click="edit(scope.row)">编辑</el-button>
      <el-button>删除</el-button>
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
        address: '上海',
        edit: false
      }, {
        date: '2016-05-04',
        name: '红富士',
        address: '深圳',
        edit: false
      }, {
        date: '2016-05-01',
        name: '红富士',
        address: '广州',
        edit: false
      }, {
        date: '2016-05-03',
        name: '红富士',
        address: '北京',
        edit: false
      }],
      config:{
          type: "select",
          label: "",
          wLeft: 0,
          wRight: 24,
          options: [
            {
              value: "水晶红富士大号",
              label: "水晶红富士大号"
            },
            {
              value: "水晶红富士小号",
              label: "水晶红富士小号"
            }
          ]
        },
        inp: {
          type: "input",
          label: "",
          value: "",
          wLeft: 5,
          wRight: 8,
        }
    }
  },
  methods: {
    show: function () {
      console.log(this.tableName)
      },
    detil: function(a) {
      console.log(a)
    },
    edit: function(row) {
      console.log(row.edit)
      row.edit = !row.edit
    }
  },
  components: {
  
  }
}

</script>