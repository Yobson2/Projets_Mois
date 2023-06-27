import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


import Section1 from '../Components/ComponentsHome/Section1';
import Section3 from '../Components/ComponentsHome/Section3';
import Section4 from '../Components/ComponentsHome/Section4';
import Section5 from '../Components/ComponentsHome/Section5';



function Home() {
  return (
    <div>
      <Header />
      
      < Section1 />
      < Section3 />
      < Section4 />
      < Section5 />
      <Footer />
    </div>
  );
}

export default Home;
