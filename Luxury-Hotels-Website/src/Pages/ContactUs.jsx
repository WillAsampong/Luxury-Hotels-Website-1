import Navbar from "../Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const ContactUS = () => {
  return (
    <div>
        <div className="bg-[#14274A]">
            <Navbar />
            <div className="contact-heading h-40 my-auto">
                <h1 className="uppercase text-5xl text-white text-center font-bold">Contact Us</h1>
            </div>
        </div>
        <div className="w-4/5 mx-auto text-[#14274A] h-screen">
            <div className="mt-20">
                <h2 className="logo-text text-3xl font-bold uppercase">We are here for you</h2>
                <p className="footer text-xl text-start">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
                please forward it to our support desk and we will get back to you as soon as possible.</p>
            </div>
            <div className="contact-info flex mt-20 justify-between">
                <div className="contact-address text-2xl footer space-y-3">
                    <p className="">497 Evergreen Rd. Roseville,<br /> CA 95673</p>
                    <span className="font-bold">View map <span className=""><FontAwesomeIcon icon={faArrowRightLong} /></span></span>
                    <p>Phone: +44 345 678 903</p>
                    <p>Email: luxury_hotels@gmail.com</p>
                </div>
                <div className="send-a-message flex flex-col w-2/5 gap-y-3">
                    <label htmlFor="name" className="flex flex-col"> Name:
                        <input type="text" id="name" className="border border-slate-800 w-full p-2"/>
                    </label>
                    <label htmlFor="name" className="flex flex-col"> Email Address
                        <input type="text" id="name" className="border border-slate-800 w-full p-2"/>
                    </label>
                    <label htmlFor="name" className="flex flex-col"> Message
                        <input type="message" id="name" className="border border-slate-800 "/>
                    </label>
                    <button className="bg-[#E0B973] text-white px-2 py-1 flex">Submit</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ContactUS
