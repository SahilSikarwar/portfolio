import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="alt-gray">
        <div className="container jumbotron py-4">
          <div className="">
            <h1 className="display-3 text-center">Quests</h1>
          </div>
          {/* Card section */}

          <div class="row my-4 d-flex justify-content-center">
            <div class="col-xl-5 mx-2 bg-light">
              <div class="row no-gutters border rounded overflow-hidden flex-row mb-0 shadow-sm h-md-250 position-relative">
                <div class="col-12 p-4 d-flex flex-column position-static">
                  <strong class="fs-3 d-inline-block mb-2 text-cyan">
                    The Portfolio
                  </strong>
                  <p class="card-text mb-auto">
                    A Decentralize Identity management system where users can
                    create digital wallets and add their documents like Adhar
                    card. Other companies, with the help of the user's Wallet's
                    account address, can send request to access their documents.
                    Users can handle those requests as per the requirement.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-5 mx-2 bg-light">
              <div class="row no-gutters border rounded overflow-hidden flex-row mb-0 shadow-sm h-md-250 position-relative">
                <div class="col-12 p-4 d-flex flex-column position-static">
                  <strong class="fs-3 d-inline-block mb-2 text-orange">
                    Identity Management & Digital KYC
                  </strong>
                  <p class="mb-auto">
                    A Decentralize Identity management system where users can
                    create digital wallets and add their documents like Adhar
                    card. Other companies, with the help of the user's Wallet's
                    account address, can send request to access their documents.
                    Users can handle those requests as per the requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div class="row my-4 d-flex justify-content-center">
            <div class="col-xl-5 mx-2 bg-light">
              <div class="row no-gutters border rounded overflow-hidden flex-row mb-0 shadow-sm h-md-250 position-relative">
                <div class="col-12 p-4 d-flex flex-column position-static">
                  <strong class="fs-3 d-inline-block mb-2 text-danger">
                    Crowd Coin
                  </strong>
                  <p class="card-text mb-auto">
                    A Dapp where people can add their ideas/projects and others
                    and contribute money to it. (You become a contributor after
                    donating a threshold amount to the project owner). The owner
                    then can create a request for Crypto transaction and they
                    will only be able to do that after 51% approvals from the
                    contributors.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-5 mx-2 bg-light">
              <div class="row no-gutters border rounded overflow-hidden flex-row mb-0 shadow-sm h-md-250 position-relative">
                <div class="col-12 p-4 d-flex flex-column position-static">
                  <strong class="fs-3 d-inline-block mb-2 text-indigo">
                    Knowledge Center
                  </strong>
                  <p class="mb-auto">
                    Knowledge Center is an education platform where we can
                    upload differnt course material modules that will help
                    people to keep up with the upcoming technology, especially
                    BlockChain.
                  </p>
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

export default Projects;
