import React from "react";

const ContactForm = () => {
    return (

        <div className="tb-section padding-top-xlg-150 padding-bottom-xlg-150 padding-left-sm-3-p padding-right-sm-3-p bg-white-accent-3">
          <div className="tb-section-inner tb-wrap max-width-900">
            <div className="tb-heading tb-heading-lg margin-bottom-10-p anim-fadeinup">
              <h3 className="tb-heading-subtitle text-gray">Get in Touch</h3>
              <h2 className="tb-heading-title">Drop Us<br /> a Line</h2>
            </div>
            <form action="https://formsubmit.co/business@thebaton.in" className="tb-form-lg tb-form-minimal tb-hide-labels anim-fadeinup" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.thebaton.in/" />
              <div className="tb-row">
                <div className="tb-col-md-6">
                  <div className="tb-form-group">
                    <label>Name</label>
                    <input className="tb-form-control" type="text" name="Name" placeholder="Enter your name" required />
                  </div>
                </div> {/* /.tb-col */}
                <div className="tb-col-md-6">
                  <div className="tb-form-group">
                    <label>Email address</label>
                    <input className="tb-form-control" type="email" name="email" placeholder="Email Address" required />
                  </div>
                </div> {/* /.tb-col */}
              </div> {/* /.tb-row */}
              <div className="tb-form-group">
                <label>Subject</label>
                <input className="tb-form-control" type="text" name="Subject" placeholder="Subject" required />
              </div>
              <div className="tb-form-group">
                <label>Select an option</label>
                <select className="tb-form-control" name="Option" required>
                <option value disabled selected>Please choose an option</option>
                <option value="Say Hello">Say hello</option>
                <option value="New Project">New project</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
                </select>
            </div>
              <div className="tb-form-group">
                <label>Message</label>
                <textarea className="tb-form-control" rows={7} name="Message" placeholder="What's in your mind?" required defaultValue={""} />
                <small className="tb-form-text"><em>* All fields are required!</em></small>
              </div>
              <div className="tb-btn tb-btn-dark-outline">
                <button type="submit" data-hover="Send Message">Send Message</button>
              </div>
            </form>
          </div> {/* /.tb-section-inner */}
        </div>
      );
};

export default ContactForm;