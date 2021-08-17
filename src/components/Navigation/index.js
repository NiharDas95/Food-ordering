import { Link } from "react-router-dom";
import "./Navigation.css";
import {useState} from "react";
function Navigation() {
    const [activeLink, setActiveLink] = useState(null);

   return (
    <ul className="list">
        <li onClick={()=>setActiveLink("cat")}  className={activeLink === 'cat' ? "active" : null }>
         <Link to="/catagories" >Catagories</Link></li>
        <li  onClick={()=>setActiveLink("ord")} className={activeLink === 'ord' ? "active" : null }>
            <Link to="/orders"> Orders</Link></li>
        <li  onClick={()=>setActiveLink("add")} className={activeLink === 'add' ? "active" : null }>
            <Link to="/address"> Manage Address</Link></li>
    </ul>
   )
}

export default Navigation;