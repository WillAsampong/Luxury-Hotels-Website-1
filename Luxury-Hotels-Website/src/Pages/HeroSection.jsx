import Navbar from '../Navbar'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const HeroSection = ({ img }) => {
  return (
    <div>
      <div
         style={{backgroundImage: `url(${img})`}} 
         className="hero bg-slate-500 
         bg-blend-overlay w-full bg-cover bg-center flex flex-col gap-y-20">
            <Navbar />
            <div className="w-4/5 mx-auto flex flex-col gap-y-16">
                <div className="hero-content w-2/5">
                    <p className='text-white text-4xl uppercase footer font-light'>Welcome to</p>
                    <p className='uppercase text-8xl text-white logo-text tracking-wider'>Luxury</p>
                    <p className='uppercase text-white tracking-[0.6rem] logo-text text-4xl font-bold'>Hotels</p>
                    <p className='text-white footer text-xl font-semibold'>Book your stay and enjoy Luxury <br/> redefined at the most affordable rates.</p>
                </div>
                <div className="cta flex justify-center">
                    <button className='py-3 px-6 bg-[#E0B973] footer rounded-md flex gap-x-2'>
                        <div className="book-now-icon">
                        <FontAwesomeIcon icon={faCalendarCheck} className='text-white'/>
                        </div>
                        <div className="book-now uppercase text-white font-bold">Book now</div>
                    </button>
                </div>
                <div className="scroll flex flex-col items-center mb-4">
                    <p className='footer text-white font-semibold'>Scroll</p>
                    <div className="scroll-icon border-2 inline-block mt-2 py-1 px-2 rounded-full bg-white">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

HeroSection.propTypes = {
    img: PropTypes.string, 
}



export default HeroSection
