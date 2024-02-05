import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    const myDate = new Date ().getFullYear();
    return(
        <div class="row footer">
                        <div class="col">
                            <h5>Share this:</h5>
                            <a href="#" class="fa fa-facebook"></a><br></br>
                            <a href="#" class="fa fa-instagram"></a><br></br>
                            <a href="#" class="fa fa-pinterest"></a><br></br>
                            <a href="#" class="fa fa-youtube"></a><br></br>
                            <br></br>
                            Copyright &copy; {myDate} - centurygenius
                        </div>
                        <div class="col">
                            <h5>Explore:</h5>
                            <h6>Company</h6>
                            
                            <a href=""><Link to="/" class="nav-link active" aria-current="page">&raquo; Home</Link></a>
                            <a href=""><Link to="/pricing" class="nav-link active" aria-current="page" target="_blank">&raquo; Pricing</Link></a>
                            <a href=""><Link to="/latest" class="dropdown-item" aria-current="page" target="_blank">&raquo; Latest Watches</Link></a>
                            <a href="#custom">&raquo; Custom</a> <br></br>
                            <a href=""><Link to="/contact" class="nav-link active" aria-current="page" target="_blank">&raquo; Contact</Link></a>
                        </div>
                        <div class="col">
                            <h5>Help:</h5>
                            <br></br>
                            <a href="#support">&raquo; Support</a> <br></br>
                            <a href="#faqs">&raquo; FAQs</a> <br></br>
                            <a href="#follow">&raquo; Follow</a> <br></br>
                            <a href="#merchandising">&raquo; Merchandising</a> <br></br>
                            <a href="#licence">&raquo; Licence</a>
                        </div>
        </div>
    )
}

export default Footer;