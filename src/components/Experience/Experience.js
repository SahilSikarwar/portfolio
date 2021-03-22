import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      {/* Experience section */}
      <div className="alt-gray">
        <div className="jumbotron py-4">
          <div className="">
            <h1 className="display-3 text-center">Experience</h1>
          </div>
        </div>

        {/* experience cards */}
        <div className="">
          {/* card - 1 */}
          <div class="row featurette" style={{ margin: "0px 50px" }}>
            <div class="d-flex flex-column align-self-center col-md-7 order-md-2">
              <div className="">
                <h2 class="featurette-heading">Analyst : BARCLAYS</h2>
                <h6 class="text-muted featurette-heading">
                  Auguest/2020 - Current
                </h6>
              </div>
              <div className="">
                <p class="lead card-text">
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </div>
            </div>
            <div class="col-md-5 d-flex justify-content-center order-md-1">
              <img
                className="img-fluid"
                src="/Images/barclays_200.png"
                alt=""
              />
            </div>
          </div>
          <hr class="featurette-divider"></hr>
          {/* card - 2 */}
          <div class="row featurette" style={{ margin: "0px 50px" }}>
            <div class="d-flex flex-column align-self-center col-md-7 order-md-2">
              <div className="">
                <h2 class="featurette-heading">BlockChain Developer : WETFF</h2>
                <h6 class="text-muted featurette-heading">
                  May/2020 - July/2020
                </h6>
              </div>
              <div className="">
                <p class="lead card-text">
                  Worked as a Blockchain and FrontEnd Developer.
                </p>
              </div>
            </div>
            <div class="col-md-5 d-flex justify-content-center order-md-1">
              <img className="img-fluid" src="/Images/wetff.png" alt="" />
            </div>
          </div>

          <hr class="featurette-divider"></hr>
          {/* card - 3 */}
          <div class="row featurette" style={{ margin: "0px 50px" }}>
            <div class="d-flex flex-column align-self-center col-md-7 order-md-2">
              <div className="">
                <h2 class="featurette-heading">Software Developer : WSS</h2>
                <h6 class="text-muted featurette-heading">
                  May/2019 - June/2019
                </h6>
              </div>
              <div className="">
                <p class="lead card-text">
                  Wharf Street Strategies provides blockchain based services to
                  start-ups and businesses aiding them with end-to-end solutions
                  i.e. ideation to project delivery. I worked as a MEAN Stack
                  developer and worked on a few projects and helped in others.
                </p>
              </div>
            </div>
            <div class="col-md-5 d-flex justify-content-center order-md-1">
              <img className="img-fluid" src="/Images/wss.png" alt="" />
            </div>
          </div>
          <hr class="featurette-divider"></hr>
          {/* card - 4 */}
          <div class="row featurette mx-md-10" style={{ margin: "0px 50px" }}>
            <div class="d-flex flex-column align-self-center col-md-7 order-md-2">
              <div className="">
                <h2 class="featurette-heading">
                  Public Relation Head : SIGMA XI
                </h2>
                <h6 class="text-muted featurette-heading">
                  March/2017 - March/2018
                </h6>
              </div>
              <div className="">
                <p class="lead card-text">
                  Wharf Street Strategies provides blockchain based services to
                  start-ups and businesses aiding them with end-to-end solutions
                  i.e. ideation to project delivery. I worked as a MEAN Stack
                  developer and worked on a few projects and helped in others.
                </p>
              </div>
            </div>
            <div class="col-md-5 d-flex justify-content-center order-md-1">
              <img className="img-fluid" src="/Images/sigma.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
