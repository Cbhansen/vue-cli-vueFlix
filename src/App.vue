<template>
  <div id="app">
    <flix-header />
    <flix-content />
    <flix-footer />
  </div>
</template>

<script>
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
  #app {
    font-family: 'Robot', Arial, Helvetica, sans-serif;
    max-width: 960px;
    width: 100%;
    min-height: 550px;
    margin: 100px auto;
    background: url('http://cdn.collider.com/wp-content/uploads/silent-hill-revelation-3d-international-poster.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 5px 70px #000;
  }

</style>

