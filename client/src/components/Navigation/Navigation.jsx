import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navigation = (props) => {
    return (
    <header className="container py-4 text-lg flex items-center justify-between">
        <Link to="/"><h1 className="sm:text-[2rem] xs:text-[1.3rem] font-[sprintura]">E-Cloth</h1></Link>
        <nav className="flex gap-4 items-center">
            <ul className="sm:flex items-center gap-4 xs:hidden md:text-[1.4rem]">
                {/* dynamic nav links using props*/}
                {
                    props.arr.map((curr,index) => <li key={index} className="font-bold navHover">
                        <Link to={
                            localStorage.getItem('username')?`/${curr.toLowerCase()}`:'/register'
                        }> {curr} </Link>
                    </li>)
                }
                   
            </ul>
            <Link to={
                localStorage.getItem('username')?'/user-profile':'/register'
            } className="sm:h-[40px] xs:h-[30px] sm:w-[40px] xs:w-[30px] bg-[#222526] rounded-full text-white flex justify-center items-center"><span>
                {
                    localStorage.getItem('username') ? <div className="xs:text-[18px] sm
                    text-lg">U</div> :<FaUser className="xs:text-[14px] sm:text-lg"/>
                }
                </span></Link>
        </nav>
        
    </header>
    
    )
}

export default Navigation;