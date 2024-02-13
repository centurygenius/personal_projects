import React from "react";

function Footer () {

    const myDate = new Date().getFullYear();
    return (
        <div className="footer" style={{height:"50px"}}>
           <p> Copyright &copy; {myDate} - centurygenius</p>
        </div>
        
    );
}

export default Footer;