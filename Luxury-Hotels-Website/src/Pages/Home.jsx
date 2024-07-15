import '../App.css'
import HomeHero from '../assets/home-hero.png'
import HotelRoom from '../assets/hotel-room.jpg'
import Beach from '../assets/beach.jpg'
import Footer from '../Footer'
import ExploreCardComponent from './ExploreCardComponent'
import HeroSection from './HeroSection'
import Testimonials from './Testimonials'


const Home = () => {
  return (
    <div>
        <HeroSection img={HomeHero}/>
        <div>
            <p className='footer text-2xl text-[#14274A] flex justify-center my-8'>All our room types are including complementary breakfast</p>
            <ExploreCardComponent
             title="Luxury redefined" 
             text="Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself."
             img={HotelRoom}/>
            <ExploreCardComponent
             title="Leave your worries in the sand" 
             text="We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean."
             img={Beach}/>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home

