<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Home from './pages/Index.vue'
import About from './About.vue'
import Update from './pages/Update.vue'
//import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/update/:id': Update,
}

export default {
  data() {
    return {
      currentPath: window.location.pathname,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath || '/'] //|| NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		this.currentPath = window.location.hash
	})
  }
}
</script>

<template>
  <div>
    <!---
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>--->
    <component :is="currentView" />
  </div>
</template>
