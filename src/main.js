// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

Vue.component('flix-header', Header);
Vue.component('flix-content', Content);
Vue.component('flix-footer', Footer);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
