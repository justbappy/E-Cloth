import { Link } from "react-router-dom";

const HotProductCard = (props) => {
    return (
    <>
    {
        props.hotProducts.map((curr, index) =>
            <Link className="hotChild" key={index} to={
                localStorage.getItem('username')?`/${curr.productID}`:'/register'
            }>
                <div className=" bg-[#353a3a] hover:rounded-[20px] transition-all duration-[0.3s] text-white sm:p-8 xs:p-2 flex flex-col items-center border-4 border-transparent gap-3 hover:bg-white hover:border-slate-700 hover:text-[#353a3a]">
                    <img src={curr.productURL} alt="" className="w-[100%]"/>
                    <div className="flex flex-col gap-2">
                        <h1 className="md:text-[2rem] sm:text-[1.5rem]">{curr.productName}</h1>     
                    </div>
                </div>
            </Link>
        )
    }
    </>
    )
}

export default HotProductCard;