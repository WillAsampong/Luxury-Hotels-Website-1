import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  return (
    <div>
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
    </div>
  )
}

export default Testimonials
