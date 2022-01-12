import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppPricing from '../components/home/pricing';
import AppContact from '../components/home/contact';
import Services from '../components/home/services';
import Partner from '../components/home/partner';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <Services/>
      <AppFeature/>
      <AppWorks/>
      {/* <AppFaq/> */}
      <AppPricing/>
      {/* <Testinomial/> */}
      <AppContact/>
      <Partner/>
    </div>
  );
}

export default AppHome;