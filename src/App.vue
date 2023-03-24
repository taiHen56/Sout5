<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
 
  <div class="p-4 m-auto border-2 rounded-lg bg-slate-800 text-white">
    <h1 class="text-9xl font-bold">Hello world!</h1>
    <p class="mt-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui
      minima autem nobis animi perspiciatis deleniti quaerat, recusandae
      officiis ea totam quisquam repellat quidem perferendis ad! Vel officia
      voluptatibus ipsam.
    </p>
    <button
      class="bg-indigo-600 hover:bg-indigo-800 mt-4 font-bold py-2 px-4 rounded"
    >
      Click Me
    </button>
  </div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
