import '../App.css'
import HomeHero from '../assets/home-hero.png'
import HotelRoom from '../assets/hotel-room.jpg'
import Beach from '../assets/beach.jpg'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ExploreCardComponent from './ExploreCardComponent'
import HeroSection from './HeroSection'


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
        <div className="testimonials flex flex-col items-center gap-y-4 mb-10">
            <h2 className='font-bold text-[#14274A] text-4xl'>Testimonials</h2>
            <p className='footer text-[#14274A] text-xl font-medium'>{`"Calm, Serene, Retro - What a way to relax and enjoy"`}</p>
            <p className=''>Mr. and Mrs. Baxter, UK</p>
            <div className="next-prev-btns flex gap-x-2">
                <div className="prev-btn">
                    <FontAwesomeIcon icon={faChevronLeft} className='bg-[#E0B973] px-3 py-2 text-white rounded-lg'/>
                </div>
                <div className="next-btn">
                    <FontAwesomeIcon icon={faChevronRight} className='bg-[#E0B973] px-3 py-2 text-white rounded-lg'/>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home

