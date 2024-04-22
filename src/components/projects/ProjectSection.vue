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
    project: Object,
    sectionID: Number,
  },

  computed: {
    isOdd() {
      return this.sectionID % 2 != 0;
    },
  },

  methods: {
    // ...
  },

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <section :class="isOdd != 0 ? 'filled' : ''">
    <div class="container py-5">
      <div class="row g-5" :class="isOdd != 0 ? 'flex-row-reverse' : ''">
        <div class="col-12 col-lg-6">
          <div class="img-wrapper">
            <img :src="project.imgUrl" :alt="`${project.title} image`" />
            <span class="badge" :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <h2 class="project-title d-inline">
            <span>{{ project.title }}</span>
          </h2>
          <p class="project-desc pb-3">{{ project.abstract }}</p>
          <div class="flex-grow-1 row align-items-center">
            <div class="col-6">
              <ul v-if="project.technologies.length" class="fa-ul my-0 fs-6">
                <li v-for="tech in project.technologies">
                  <span class="fa-li" :style="`color: ${tech.color}`"><font-awesome-icon icon="fa-solid fa-microchip" /></span>{{ tech.label }}
                </li>
              </ul>
            </div>
            <div class="col-6">
              <!-- <div class="">Text</div> -->
              <router-link class="btn btn-primary w-100" aria-current="page" :to="{ name: 'projects.show', params: { slug: project.slug } }">Show more</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <svg :class="isOdd != 0 ? 'reverse' : ''" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(243, 106, 62, 1)" offset="0%" />
        <stop stop-color="rgba(255, 179, 11, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path style="transform: translate(0, 0px); opacity: 1" fill="url(#sw-gradient-0)" d="M0,245L10,220.5C20,196,40,147,60,179.7C80,212,100,327,120,367.5C140,408,160,376,180,359.3C200,343,220,343,240,326.7C260,310,280,278,300,294C320,310,340,376,360,383.8C380,392,400,343,420,334.8C440,327,460,359,480,318.5C500,278,520,163,540,114.3C560,65,580,82,600,89.8C620,98,640,98,660,122.5C680,147,700,196,720,228.7C740,261,760,278,780,285.8C800,294,820,294,840,245C860,196,880,98,900,49C920,0,940,0,960,73.5C980,147,1000,294,1020,326.7C1040,359,1060,278,1080,204.2C1100,131,1120,65,1140,106.2C1160,147,1180,294,1200,326.7C1220,359,1240,278,1260,253.2C1280,229,1300,261,1320,245C1340,229,1360,163,1380,130.7C1400,98,1420,98,1430,98L1440,98L1440,490L1430,490C1420,490,1400,490,1380,490C1360,490,1340,490,1320,490C1300,490,1280,490,1260,490C1240,490,1220,490,1200,490C1180,490,1160,490,1140,490C1120,490,1100,490,1080,490C1060,490,1040,490,1020,490C1000,490,980,490,960,490C940,490,920,490,900,490C880,490,860,490,840,490C820,490,800,490,780,490C760,490,740,490,720,490C700,490,680,490,660,490C640,490,620,490,600,490C580,490,560,490,540,490C520,490,500,490,480,490C460,490,440,490,420,490C400,490,380,490,360,490C340,490,320,490,300,490C280,490,260,490,240,490C220,490,200,490,180,490C160,490,140,490,120,490C100,490,80,490,60,490C40,490,20,490,10,490L0,490Z" />
  </svg>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;

#wave {
  display: block;
  height: 20px;
  width: 100%;
  path {
    fill: $primary-white;
  }
  &.reverse {
    transform: rotate(180deg);
  }
}

section.filled {
  background-color: $primary-white;
}

.img-wrapper {
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
  span.badge {
    position: absolute;
    top: 0px;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1em;
  }
}

.project-title {
  font-weight: 800;
  font-size: 3rem;
  span {
    // color: v-bind("isOdd ? 'white' : '#f59247'");
    color: #4b443f;
  }
}

.project-desc {
  font-size: 1.2rem;
}

.fa-ul > li {
  line-height: 30px;
  span {
    line-height: 30px;
  }
}
</style>
