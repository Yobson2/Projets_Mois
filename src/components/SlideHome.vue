<template>
  <div class="container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <img src="../assets/Images/modernisierung-wohnung-giessen.jpg" class="img">
    </div>
  
    <div class="mySlides fade">
      <img src="../assets/Images/judge-shatrese-flowers9.jpg" class="img">
    </div>
  
    <div class="mySlides fade">
      <img src="../assets/Images/1659543446118.jpeg" class="img">
    </div>
    
  </div>
  <br>
  
  <!-- The dots/circles -->
  <div class="btn2">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>

</template>

<script>
export default {
 mounted(){
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



 }
}
</script>

<style scoped>
 * {box-sizing:border-box}

/* Slideshow container */
.container {
  height: 100%;
  height: 100vh;
  position: relative;
  margin: 0px auto;
}
.img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

.btn2{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-90%,-50%);
}
</style>