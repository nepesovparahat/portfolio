import React from "react";

function Contact() {
  return (
    <div className="container mb-5 mt-5 shadow bg-body rounded" id="contact">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h1>Contact</h1>
          </div>
          <div className="contact-mf align-items-center">
            <div id="contact" className="box-shadow-full ml-5">
              <div className="row">
                <div className="col-md-10">
                  <div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Write something here..."
                          required
                          defaultValue={""}
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary button-rouded"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
