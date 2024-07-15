import HeroSection from "./HeroSection"
import RoomHero from "../assets/room-hero.jpg"
import Footer  from "../Footer"
import RoomRatesCardComponent from "./RoomRatesCardComponent"
import singleRoom from '../assets/single-room.jpg'
import doubleRoom from  '../assets/double-room.jpg'
import twinRoom from '../assets/twin-room.jpg'
import Testimonials from "./Testimonials"


const Rooms = () => {
  return (
    <div>
      <HeroSection img={RoomHero} className="bg-blend-darken bg-slate-900"/>
      <div className="room-desc w-4/5 mx-auto flex flex-col items-center my-20 gap-y-3">
          <h2 className="uppercase text-[#14274A] text-3xl logo-text font-bold">Rooms and rates</h2>
          <p className="text-[#14274A] footer text-md text-center font-semibold">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort is not our only objective, we also value good design, sleek contemporary complemented by the rich tones of nature`s pallete as visible from our rooms` sea-view windows and terraces.</p>
      </div>
      <div className="room-types flex flex-col gap-y-10 mb-10">
        <RoomRatesCardComponent  img={singleRoom} roomtype={`single room`} price={`$147 Avg/night`}/>
        <RoomRatesCardComponent  img={doubleRoom} roomtype={`double room`} price={`$155 Avg/night`}/>
        <RoomRatesCardComponent  img={twinRoom} roomtype={`twin room`} price={`$155 Avg/night`}/>
      </div>
      <Testimonials />
      <Footer />  
    </div>
  )
}

export default Rooms
