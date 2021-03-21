import React from "react";
import "./Education.css";

function Education() {
  return (
    <div>
      <div className="container education">
        <div className="jumbotron py-4">
          <div className="">
            <h1 className="display-3 text-center">Education</h1>
          </div>
          {/* Card section */}
          <div class="d-flex justify-content-between row my-4">
            <div class="gap col-lg-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">
                    College
                  </strong>
                  <h3 class="mb-0">VIT, Vellore</h3>
                  <div class="mb-1 text-muted">2016 - 2020</div>
                  <p class="card-text mb-auto">
                    Completed my Engineering in 'Information Technology' CGPA -
                    8.24
                  </p>
                </div>
                <div class="d-flex justify-content-center align-self-center col-auto d-none d-lg-block">
                  <img src="/Images/vit1.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div class="gap col-lg-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    10th & 12th
                  </strong>
                  <h3 class="mb-0">DPS, Agra</h3>
                  <div class="mb-1 text-muted">2013-14 | 2015-16</div>
                  <p class="mb-auto">
                    Completed my X & Xll with CGPA - 8.8 and 90% respectively in
                    PCM with PE
                  </p>
                </div>
                <div class="d-flex justify-content-center align-self-center col-auto d-none d-lg-block">
                  <img
                    src="/Images/dps.png"
                    alt=""
                    className="img-fluid w-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
