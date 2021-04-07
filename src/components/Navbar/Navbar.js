import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <header class="con blog-header py-3">
        <div class="row flex-nowrap justify-content-around align-items-center">
          <div class="col-md-4 d-none d-md-flex pt-1">
            <spam class="display-1 blog-header-logo text-dark" href="#">
              Sahil Sikarwar
            </spam>
          </div>
          <div class="col-md-4 text-center">
            <a class="blog-header-logo text-dark" href="#">
              <img className="img-logo" src="/Images/witcher-2.png" alt="" />
            </a>
          </div>
          <div class="col-md-4 d-none d-md-flex d-flex justify-content-end align-items-center">
            <a href="https://github.com/SahilSikarwar">
              <i class="effect fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/the_modern_witcher/">
              <i class="effect fab fa-instagram fa-lg mx-4"></i>
            </a>
            <a href="https://www.linkedin.com/in/sahilsikarwar/">
              <i class="effect fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
