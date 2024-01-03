<template>
    <div id="app">
      <router-view />
    </div>
  </template>
  
  <style lang="scss">
  @import './assets/styles/reset.css';
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap');
  
  body {
    display: grid;
  }
  
  * {
    font-family: 'Inter', sans-serif;
  }
  
  #app {
    display: grid;
  }
  </style>