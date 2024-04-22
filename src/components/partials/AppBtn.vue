<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
    };
  },

  props: {
    btnText: {
      type: String,
      default: "Button",
    },
    btnClasses: {
      type: String,
      default: "btn btn-outline-primary",
    },
  },

  emits: ["btnClicked"],

  methods: {
    handleClick() {
      this.$emit("btnClicked");
    },
  },

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <div :class="btnClasses" @click="handleClick()">
    {{ btnText }}
  </div>
</template>

<style lang="scss" scoped></style>
