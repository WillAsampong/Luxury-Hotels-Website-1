import HomeHero from '../assets/home-hero.png'
import Navbar from '../Navbar'
// import Footer from '../Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div>
        <div
         style={{backgroundImage: `url(${HomeHero})`}} 
         className="bg-slate-600 
         bg-blend-overlay 
         w-full 
         h-screen 
         bg-cover 
         bg-center 
         flex 
         flex-col">
            <Navbar />
                <div className="hero w-4/5 mx-auto mt-20">
                    <div className="hero-content w-2/5">
                        <p className='text-white text-4xl uppercase footer font-light'>Welcome to</p>
                        <p className='uppercase text-8xl text-white logo-text tracking-wider'>Luxury</p>
                        <p className='uppercase text-white tracking-[0.6rem] logo-text text-4xl font-bold'>Hotels</p>
                        <p className='text-white footer text-xl'>Book your stay and enjoy Luxury <br/> redefined at the most affordable rates.</p>
                    </div>
                    <div className="cta">
                        <button className='py-3 px-6 mt-10 bg-[#E0B973] footer rounded-md'>
                            <div className="book-now-icon"></div>
                            <div className="book-now uppercase text-white">Book now</div>
                        </button>
                    </div>
                    <div className="scroll">
                        <p className='footer text-white font-semibold'>Scroll</p>
                        <div className="scroll-icon">
                            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                        </div>
                    </div>
                </div>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Home

