<script>
// import MyComp from './components/MyComp.vue';
import { config } from "../store/index.js";

export default {
  data() {
    return {
      config,
    };
  },
};
</script>

<template>
  <header class="mb-4 fs-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" :href="config.homeUrl">
          <img src="/logo.png" alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="['nav-link', { active: this.$route.name == 'home' }]" aria-current="page" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="['nav-link', { active: this.$route.name == 'projects.index' }]" aria-current="page" :to="{ name: 'projects.index' }">Projects</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> -->
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> -->
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;
header {
  height: 80px;
  nav.navbar {
    padding-top: 5px;
    padding-bottom: 5px;
    height: 100%;
    background-color: $primary;
    .container {
      height: 100%;
      a.navbar-brand {
        height: 100%;
      }
      // .nav-link {
      //   height: 100%;

      //   &.active {
      //     box-shadow: inset 0 -7px 0 0 white;
      //   }
      // }
    }
  }
}
</style>
