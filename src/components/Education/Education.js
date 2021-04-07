import React from "react";
import "./Education.css";

function Education() {
  return (
    <div>
      <div className="education">
        <div className="container jumbotron py-4">
          <div className="">
            <h1 className="display-3 text-center">Education</h1>
          </div>
          {/* Card section */}

          <div class="row my-4 d-flex justify-content-center">
            <div class="col-xl-5 mx-2 my-2">
              <div class="row no-gutters border rounded overflow-hidden flex-row mb-0 shadow-sm h-md-250 position-relative">
                <div class="col-lg-8 p-4 d-flex flex-column position-static">
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
                <div class="d-flex justify-content-center align-self-center col-4 d-none d-lg-block">
                  <div class="d-flex justify-content-center align-self-center">
                    <img
                      src="/Images/vit.png"
                      alt=""
                      className="gap img-thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-5 mx-2 my-2">
              <div class="row no-gutters border rounded overflow-hidden flex-row mb-0 shadow-sm h-md-250 position-relative">
                <div class="col-lg-8  p-4 d-flex flex-column position-static">
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
                <div class="d-flex justify-content-center align-self-center col-4 d-none d-lg-block">
                  <div class="d-flex justify-content-center align-self-center">
                    <img
                      src="/Images/dps_new.png"
                      alt=""
                      class="gap img-thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card section ends */}
        </div>
      </div>
    </div>
  );
}

export default Education;
