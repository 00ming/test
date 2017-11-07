<template>
<div>
  <el-row>
      <el-col :span="item.config.wLeft" >
          {{item.config.label}}
      </el-col>
      <el-col :span="item.config.wRight" v-if="item.config.type === 'input'">
          <el-input v-model="item.value" @change="change" ></el-input>
      </el-col>
      <el-col :span="item.config.wRight" v-if="item.config.type === 'select'">
          <el-select v-model="item.value">
              <el-option v-for="item in item.config.options" :label="item.label"
  :value="item.value" :key="item.label"></el-option>
          </el-select>
      </el-col>
      <el-col :span="item.config.wRight" v-if="item.config.type === 'radio'">
          <el-radio-group v-model="item.value">
              <el-radio :label="value.label" v-for="(value,index) in item.config.options" :key="value.label"></el-radio>
          </el-radio-group>
      </el-col>

        <el-col v-if="item.config.type === 'data'" :span="item.config.wRight">
            <el-date-picker
                    v-model="item.value"
                    type="date"
                    format="yyyy-MM-dd"
                    :placeholder="item.config.placeholder">
            </el-date-picker>
        </el-col>
  </el-row>
  
  </div>
</template>
<script>
export default {
    props:{
        config:{},
        labelWidth: Number
    },
  created() {
      console.log(this.config)
    this.item.config = this.config
    // this.item.config = this.props
    if (this.item.config.value) {
      this.item.value = this.item.config.value;
    }
    
  },
  mounted() {
    console.log(this.config.wRight)
  },
  data() {
    return {
      item: {
        config: {
        },
        value: ""
      }
    }
     
  },
  methods: {
    change: function() {
      this.$emit('value',this.item.value) 
    }
  }
};
</script>
