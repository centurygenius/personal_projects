import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Main () {
    const myImage = "/images/wristwatch-image.png"

    let myWidth ="width: 18rem;"
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                   <Header />
                </div>
            </nav>
                <div class="container text-center">
                    <div class="row">
                        <div className="col-2 empty-col"></div>
                        <div className="col first-col">
                            <h1>Select Your Newest <br></br>Perfect Style That Fits <br></br> Fashion</h1>
                            <p>Your fashion is our quest as we are poised to deliver the <br></br>latest and quality wrist 
                                 watches even at your door step!
                            </p>
                            <a href="https://www.google.com/search?q=images+of+wrist+watch&tbm=isch&chips=q:wrist+watch,g_1:gold:5OmkZHCuabo%3D&hl=en-GB&sa=X&ved=2ahUKEwi4yPH_qumDAxWjAvsDHV_hBAkQ4lYoAnoECAEQNw" target="_blank">
                            <button type="button" class="btn btn-danger">Shop Now</button>
                            </a>
                        </div>
                        <div className="col-4 sec-col">
                            <img src={myImage} class="img-fluid wristwatch-img" alt="wristwatch" />
                        </div>
                    </div>
                </div>
                <div class="container card-row">
                    <div class="row">
                        <div className="col col-xs col-sm col-md-6 col-lg-3 col-xl-3">
                            <div class="card card-image">
                                <img src="https://i.ebayimg.com/images/g/KqUAAOSwHHdhGjde/s-l960.jpg" class="card-img-top"         alt="card-picture" />
                                <div class="card-body">
                                    <h5 class="card-title">Rolex</h5>
                                    <hr></hr>
                                    <p class="card-text">We offer the best quality wrist watches that worths your fashionable style.</p>
                                    <a href="https://i.ebayimg.com/images/g/KqUAAOSwHHdhGjde/s-l960.jpg" target="__blank" class="btn btn-danger">Explore and Shop!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xs col-sm col-md-6 col-lg-3 col-xl-3">
                            <div class="card card-image">
                                <img src="https://i.ebayimg.com/images/g/EdwAAOSwj41lSkpZ/s-l960.jpg" class="card-img-top"         alt="card-picture" />
                                <div class="card-body">
                                    <h5 class="card-title">Titan</h5>
                                    <hr></hr>
                                    <p class="card-text">We work tirelessly to satisfy your fashion sense and give you the best.</p>
                                    <a href="https://i.ebayimg.com/images/g/EdwAAOSwj41lSkpZ/s-l960.jpg" target="__blank" class="btn btn-danger">Explore and Shop!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xs col-sm col-md-6 col-lg-3 col-xl-3">
                            <div class="card card-image">
                                <img src="https://i.ebayimg.com/images/g/H9oAAOSwXatlSkpZ/s-l1600.jpg" class="card-img-top"         alt="card-picture" />
                                <div class="card-body">
                                    <h5 class="card-title">Casio</h5>
                                    <hr></hr>
                                    <p class="card-text">With the latest technology, we provide people with values for money.</p>
                                    <a href="https://i.ebayimg.com/images/g/H9oAAOSwXatlSkpZ/s-l1600.jpg" target="__blank" class="btn btn-danger">Explore and Shop!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xs col-sm col-md-6 col-lg-3 col-xl-3">
                            <div class="card card-image">
                                <img src="https://i.ebayimg.com/images/g/Mo8AAOSwF0FljPxK/s-l1600.jpg" class="card-img-top"         alt="card-picture" />
                                <div class="card-body">
                                    <h5 class="card-title">Alamy</h5>
                                    <hr></hr>
                                    <p class="card-text">Our wrist watches has various features for use whether for students, kids and the elderly.</p>
                                    <a href="https://i.ebayimg.com/images/g/Mo8AAOSwF0FljPxK/s-l1600.jpg" target="__blank" class="btn btn-danger">Explore and Shop!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container template-description">
                    <div class="row">
                        <div class="col-4 template">
                            <h3>Template Details</h3>
                            <hr className="hr-style"></hr>
                            <p><strong>Author</strong>: WatchMag</p>
                            <p><strong>Released</strong>: 2023</p>
                            <p><strong>Licence</strong>: CEN24984-02</p>
                            <p><strong>Credit</strong>: Images from Google</p>
                        </div>
                        <div class="col-8">
                            <h3>Description</h3>
                            <hr></hr>
                            <p>
                                WatchMag is a state-of-the-art, quality and money-for-value wrist watch online shop. If you ever think of purchasing wrist watches or creating an online presence for your wrist watch business, WatchMag is excellent for all these. You can also make a request for your custom wrist watch. Our testimonials will prove that to you.                                      
                                <p></p>
                                In addition to the beautiful designs, WatchMag also showcases other features and designers that fashion lovers crave for thereby raising your personality. WatchMag is the home of various world-class designers wrist watches. Not only this, it is equally a place that you can confidently do your business without any form of hindrance or bottle-necks.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container footer-container">
                    <Footer />
                </div>          
        </div> 
    );
}

export default Main;