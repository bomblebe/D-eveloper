

  function openNews(newstype) {
    var i;
    var x = document.getElementsByClassName("newstype");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(newstype).style.display = "block";  
  }