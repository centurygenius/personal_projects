import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        <div>
                <button class="btn btn-success btn-md watchmag-button" type="button" disabled>
        <img src="images/wristwatch.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
         WatchMag
      </button>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse header" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/pricing" class="nav-link active" aria-current="page" target="_blank">Pricing</Link>
            </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" href="#shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Shop
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#store">Store</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><Link to="/latest" class="dropdown-item" aria-current="page" target="_blank">Latest Watches</Link></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#custom">Custom Watches</a></li>
                  </ul>
              </li>
              <li class="nav-item">
                  <Link to="/contact" class="nav-link active" aria-current="page" target="_blank">Contact</Link>
              </li>
          </ul>
          <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
        </div>
        
    )
}

export default Header;