var admin = new Vue({
    el: '#admin1',
    data:{
        adminName: "John Doe",
        adminMail: "JohnDoe@gmail.com",
        postNumber: 12,
        showEdit: false,
        showDelete: false
    }

}) 
var admin = new Vue({
    el: '#admin2',
    data:{
        adminName: "Jane Doe",
        adminMail: "JaneDoe@gmail.com",
        postNumber: 33,
        showEdit: false,
        showDelete: false
    }

}) 

var edit = new Vue({
    el: '.content-header',
    data: {
      ishidden: true
    }
  })