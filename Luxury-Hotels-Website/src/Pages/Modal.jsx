import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onClose, children }) => {
    if(!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        {/* modal */}
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-sm w-full relative">
            <button
             onClick={onClose} 
             className="absolute right-2 top-2 rounded transition-all p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200">
                <FontAwesomeIcon icon={faX} />
            </button>
            {children}  
        </div>
    </div>
  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
}

export default Modal
