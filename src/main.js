import Vue from 'vue'
import HeaderBar from './HeaderBar.vue';
import SideBar from './SideBar.vue';
import Footer from './Footer.vue';

new Vue({
  el: '#app',
  render: h => h(HeaderBar)
});

new Vue({
  el: '#SideBar',
  render: h => h(SideBar)
});

new Vue({
  el: '#Footer',
  render: h => h(Footer)
})

document.getElementById('menu').onclick = function(event) {
  var target = event.target;
  if (target.className == 'header-bar link') {
  var s = document.getElementsByClassName('header-bar');
  for(var i = 0; i < s.length; i++){
    s[i].classList.remove("active");
  }
  target.classList.add('active');
}
}
