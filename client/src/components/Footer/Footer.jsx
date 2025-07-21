import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
    <div>
        <div className=" container flex flex-wrap sm:justify-between py-5 border-b-2 border-slate-600 sm:gap-10 xs:gap-10 xs:justify-center">
            <div className="flex flex-col gap-4 xs:gap-0">
                <h1 className="font-[sprintura] text-[25px]">E-Cloth</h1>
                <p className="sm:text-[1.4rem] xs:text-[13px]">Contact: +91 7823166190</p>
                <p className="sm:text-[1.4rem] xs:text-[13px] w-[250px]  sm:w-[220px]">Adress: Street 2, Shop no. 3, E-Cloth Center, Gabinagar, Navi Mumbai</p>
            </div>
            <div>
                <ul className="flex flex-col items-center sm:text-[1.4rem] xs:text-[13px]">
                    <li>
                        <Link className="navHover font-bold">Home</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Shop All</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">New Arrivals</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Track Order</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Offers & Discounts</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">FAQs</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col items-center sm:text-[1.4rem] xs:text-[13px]">
                    <li>
                        <Link className="navHover font-bold">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Shipping Info</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Returns & Exchanges</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link className="navHover font-bold">FAQs</Link>
                    </li>
                </ul>
            </div>
            <div className="xs:flex xs:flex-col xs:justify-end">
                <h1 className="sm:text-[1.4rem]">Follow us on: </h1>
                <div className="flex gap-2 text-[1.8rem]">
                    <Link><FaFacebook/></Link>
                    <Link><AiFillInstagram/></Link>
                    <Link><FaXTwitter/></Link>
                    <Link><FaYoutube/></Link>
                </div>
            </div>
        </div>
        <div className="text-center py-5 text-slate-500">
            <p> 2025 @yennamvishal - All Rights Reserved</p>
        </div>
    </div>
    )
}

export default Footer;