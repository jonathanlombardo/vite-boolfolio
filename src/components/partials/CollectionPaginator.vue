<script>
export default {
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
  <div v-if="collection.length != 0" class="wrapper">
    <div class="fst-italic fs-6">
      Showed <span class="fw-medium">{{ collection.per_page }}</span> resuts. From <span class="fw-medium">{{ collection.from }}</span> to <span class="fw-medium">{{ collection.to }}</span>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination pagination-sm">
        <li v-for="(link, index) in collection.links" class="page-item" :class="{ active: link.active }" @click="linkClickHandle(link.url)">
          <a v-if="index == 0" class="page-link" :class="{ disabled: !link.url }" href="javascript:void(0)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
          <a v-else-if="index < collection.links.length - 1" class="page-link" :class="{ disabled: !link.url }" href="javascript:void(0)">
            {{ link.label }}
          </a>
          <a v-else class="page-link" :class="{ disabled: !link.url }" href="javascript:void(0)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
