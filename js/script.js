function showVenue(){
    //document.getElementsByClassName('mySlides').style.display = "none";
    document.getElementById('trans').style.display = "none";
    document.getElementById('faq').style.display = "none";
    document.getElementById('venue').style.display = "block";
    document.getElementById('venue-btn').style.color = "#c63b9b";
    document.getElementById('trans-btn').style.color = "#fefdfa";
    document.getElementById('faq-btn').style.color = "#fefdfa";
};


function showTrans(){
    document.getElementById('venue').style.display = "none";
    document.getElementById('faq').style.display = "none";
    document.getElementById('trans').style.display = "block";
    document.getElementById('trans-btn').style.color = "#c63b9b";
    document.getElementById('venue-btn').style.color = "#fefdfa";
    document.getElementById('faq-btn').style.color = "#fefdfa";
};

function showFaq() {
  document.getElementById('venue').style.display = "none";
  document.getElementById('trans').style.display = "none";
  document.getElementById('faq-btn').style.color = "#c63b9b";
  document.getElementById('venue-btn').style.color = "#fefdfa";
  document.getElementById('trans-btn').style.color = "#fefdfa";
}

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById('email').style.border = "2px solid #d9482b";
        document.getElementById('alert').style.display = "block";

    } else {
      document.getElementById('email').style.border = "2px solid #6be76d";
      document.getElementById('enter-btn').setAttribute("href", "thanks.html");
    }
}

function filled() {
  var check = document.getElementsByTagName('input');
  var length = check.length;

  for (var i=0; i<length; i++) {
    if (check[i].value === "") {
      check[i].style.border = "2px solid #d9482b";
    } else if (check[i].value != "") {
      check[i].style.border = "2px solid #6be76d";

    } else {
      document.getElementById('submit-btn').setAttribute("href", "venue.html");
    }
  }



}
