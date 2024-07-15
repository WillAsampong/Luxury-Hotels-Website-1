import FacilitiesHero from '../assets/facilities-hero.jpg'
import FacilitiesCardComponent from './FacilitiesCardComponent'
import HeroSection from './HeroSection'
import Gym from '../assets/gym.jpg'
import Poolside from '../assets/poolside.jpg'
import Spa from '../assets/spa.jpg'
import Restaurant from '../assets/restaurant.jpg'
import SwimmingPool from '../assets/swimming-pool.jpg'
import Laundry from '../assets/laundry.jpg'
import Testimonials from './Testimonials'
import Footer from '../Footer'

const Facilities = () => {
  return (
    <div>
      <HeroSection img={FacilitiesHero}/>
      <div className="facilities-desc w-4/5 mx-auto flex flex-col items-center my-20">
          <h2 className='text-[#14274A] text-3xl logo-text uppercase '>Facilities</h2>
          <p className='text-[#14274A] footer text-md text-center font-semibold'>We want your stay at our lush hotel to be unforgettable. That is why we give special attention to all of your needs so that we can ensure your experience is quiet unique. Luxury Hotels offers the perfect setting with stunning views for leisure and our mordern luxury resort facilities will help you enjoy the best of all.</p>
      </div>
      <div className="facilities w-4/5 mx-auto">
          <FacilitiesCardComponent fname={`the gym`} img={Gym}/>
          <FacilitiesCardComponent fname={`poolside bar`} img={Poolside}/>
          <FacilitiesCardComponent fname={`the spa`} img={Spa}/>
          <FacilitiesCardComponent fname={`swimming pool`} img={SwimmingPool}/>
          <FacilitiesCardComponent fname={`restaurant`} img={Restaurant}/>
          <FacilitiesCardComponent fname={`laundry`} img={Laundry}/>
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}


export default Facilities
