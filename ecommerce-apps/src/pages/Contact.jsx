import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact () {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                   <Header />
                </div>
            </nav>
            <h5 id="contact-h5">Contact us by completing this form:</h5>
            <hr></hr>
            <div className="form-div">
                    <form action="" className="contact-form">
                        <div className="row">
                                <div class="col-md-6 offset-md-3">
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                        </div>
                                    </div><br></br>
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Home number" aria-label="Home number" />
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Mobile number" aria-label="Mobile number" />
                                        </div>
                                    </div><br></br>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Message title:</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Message title" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Write your comment here:</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="col-auto">
                                        <a href="mailto:samuelo.abiona@gmail.com"><button type="submit" class="btn btn-primary">Submit</button></a>
                                    </div>
                                </div>
                        </div>
                    </form>
            </div>
            <div class="container footer-container">
                <Footer />
            </div> 

        </div>
        
    )
}

export default Contact;