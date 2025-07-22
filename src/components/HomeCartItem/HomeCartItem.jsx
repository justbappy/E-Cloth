import { Link } from "react-router-dom";

const HomeCartItem = (props) => {

    console.log(props.cartProducts.map((curr) => curr.productName));

    return (
    <div className="homeProducts items-center">
       {
        props.cartProducts.map((curr, index) => 
            <div className="sm:flex border-2 border-black rounded-lg overflow-hidden" key={index}>
               <div className="sm:w-[100%] bg-yellow-100 xs:w-[100%]">
                    <img src={curr.productURL} alt="" />
               </div>
                <div className="px-3 py-2 flex flex-col justify-between">
                    <h1 className="sm:text-[24px]">{curr.productName}</h1>
                    <p className="sm:text-[18px] xs:hidden sm:flex flex-col">{curr.productDescription} &nbsp; <br />
                        <Link to={'/cart'} className="text-blue-500 underline">read more...</Link>
                    </p>
                    <div className="sm:flex justify-between">
                        <h2 className="text-[20px]">{`${curr.productPrice}$`}</h2>
                        <button className="bg-black text-white p-2 xs:mb-2 sm:mb-0 sm:flex xs:hidden">Add to Wishlist</button>
                        <button className="bg-black text-white p-2 sm:text-base xs:text-[12px]">Remove From Cart</button>
                    </div>
                </div>
            </div>
        )
       }      
    </div>
    )
}

export default HomeCartItem;