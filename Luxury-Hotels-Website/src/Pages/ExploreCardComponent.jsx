import PropTypes from "prop-types"

const ExploreCardComponent = ({ img, title, text }) => {
  return (
    <div className="w-4/5 mx-auto flex my-16">
        <div className="py-6 px-4 flex h-full space-x-6 my-auto">
            <div className="border-l-2 border-gray-500"></div>
            <div className="explore-cta flex flex-col gap-y-4 w-2/3">
                <h2 className="text-[#14274A] text-4xl font-bold logo-text">{title}</h2>
                <p className="footer font-normal text-lg text-[#14274A]">{text}</p>
                <div className="explore-btn">
                    <button className="py-3 px-5 bg-[#E0B973] footer rounded-md text-white font-bold uppercase">Explore</button>   
                </div>
            </div>
        </div>
        <img src={img} className="w-1/2"/>
    </div>
  )
}

ExploreCardComponent.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default ExploreCardComponent
