import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {

    const [pass, setPass] = useState('password');
    const [eye, setEye] = useState(<FaEyeSlash/>);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const ErrorMessage = "*User with this email already exists*"

    const showPass = (e) => {
        if(document.getElementById('password').type == 'password'){
            setPass('text');
            setEye(<FaEye/>);
        }
        else{
            setPass('password');
            setEye(<FaEyeSlash/>);
        }
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const passChange = (e) => {
        setPassword(e.target.value);
    }
    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if(email == localStorage.getItem('email')){
            return document.getElementById('error').innerText = ErrorMessage;
        }
        localStorage.setItem('username', `${firstname} ${lastname}`);
        localStorage.setItem('email', `${email}`);
        localStorage.setItem('password', `${password}`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        document.getElementById('error').innerText = "";
        
    }

    return (
    <div className="h-[100vh] md:p-10 flex flex-col justify-center items-center xs:px-4">
        <h1 className="font-[sprintura] text-[30px]">E-Cloth</h1>
        <div className="text-center bg-[transparent] border-4 border-[#000000] p-8 rounded-xl md:w-[40%]">
            <h1 className="md:text-[2.5rem] xs:text-[1.8rem] text-black">Register</h1>
            <form className="flex flex-col gap-2 xs:mt-5 sm:mt-20 pb-5 border-b-2 border-black" onSubmit={formSubmit}>
                <p className="md:text-xl sm:text-base text-start">Enter Your Details: </p>
                <div className="flex sm:gap-4 xs:gap-2 xs:flex-col sm:flex-row" >
                    {/* first name */}
                    <div className="border-[#000000] border-[3px] rounded-md p-2 md:text-xl sm:text-base sm:w-[50%]">
                        <input type="text" placeholder="enter first name" required className="border-none outline-none bg-transparent w-[100%]" onChange={firstNameChange} value={firstname}/>
                    </div>
                    {/* last name */}
                    <div className="border-[#000000] border-[3px] rounded-md p-2 md:text-xl sm:text-base sm:w-[50%]">
                        <input type="text" placeholder="enter last name" required className="border-none outline-none bg-transparent w-[100%]" onChange={lastNameChange} value={lastname}/>
                    </div>
                </div>
                {/* email */}
                <div className="border-[#000000] border-[3px] rounded-md p-2 md:text-xl sm:text-base">
                    <input type="email" placeholder="enter email" required className="border-none outline-none bg-transparent w-[100%]" onChange={emailChange} value={email}/>
                </div>
                {/* password */}
                <div className="border-[#000000] border-[3px] rounded-md p-2 md:text-xl sm:text-base flex items-center">
                    <input type={pass} placeholder="enter password" required id="password" className="border-none outline-none bg-transparent w-[100%]" onChange={passChange} value={password}/>
                    <div className="text-[25px] cursor-pointer" onClick={showPass}>
                        {eye}
                    </div>
                </div>
                <div>
                     <button className="text-xl border-2 border-black p-2 bg-black hover:bg-white transition duration-[0.3s] rounded-lg text-white hover:text-black">
                    Register</button>
                </div>
            </form>
            {/* error */}
            <p className={`text-red-500 py-2 `} id="error"></p>
            <p className="md:text-xl sm:text-base py-5" >Already registered? <Link to={'/login'} className="underline text-blue-500">Login</Link></p>
            <button className="text-xl border-2 border-black p-2 bg-black hover:bg-white transition duration-[0.3s] rounded-lg text-white hover:text-black">
                <Link to={'/google-login'} className="flex items-center gap-1">
                    <FcGoogle/>
                    <span className="md:text-xl xs:text-base">Login with Google</span>
                </Link>
            </button>
        </div>
    </div>
    )
}

export default Register;