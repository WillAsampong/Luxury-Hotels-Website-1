import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#14274A] w-full h-48 relative">
        <footer className="flex text-white justify-between w-4/5 mx-auto items-center">
            <div className="footer-group1">
                <div className="logo-text">
                    <div className="uppercase text-white text-3xl font-bold">
                        Luxury
                    </div>
                    <div className="uppercase text-white font-normal text-sm tracking-[0.3rem]">
                        Hotels
                    </div>
                </div>
                <div className="reach-out mt-4 text-sm">
                    <p>497 Evergreen Rd. Roseville, CA 95673</p>
                    <p>+44 345 678 903</p>
                    <p>luxury_hotels@gamil.com</p>
                </div>
            </div>
            <div className="nav">
                <ul className="space-y-2 font-normal text-sm">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Terms & Conditions</li> 
                </ul>
            </div>
            <div className="socials space-y-2 text-sm">
                <div className="facebook flex space-x-4 cursor-pointer">
                    <FontAwesomeIcon icon={faFacebookF} className="mt-1"/>
                    <div className="social-text">
                        <p>Facebook</p>
                    </div>
                </div>
                <div className="twitter flex space-x-4 cursor-pointer">
                    <FontAwesomeIcon icon={faTwitter}  className="mt-1"/>
                    <div className="social-text">
                        <p>Twitter</p>
                    </div>
                </div>
                <div className="instagram flex space-x-4 cursor-pointer">
                    <FontAwesomeIcon icon={faSquareInstagram} className="mt-1"/>
                    <div className="social-text">
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            <div className="subscribe text-sm">
                <p className="mb-4">Subscribe to our newsletter</p>
                <div className="email-group border-[#E0B973] border-2 rounded-sm">
                    <input type="text" placeholder="Email Address" className="border-none outline-none py-3 px-4 bg-transparent"/>
                    <button className="bg-[#E0B973] text-[#14274A] py-3 px-6">OK</button>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
