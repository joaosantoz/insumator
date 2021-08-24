<template>
  <div id="app">
    <div class="content">
      <nav>
        <router-link to="/"><img src="./assets/logo.svg" id="logo" alt=""></router-link>
        <router-link to="/help"><p class="link-how-works">Como funciona?</p></router-link>
      </nav>
      <div class="main-frame">
        <router-view/>
      </div>
      </div>
    </div>
</template>
