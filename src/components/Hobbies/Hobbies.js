import React from "react";

function Hobbies() {
  return (
    <div>
      <div className="experience">
        <div className="container jumbotron py-4">
          <div className="">
            <h1 className="display-3 text-center">Quests</h1>
          </div>

          {/* card section */}
          <div class="py-4 row">
            <div class="col-sm-6">
              <div class="card border shadow-md h-250 d-flex align-self-start">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
