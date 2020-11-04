<template>
  <p @click="change" :class="yellow === true ? 'yellow' : ''">
    {{ title }}
  </p>
</template>

<script>
export default {
  props: {
    title: String,
  },

  data: function () {
    return {
      yellow: false,
    };
  },

  methods: {
    change() {
      this.yellow = !this.yellow;
      this.$emit("increase", 5);
    },
  },
};
</script>

<style scoped>
.yellow{
    color: yellowgreen;
}
</style>