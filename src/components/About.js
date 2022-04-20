import React from "react";

function About() {
  return (
    <div>
      <div id="about" style={{ height: 50 + "px" }}></div>
      <div className="conten mt-5 container text-center shadow bg-body rounded">
        <h1>About Me</h1>
        <section className="section about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-start">HTML5</div>
                    <div className="text-end">95%</div>
                    <div className="progress prog">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: 95 + "%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        95%
                      </div>
                    </div>
                    <div className="text-start">CSS</div>
                    <div className="text-end">75%</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: 75 + "%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                    <div className="text-start">JAVASCRIPT</div>
                    <div className="text-end">80%</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        80%
                      </div>
                    </div>
                    <div className="text-start">REACT</div>
                    <div className="text-end">85%</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: 85 + "%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                    <div className="text-start">VUE</div>
                    <div className="text-end">80%</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: 80 + "%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        95%
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5">
                    <p className="lead about" style={{ textAlign: "justify" }}>
                      My passion for problem solving and software has
                      facilitated my interest in web development (the beginning
                      of my love and curiosity for current technology). It is a
                      big part of my dreams to improve myself in the software
                      field and become a software master in the future,
                      considering that any challenge is the beginning of
                      success.
                    </p>
                    <p className="lead about" style={{ textAlign: "justify" }}>
                      Skilled Front End Developer with more than 1+ of extensive
                      experience in Web Applications Development with a desire
                      to learn and master software architecture. I am eager to
                      analyze and solve real- life problems with the software,
                      preferably using the latest technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
