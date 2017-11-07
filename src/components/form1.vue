<template>
  <div>
    <template v-if="true">
        <el-input :value="currentValue" ></el-input>
    </template>
  </div>
</template>
<script >
export default {
  props: {
    value: [String, Number]
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val, oldValue) {
      this.setCurrentValue(val);
    }
  },
  methods: {
    resizeTextarea() {
        if (this.$isServer) return;
        var { autosize, type } = this;
        if (type !== 'textarea') return;
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
    }
  },
  handleInput(value) {
    //   const value = event.target.value;
      this.setCurrentValue(value);
    
    },
};
</script>
