<template>
  <el-row>
      <el-col v-for="(item,index) in list" :key="index"><Widget :config="item" ></Widget></el-col>
      <Widget1 v-model="inp2"></Widget1>
      {{inp2}}
  </el-row>
</template>
<script>
import Widget from './form'
import Widget1 from './form1'
export default {
    components:{
        Widget,
        Widget1
    },
  data() {
    return {
      inp2: '123',
      list: [
        {
          type: "input",
          label: "输入框",
          value: "666",
          wLeft: 5,
          wRight: 8,
        },
        {
          type: "select",
          label: "下拉框",
          wLeft: 5,
          wRight: 8,
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
        {
          type: "radio",
          label: "单选",
          wLeft: 5,
          wRight: 8,
          options: [
            {
              value: "选项1",
              label: "水晶红富士大号"
            },
            {
              value: "选项1",
              label: "水晶红富士小号"
            }
          ]
        },
        {
          type: "data",
          label: "日期",
          wLeft: 5,
          wRight: 8,
          placeholder: "请选择xx日期"
        }
      ]
    };
  },
  methods:{
    showMsg: function(data) {
      console.log(data)
    }
  }
};
</script>
