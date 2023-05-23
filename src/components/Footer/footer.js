import React from "react";
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
    <Link className='icon' to= "https://github.com/Aboubacar7"> 
    <i class=" fa-brands fa-github fa-bounce"></i>
    </Link>
    <Link className='icon' to= "https://www.linkedin.com/in/aboubacar-drago-59487b262/"> 
    <i class="fa-brands fa-linkedin fa-bounce"></i>
    </Link>
    <Link className='icon' to= "https://github.com/Aboubacar7"> 
    <i class="fa-brands fa-stack-overflow fa-bounce"></i>
    </Link>
    </div>
  );
};

export default Footer;
