import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const RoomRatesCardComponent = ({ img, roomtype, price}) => {
  return (
    <div className="w-4/5 mx-auto border-2 border-slate-600 border-t-0 rounded-md">
      <div className="relative">
        <img src={img} className='w-full'/>
        {/* <div className="carousel flex border-2 mx-auto bg-black">
          <div className="circle-1 border-1 border-white rounded-full p-2 bg-white"></div>
          <div className="circle-2 border-1 border-white rounded-full p-2 bg-transparent"></div>
          <div className="circle-3 border-1 border-white rounded-full p-2 bg-white"></div>
        </div> */}
        <div className="room-type bg-[#14274A] py-4">
          <p className='text-white font-bold text-3xl text-center uppercase -translate-y-3'>{roomtype}</p>
        </div>
      </div>
      <div className="room-details flex justify-between py-12 px-8">
        <div className="view-details flex gap-x-3">
          <FontAwesomeIcon icon={faPlus} className='p-2 bg-[#E0B973] text-white rounded-full'/>
          <p className='uppercase text-[#14274A] text-lg font-semibold'>view room details</p>
        </div>
        <div className="price py-2 px-3 bg-[#E0B973] text-white footer rounded-md font-semibold">{price}</div>
      </div>
    </div>
  )
}

RoomRatesCardComponent.propTypes = {
  img: PropTypes.string,
  roomtype: PropTypes.string,
  price: PropTypes.string,
}

export default RoomRatesCardComponent
