import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const ContactUS = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.fullname) {
      errors.fullname = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if (!values.message) {
      errors.message = 'Type your message';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log(formData);
      alert('Form submitted successfully');
    }
  }, [formErrors, formData, isSubmitted]);

  return (
    <div>
      <div className="bg-[#14274A]">
        <Navbar />
        <div className="contact-heading h-40 flex items-center justify-center">
          <h1 className="uppercase text-5xl text-white font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="w-4/5 mx-auto text-[#14274A] min-h-screen py-16">
        <div className="mt-20">
          <h2 className="text-3xl font-bold uppercase">We are here for you</h2>
          <p className="text-xl text-start mt-4">
            At Luxury Hotels, we take our customers seriously. Do you have any enquiries, complaints, or requests?
            Please forward them to our support desk, and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-info flex mt-20 justify-between">
          <div className="contact-address text-2xl space-y-3">
            <p>497 Evergreen Rd. Roseville,<br /> CA 95673</p>
            <span className="font-bold flex items-center cursor-pointer">
              View map <FontAwesomeIcon icon={faArrowRightLong} className="ml-2"/>
            </span>
            <p>Phone: +44 345 678 903</p>
            <p>Email: luxury_hotels@gmail.com</p>
          </div>
          <div className="send-a-message w-2/5 border-2 border-blue-500 p-6 rounded-lg">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <label htmlFor="fullname" className="flex flex-col">
                Name
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  id="fullname"
                  placeholder="Enter full name..."
                  autoComplete="off"
                  className="border border-gray-400 p-2 rounded"
                  onChange={handleChange}
                />
                {formErrors.fullname && <span className="text-red-500 text-sm">{formErrors.fullname}</span>}
              </label>
              <label htmlFor="email" className="flex flex-col">
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  id="email"
                  placeholder="Enter your email address"
                  autoComplete="off"
                  className="border border-gray-400 p-2 rounded"
                  onChange={handleChange}
                />
                {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
              </label>
              <label htmlFor="message" className="flex flex-col">
                Message
                <textarea
                  cols={30}
                  rows={10}
                  name="message"
                  value={formData.message}
                  id="message"
                  placeholder="Type your message..."
                  autoComplete="off"
                  className="border border-gray-400 p-2 rounded"
                  onChange={handleChange}
                />
                {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
              </label>
              <button type="submit" className="bg-[#E0B973] text-white mt-3 px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
