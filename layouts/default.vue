<template>
  <div>
    <nav :class="{'navbar': true, 'navbar-blur': isScrolled}" class="fixed-top w-100 mb-4">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">Gege Gaming Store</NuxtLink>

        <div>
          <ul class="navbar-nav d-flex flex-row">
            <li>
                <NuxtLink to=/login class="btn btn-outline-info">Login</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nuxt />

    
    <footer class="bg-dark text-white text-center p-3 mt-5">
      <div class="container">
        <p>&copy; 2024 Gege Gaming Store.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 1rem 1rem;
  background: rgba(250, 239, 239, 0.8);
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.navbar-blur {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin-right: 1rem;
  font-size: 1rem;
  color: #000;
  text-decoration: none;
}


.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.navbar-brand:hover {
  color: #2c8bf8;
}

@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
  }
}
</style>
