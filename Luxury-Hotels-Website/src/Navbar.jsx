import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between w-4/5 mx-auto h-32">
        <div className="logo w-64 h-36 bg-[#E0B973] rounded-bl-[56px] rounded-br-[56px]">
            <div className="logo-text pt-8">
                <div className="text-[#14274A] font-bold uppercase text-4xl text-center">
                    luxury
                </div>
                <div className="uppercase text-[#14274A] font-bold text-sm text-center">
                    hotels
                </div>
            </div>
        </div>
        <ul className="nav-list flex justify-between w-1/3 my-auto font-normal">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
