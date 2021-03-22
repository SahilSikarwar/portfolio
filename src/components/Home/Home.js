import React from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Hobbies from "../Hobbies/Hobbies";
import Projects from "../Projects/Projects";
import "./Home.css";

function Home() {
  return (
    // Heading
    <div className="">
      <div className="jumbotron py-4">
        <div className="">
          <h1 className="display-3 text-center">The Modern Witcher</h1>
        </div>

        {/* Main content */}

        {/* Introduction card */}
        <div className="d-flex justify-content-center">
          {/* <div className="col-1"></div> */}
          <div className="">
            <div class="card mb-3" style={{ maxWidth: "1200px" }}>
              <div class="row g-0">
                <div class="d-flex justify-content-center align-self-center col-lg-4">
                  <img
                    className="img-fluid"
                    src="/Images/sahil.jpg"
                    alt="..."
                  />
                </div>
                <div class="col-lg-8">
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
                    <p className="fs-4 card-text">
                      <p>
                        My name is Sahil Sikarwar. I am a JavaScript &
                        BlockChain Developer, Cyber Security & Network
                        enthusiast, Extrovert, Writer, Gamer & a Gym freak. I
                        look up to my Father and the Geralt of Rivia (The
                        Witcher) as my idol. A man needs a great character and a
                        good set of principles. I got my character from my dad
                        and my principles from the Witcher.
                      </p>
                      <p>
                        With the right set of Bros and a dog by your side, you
                        can achieve anything. I love to Read books and play
                        games in my spare time.
                      </p>
                      <p>
                        I want to be a great Cyber Security Engineer. But
                        honestly... give me a house near a beach and thats
                        heaven for me. ;)
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-1"></div> */}
        </div>
      </div>
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

export default Home;
