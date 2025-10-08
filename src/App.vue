<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">v-if</RouterLink>
        <RouterLink to="/v-show">v-show</RouterLink>
        <RouterLink to="/v-for">v-for</RouterLink>
        <RouterLink to="/v-bind-key">v-bind:key</RouterLink>
        <RouterLink to="/team">Equipo</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #2c3e50;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

main {
  padding: 2rem;
}
</style>