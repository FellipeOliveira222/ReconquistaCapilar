import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import WhatYouWillFind from './components/WhatYouWillFind';
import CalviceStages from './components/CalviceStages';
import IdentificationFilter from './components/IdentificationFilter';
import Testimonials from './components/Testimonials';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SocialProof />
      <WhatYouWillFind />
      <CalviceStages />
      <IdentificationFilter />
      <Testimonials />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;