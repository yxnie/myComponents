import Vue from 'vue'
import Top from '../components/top/Top'
import MyButton from '../components/button/MyButton'
// 第一个参数是组件的名称 第二个参数把哪个组件映射成全局组件
Vue.component('top', Top)
Vue.component('MyButton', MyButton)