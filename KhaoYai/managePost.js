var nav = new Vue ({
    el: '#navbar',
    data: {
      active:'yourPost',
      yourActive: 'draft',
      allActive: 'draft',
      post1:{
        postName: "asdfgjkl",
        showDelete: false,
        firstTag: "แท็กหนึ่ง",
        secondTag: "แท็กสอง",
        author: "Yuth Chancha",
        viewNum: 11,
        date: "31/10/2019"
      },
      post2:{
        postName: "as",
        showDelete: false,
        firstTag: "แท็กหนึ่ง",
        secondTag: "แท็กสอง",
        author: "Chancha Yuth",
        viewNum: 55,
        date: "01/11/2019"
      }
    },
   methods: {
      makeActive: function (item){
        this.active = item;
      },
      makeYourActive: function (item){
        this.yourActive = item;
      },
      makeAllActive: function (item){
        this.allActive = item;
    }  
}});


