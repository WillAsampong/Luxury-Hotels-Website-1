import { useState } from "react"
import Navbar from "../Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const ContactUS = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const validate = (values) => {
        let errors = {};
        if(!values.fullname){
            errors.fullname = 'Name is required';
        }
        if(!values.email) {
            errors.emai = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid'
        }

        if(!values.message) {
            errors.message = 'Type your message';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

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
                <div className="send-a-message w-2/5  border-2 border-blue-500 p-6">
                    <form action="" className="flex flex-col gap-y-2" onSubmit={handleSubmit}>    
                        <label htmlFor="name" className="flex flex-col"> Name
                            <input
                             type="text" 
                             name="fullname"
                             value={formData.fullname} 
                             id="name" 
                             placeholder="Enter full name..." 
                             autoComplete="off" 
                             className="border border-slate-800 w-full p-2" 
                             onChange={handleChange}/>
                        </label>
                        <label htmlFor="email" className="flex flex-col"> Email Address
                            <input
                             type="text" 
                             name="email"
                             value={formData.email} 
                             id="email" 
                             placeholder="Enter your email address" 
                             autoComplete="off" 
                             className="border border-slate-800 w-full p-2"/>
                        </label>
                        <label htmlFor="message" className="flex flex-col"> Message
                            <textarea
                             cols={30} 
                             rows={10} 
                             type="text" 
                             placeholder="Type your message..." 
                             autoComplete="off" 
                             id="message" 
                             value={formData.message}
                             name="message" 
                             className="border border-slate-800 "/>
                        </label>
                        <button type="submit" className="bg-[#E0B973] text-white mt-3 px-3 py-2 rounded-sm">Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ContactUS
