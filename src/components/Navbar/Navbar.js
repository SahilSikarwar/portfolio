import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <header class="con blog-header py-3">
        <div class="row flex-nowrap justify-content-around align-items-center">
          <div class="col-md-4 pt-1">
            <spam class="display-1 blog-header-logo text-dark" href="#">
              Sahil Sikarwar
            </spam>
          </div>
          <div class="col-md-4 text-center">
            <a class="blog-header-logo text-dark" href="#">
              <img className="img-logo" src="/Images/witcher-2.png" alt="" />
            </a>
          </div>
          <div class="col-md-4 d-flex justify-content-end align-items-center">
            <i class="effect fab fa-github fa-lg"></i>
            <i class="effect fab fa-instagram fa-lg mx-4"></i>
            <i class="effect fab fa-linkedin-in fa-lg"></i>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
