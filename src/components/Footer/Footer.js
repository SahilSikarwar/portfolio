import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="py-3">
        <div className="d-flex flex-row justify-content-around">
          <div class="col-md-4 d-flex justify-content-start align-items-center">
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
          <div className="">
            <p class="float-right">
              <a href="#">Back to top</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
