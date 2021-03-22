import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="py-3">
        <div className="container d-flex flex-row justify-content-between">
          <p>
            © 2017-2019 Company, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
