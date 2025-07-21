import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import IdentificationFilter from './components/IdentificationFilter';
import WhatYouWillFind from './components/WhatYouWillFind';
import CalviceStages from './components/CalviceStages';
import Testimonials from './components/Testimonials';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SocialProof />
      <IdentificationFilter />
      <WhatYouWillFind />
      <CalviceStages />
      <Testimonials />
      <GuaranteeSection />
      <Footer />
    </div>
  );
}

export default App;