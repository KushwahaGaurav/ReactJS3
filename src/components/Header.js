import {LOGO_URL} from "../utils/contants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [btn, setbtn] = useState('Log-in');

    useEffect(()=>{
        console.log("useeffect  render");
    },[btn])

    return(
        <div className="header">
            <div className="logo">
            <img src={LOGO_URL}/>
            
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About US</Link>
                    </li>
                    <li>
                    <Link to="/contect">Contact US</Link>
                    </li>
                    <li>
                    <Link to="/carts">Carts</Link>
                    </li>
                    <button className="login" onClick={() => {
                        btn ==="Log-in"? setbtn("Log-out") : setbtn("Log-in");  
                        console.log("helloo")
                    }} >{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;