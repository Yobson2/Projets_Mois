<template>
    <footer class="footer-distributed">
  
  <div class="footer-left">
  
    <h3>I-<span>Solus</span></h3>
  
    <p class="footer-links">
      <a href="#" class="link-1">Accueil</a>
      
      <a href="#">Location</a>
    
      <a href="#">Acheter</a>
    
      <a href="#">Blog</a>
      
      <a href="#">Contact</a>
      
      <a href="#">Registre</a>
    </p>
  
    <p class="footer-company-name">Company Name © 2015</p>
  </div>
  
  <div class="footer-center">
  
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span>Yopougon</span> Selmer , Abidjan</p>
    </div>
  
    <div>
      <i class="fa fa-phone"></i>
      <p>+225 0789459029</p>
    </div>
  
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="yobouelouiscarlos@gmail.com">yobouelouiscarlos@gmail.com</a></p>
    </div>
  
  </div>
  
  <div class="footer-right">
  
    <p class="footer-company-about">
      <span>About the company</span>
      ce site se propose de faire la promotion de services de construction de maisons,
       appartements, appartements meublés et divers.
    </p>
  
    <div class="footer-icons">
  
      <a href="#"><img src="../assets/logo/icons8-facebook-circled-48.png" alt="" ></a>
      <a href="#"><img src="../assets/logo/icons8-whatsapp-48.png" alt="" ></a>
      <a href="#"><img src="../assets/logo/icons8-youtube-48.png" alt="" ></a>
      <a href="#"><img src="../assets/logo/icons8-instagram-48.png" alt="" ></a>
     
  
    </div>
  
  </div>
  
  </footer>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);
  
  * {
    font-family: Open Sans;
  }
  
  
  .footer-distributed{
    background: #666;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
    height: 300px;
  }
  
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right{
    display: inline-block;
    vertical-align: top;
  }
  
  /* Footer left */
  
  .footer-distributed .footer-left{
    width: 40%;
  }
  
  /* The company logo */
  
  .footer-distributed h3{
    color:  #ffffff;
    font: normal 36px 'Open Sans', cursive;
    margin: 0;
  }
  
  .footer-distributed h3 span{
    color:  lightseagreen;
  }
  
  /* Footer links */
  
  .footer-distributed .footer-links{
    color:  #ffffff;
    margin: 20px 0 12px;
    padding: 0;
  }
  
  .footer-distributed .footer-links a{
    display:inline-block;
    line-height: 1.8;
    font-weight:400;
    text-decoration: none;
    color:  inherit;
  }
  
  .footer-distributed .footer-company-name{
    color:  #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }
  
  /* Footer Center */
  
  .footer-distributed .footer-center{
    width: 35%;
  }
  
  
  .footer-distributed .footer-center p{
    display: inline-block;
    color: #ffffff;
    font-weight:400;
    vertical-align: middle;
    margin:0;
  }
  
  .footer-distributed .footer-center p span{
    display:block;
    font-weight: normal;
    font-size:14px;
    line-height:2;
  }
  
  .footer-distributed .footer-center p a{
    color:  lightseagreen;
    text-decoration: none;;
  }
  
  .footer-distributed .footer-links a:before {
    content: "|";
    font-weight:300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
  }
  
  .footer-distributed .footer-links .link-1:before {
    content: none;
  }
  
  /* Footer Right */
  
  .footer-distributed .footer-right{
    width: 20%;
  }
  
  .footer-distributed .footer-company-about{
    line-height: 20px;
    color:  #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  }
  
  .footer-distributed .footer-company-about span{
    display: block;
    color:  #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .footer-distributed .footer-icons{
    margin-top: 25px;
  }
  
  .footer-distributed .footer-icons a{
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 2px;
  
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
  
    margin-right: 3px;
    margin-bottom: 5px;
  }
  
  /* If you don't want the footer to be responsive, remove these media queries */
  
  @media (max-width: 880px) {
  
    .footer-distributed{
      font: bold 14px sans-serif;
    }
  
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right{
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }
  
    .footer-distributed .footer-center i{
      margin-left: 0;
    }
  
  }
  </style>