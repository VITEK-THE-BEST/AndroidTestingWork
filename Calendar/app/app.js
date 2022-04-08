import Vue from 'nativescript-vue'

import Home from './components/Home'
import CalendarView from 'nativescript-ui-calendar/vue';
Vue.use(CalendarView);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
