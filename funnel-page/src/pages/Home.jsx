import { DiscoverWithMealMaster } from '../components/DiscoverWithMealMaster';
import { SimplifyYourMeal } from '../components/SimplifyYourMeal';
import { MeetTheTeam } from '../components/MeetTheTeam';
import { Testimonials } from '../components/Testimonials';
import { MasterIsDifferent } from '../components/MasterIsDifferent';
import { BenefitsOfUsing } from '../components/BenefitsOfUsing';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SimplifyYourMeal />
      <BenefitsOfUsing />
      <DiscoverWithMealMaster />
      <MasterIsDifferent />
      <MeetTheTeam />
      <Testimonials />
    </>
  )
}

export default Home
