

  function openNews(newstype) {
    var i;
    var x = document.getElementsByClassName("newstype");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(newstype).style.display = "block";  

    var y = document.getElementsByClassName("newsbtn");
    for (i = 0; i < y.length; i++) {
      y[i].classList.remove("activeTab"); 
    }
    document.getElementsByClassName(newstype).classList.add("activeTab");
    
  }

  new Vue({
    el:'.login',
    data:{
        seen: false
    }
});