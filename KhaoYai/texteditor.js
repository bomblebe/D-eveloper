console.log(Vue)
// Tell Vue to use view-router
Vue.use(Vue2Editor)
const VueEditor = Vue2Editor.VueEditor
var vm = new Vue({
  el: '#texteditor',
  data: {
    content: '', 
  },
  
  components: {VueEditor}
});