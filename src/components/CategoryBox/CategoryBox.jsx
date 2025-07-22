import { Link } from "react-router-dom";

const CategoryBox = (props) => {
    return (
    <div className="flex container gap-2">
       {
        props.categoryItems.map((curr,index) => 
       <Link className="flex flex-col items-center gap-2 " key={index} >
            <div className="border-2 border-black bg-[#1a1a1a] text-white hover:bg-white rounded-lg transition duration-[0.2s] sm:w-[100%] xs:w-[100px] ">
                <img src={curr.categoryImage} alt="" className="w-[100%]"/>
            </div>
            <h1 className="xs:text-base sm:text-[25px]">{curr.categoryName}</h1>
       </Link>
        )
       }
    </div>
    )
}

export default CategoryBox;