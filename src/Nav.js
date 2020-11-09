import React, { useEffect, useState } from 'react';
import './Nav.css';
import requests from './requests';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src = "https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix Logo"
            />  
            <img 
                className="nav__avatar"
                src = "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589"
                alt="Netflix avatar"
            />           
        </div>
    )
}

export default Nav
