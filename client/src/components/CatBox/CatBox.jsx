import { Link } from "react-router-dom";

const CatBox = (props) => {
    return (
    <>
    {
        props.categoryItems.map((curr, index) => 
            <div key={index} className="catChild border-2 border-slate-700 ">
                <Link to={
                    localStorage.getItem('username')?curr.toLowerCase():'/register'
                } key={index} >
                    <div className={`flex justify-center items-center h-[100%] md:text-[2rem] sm:text-[1.5rem] px-2`}>
                        {curr}
                    </div>
                </Link>
            </div>
        )
    }
    </>
    )
}

export default CatBox;