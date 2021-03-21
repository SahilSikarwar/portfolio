import React from "react";
import "./Home.css";

function Home() {
  return (
    // Heading
    <div className="jumbotron py-4">
      <div className="container">
        <h1 className="display-3 text-center">The Modern Witcher</h1>
      </div>

      {/* Main content */}

      {/* Introduction card */}
      <div className="row my-4">
        <div className="col-2"></div>
        <div className="col-8">
          <div class="card mb-3" style={{ maxWidth: "1200px" }}>
            <div class="row g-0">
              <div class="d-flex align-self-center col-md-4">
                <img className="img-fluid" src="/Images/sahil.jpg" alt="..." />
              </div>
              <div class="col-md-8">
                <div class=" card-body">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                      <h3>
                        “If a man knows not to which port he sails, no wind is
                        favorable.”
                      </h3>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                      <cite title="Source Title">Seneca</cite>
                    </figcaption>
                  </figure>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    officiis quasi ipsa animi soluta iusto, quia accusamus in
                    ipsam! Dolore, tempore quis eaque optio amet recusandae
                    temporibus quibusdam esse blanditiis! Beatae id obcaecati
                    numquam saepe commodi praesentium! Suscipit totam,
                    consequuntur cum a maxime beatae nobis earum ex facere
                    ratione ullam dignissimos nostrum voluptas sapiente
                    explicabo possimus dolores nesciunt pariatur omnis. Tenetur
                    vitae ipsam libero unde nostrum quasi voluptates, at quaerat
                    veniam, odio eius! Doloremque minima aliquid eligendi enim
                    ex porro doloribus in maiores nulla praesentium adipisci
                    quis dolorem, officia totam. Provident exercitationem
                    laborum, suscipit a laudantium enim dolorem possimus quo
                    sapiente placeat, optio error voluptas. Explicabo
                    perferendis minima quos tempora sequi autem dicta ea
                    laudantium cupiditate earum! Ut, voluptatem harum? Dolore
                    odio eaque facere animi consequuntur eveniet accusantium
                    sint inventore sit qui? Quae iste cupiditate eaque esse
                    aperiam sed recusandae magni aliquid, assumenda, dolorum
                    eius id in dolorem ut! Obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Home;
