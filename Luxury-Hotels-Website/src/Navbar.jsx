import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between w-4/5 mx-auto">
        <div className="logo bg-[#E0B973] rounded-bl-[42px] rounded-br-[42px]">
            <div className="logo-text px-6 py-6">
                <div className="text-[#14274A] font-bold uppercase text-4xl text-center">
                    luxury
                </div>
                <div className="uppercase text-[#14274A] font-bold text-sm text-center tracking-[0.3rem]">
                    hotels
                </div>
            </div>
        </div>
        <ul className="nav-list flex justify-between w-1/3 my-auto font-normal">
            <li><NavLink to="/" className="text-white font-semibold">Home</NavLink></li>
            <li><NavLink to="/facilities" className="text-white font-semibold">Facilities</NavLink></li>
            <li><NavLink to="/rooms" className="text-white font-semibold">Rooms</NavLink></li>
            <li><NavLink to="/contact-us" className="text-white font-semibold">Contact-Us</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
