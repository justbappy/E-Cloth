import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const BottomNav = () => {
    const [search, setSearch] = useState('');

    const searchProducts = (e) => {
        setSearch(e.target.value);
    }

    return (
    <div className="flex justify-between items-center xs:flex-col sm:flex-row sm:gap-0 xs:gap-4" >
        <div className="sm:w-[30%] xs:w-[100%] text-center">
            <p className="text-[20px]">Get 50% off in winter season sale!</p>
        </div>

        <div className="sm:w-[40%] xs:w-[100%] xs:px-2 flex justify-end">
             <div className="border-[#000000] border-[3px] rounded-md p-2 md:text-xl sm:text-base sm:w-[100%] xs:w-[100%] flex items-center">
                <input type="text" placeholder="Search Products..." required className="border-none outline-none bg-transparent w-[100%]" onChange={searchProducts} value={search}/>
                <IoSearchSharp className="text-[23px]"/>
            </div>
            
        </div>

        <div className="flex sm:w-[30%] xs:w-[100%] justify-end px-5 gap-3">
            <Link to={'/wishlist'} className="xs:w-[50%]">
                <div className="flex items-center justify-center gap-2 bg-black p-3 text-white hover:bg-white hover:text-black transition duration-[0.2s] border-2 border-transparent hover:border-black rounded-xl cursor-pointer ">
                    <span className="sm:text-[20px] xs:text-[16px]">Your Wishlist</span> <FaRegHeart className="sm:text-[25px] xs:text-[20px]"/>
                </div>
            </Link>
            
            <Link to={'/cart'} className="xs:w-[50%]">
                <div className="flex items-center justify-center gap-2 bg-black p-3 text-white hover:bg-white hover:text-black transition duration-[0.2s] border-2 border-transparent hover:border-black rounded-xl cursor-pointer">
                    <span className="sm:text-[20px] xs:text-[16px]">Your Cart</span><MdOutlineShoppingCart className="sm:text-[25px] xs:text-[20px]"/> 
                </div>
            </Link>
        </div>
    </div>
    )
}

export default BottomNav;