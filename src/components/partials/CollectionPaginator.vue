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
    collection: Object,
  },

  emits: ["linkClicked"],

  methods: {
    linkClickHandle(url) {
      if (url) this.$emit("linkClicked", url);
    },
  },

  components: {},

  created() {
    console.log(this.collection);
  },
};
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li v-for="(link, index) in collection.links" class="page-item" :class="{ active: link.active }" @click="linkClickHandle(link.url)">
        <a v-if="index == 0" class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
        <a v-else-if="index < collection.links.length - 1" class="page-link" href="#">{{ link.label }}</a>
        <a v-else class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
