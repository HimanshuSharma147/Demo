/*  bUTTONS FUNCTIONS
 */

function myfirstfunction() {
  document.getElementById("child1").classList.remove("hide");
  document.getElementById("child2").classList.remove("hide");
  document.getElementById("child1").classList.add("animated-btn");
  document.getElementById("child2").classList.add("animated-btn");
  document.getElementById("father").classList.add("hide");
}

function myfirstfunction2() {
  document.getElementById("child3").classList.remove("hide");
  document.getElementById("child4").classList.remove("hide");
  document.getElementById("child5").classList.remove("hide");
  document.getElementById("child1").classList.add("hide");
  document.getElementById("child2").classList.add("hide");
}


function showToContact(){
  document.getElementById("toContact").classList.remove("hide");
}

function openContactForm() {
  document.getElementById("contact-form").classList.remove("hide");
  document.getElementById("header").classList.add("hide");
  document.getElementById("father").classList.add("hide");
  document.getElementById("grow").classList.add("hide");
  document.getElementById("contactModl").classList.add("hide");
  document.getElementById("video-overlay").style.background = "linear-gradient(120deg, rgba(0, 35, 54, 0.877) 0%, rgba(0, 6, 65, 0.801) 50%, rgba(0, 0, 0, 0.822) 100%)";
  
  
}


function closeContactForm()  {
  document.getElementById("contact-form").classList.add("hide");
  document.getElementById("father").classList.remove("hide");
  document.getElementById("header").classList.remove("hide");
  document.getElementById("grow").classList.remove("hide");
  document.getElementById("contactModl").classList.remove("hide");
  document.getElementById("video-overlay").style.background = " linear-gradient(120deg, rgba(0, 118, 181, 0.753) 0%, rgba(0, 12, 121, 0.781) 50%, rgba(0, 0, 0, 0.719) 100%)";
  document.getElementById("toContact").classList.add("hide");
}

