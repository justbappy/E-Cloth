import { Link } from "react-router-dom";

const CTAButton = (props) => {
    return (
    // dynamic call to action button
    <Link to={
        localStorage.getItem('username')?`/${props.link}`:'/register'
    }>
    <div className={`md:text-[18px] sm:text-[14px] xs:text-[14px] bg-[#0d101c] xs:bg-[white] text-white xs:text-black border-2 xs:border-black xs:font-bold outline-none md:p-4 sm:p-2 xs:py-[8px] xs:px-2 rounded-lg hover:bg-[#1b2031] hover:text-white transition duration-[0.2s]`}>
       <button>{props.ctaName}</button>  
    </div>
    </Link>
    )
}

export default CTAButton;