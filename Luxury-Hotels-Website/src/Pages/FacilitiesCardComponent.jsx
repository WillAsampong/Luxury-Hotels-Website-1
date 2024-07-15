import PropTypes from 'prop-types'

const FacilitiesCardComponent = ({ img, fname }) => {
  return (
    <div className=' mx-auto relative h-[700px] my-20' >
      <img src={img} className='w-full h-full'/>
      <div className="facility-name text-center px-6 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-[#14274A] uppercase font-bold text-4xl">{fname}</div>
    </div>
  )
}

FacilitiesCardComponent.propTypes = {
    img: PropTypes.string,
    fname: PropTypes.string,
}

export default FacilitiesCardComponent
