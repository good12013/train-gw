<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--&lt;!&ndash;&lt;!&ndash;<router-link to="/">Home</router-link> |&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;&ndash;&gt;-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<style>
  #app{
    margin: 0;
  }

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
