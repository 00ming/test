<template>
<el-row>
  <el-col :span="21">
    <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" @row-click="rowClick" @header-dragend="rowstyle">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期"   :width="wi">
        <template scope="scope">{{ scope.row.birth }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template scope="scope">{{ scope.row.status | statusFilter}}</template>
      </el-table-column>
      <el-table-column prop="addr" label="地址" show-overflow-tooltip width="200" min-width="200">
      </el-table-column>
       <el-table-column label="btn" width="120">
        <template scope="scope"><el-button @click="btn1(scope.row.id)">123</el-button></template>
      </el-table-column>


    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="change()">编辑</el-button>
      <el-button @click="changeStatus()">改变状态</el-button>
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
      <br>
      <el-input-number v-model="wi" /> 
      
    </div>
    {{wid}}
<!-- <div class="test" :style="{width:wi}"></div> -->
  </el-col>
</el-row>

</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData3: [],
      multipleSelection: [],
      wi: 100
    }
  },
  mounted() {
    this.getdata()
  },
  computed: {
    wid () {
      return  this.wi - 0
    }
  },
  methods: {
    rowstyle(newWidth, oldWidth, column, event) {
      // console.log(newWidth)
      // console.log(oldWidth)
      
      // console.log(event)
      if (column.label == '日期') {
        // console.log(column)
        // console.log(newWidth)
        this.wi = newWidth
      }
    },
    btn1(id) {
      this.$router.push({ path: '/' })
      event.stopPropagation();
      
    },
    getdata() {
        axios.get( '/table' ).then( res => {
          this.tableData3 = res.data.table
        })
    },
    changeStatus() {
        let temp = this.multipleSelection
        let params = []
        this.multipleSelection.forEach(i => {
            params.push({id:i.id})
        })
        console.log(params);
        axios.post('/changestatus',{params:params}).then(res => {
            // this.getdata()
            console.log(res.data);
            this.multipleSelection = temp

        })
    },
    rowClick(row, event, column) {
       this.$refs.multipleTable.toggleRowSelection( row )
       event.stopPropagation();
      // console.log(row)
      // console.log(this.multipleSelection)
      // this.multipleSelection.push(row)
      // console.log(event)
      // console.log(column)
    },
    toggleSelection( rows ) {
      if ( rows ) {
        rows.forEach( row => {
          this.$refs.multipleTable.toggleRowSelection( row )
        } )
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange( val ) {
      this.multipleSelection = val
      console.log(val)
    }
  }
}
</script>
<style>
.test {
  border:1px black solid;
  background-color: red;
  height: 300px;
}
</style>
