import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import LOGO_URL from "../utils/constants";
import useOnlineStatues from "../utils/useOnlineStatus";

export const Header = () =>{
    const[loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatues();
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
             </div>
             <div className="nav-items">
             <ul>
                <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                <li><Link to = "/home">Home</Link></li>
                <li><Link to ="/about">About Us</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button className="btn-login" onClick={()=>{
                    setLoginBtn(loginBtn=="Logout"?"Login":"Logout");
                }}>{loginBtn}</button>
             </ul>
             </div>
       </div>
    );
};

export default Header;