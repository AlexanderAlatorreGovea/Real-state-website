import React from "react";

import Header from "./Header";
import MapContainer from "./MapContainer";

import "./sass/AboutUs.scss";

function AboutUs() {
  return (
    <div className="about-us">
      <Header />
      <div className="form">
        <div className="contact-form">
          <div className="get-in-touch animated fadeInUp">Get in touch</div>
          <span className="line"></span>
          <div className="first-container">
            <form id="contact" action="#" method="post">
              <div className="left">
                <div>
                  <label>
                    Name <strong style={{ color: "red" }}>*</strong>
                  </label>
                  <input type="text" placeholder="name" required="required" />
                  <label>
                    Email <strong style={{ color: "red" }}>*</strong>
                  </label>
                  <input type="email" placeholder="email" required="required" />
                </div>
                <div>
                  <label>
                    Subject <strong style={{ color: "red" }}>*</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="subject"
                    required="required"
                  />
                  <label>
                    Phone <strong style={{ color: "red" }}>*</strong>
                  </label>
                  <input type="text" placeholder="phone" required="required" />
                </div>
              </div>
              <div className="right">
                <label>
                  Message <strong style={{ color: "red" }}>*</strong>
                </label>
                <textarea placeholder="message" required="required"></textarea>
              </div>
              <span className="required-fields">
                All fields marked (<strong style={{ color: "red" }}>*</strong>)
                are required
              </span>
              <div className="send-button cl">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-form-info">
          <div class="social-container">
            <ul class="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-instagram animated fadeInUp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter animated fadeInUp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin animated fadeInUp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-codepen animated fadeInUp"></i>
                </a>
              </li>
            </ul>
          </div>
          <span className="line" id="line"></span>
          <h3 className="top-title animated fadeInUp">
            Interested in working with us?
          </h3>
          <p>
            If you'd like to talk to us about a project or receive a quote, get
            in touch!
          </p>
          <h3 className="animated fadeInUp">Email Address</h3>
          <p>alexander_alatorre@hotmail.com</p>
          <h3 className="animated fadeInUp">Address</h3>
          <p>Portland House</p>
          <p>Bredessen Place</p>
          <p>Ventura, CA 93117</p>
          <br />
          <p>REACTREALTORS Limited is registerd in Oxnard</p>
          <p>and Ventura Company No. 1256831</p>
          <p>VAT registration no. 1098032</p>
        </div>
      </div>
      <div className="map">
        <MapContainer />
      </div>
      <div className="contact">
        <div className="contact-info">
          <h2 className="wow fadeInUp">TELEPHONE</h2>
          <h1>+44 (0) 20 908 9089 1184</h1>
        </div>
        <div className="contact-info">
          <h2 className="wow fadeInUp">EMAIL</h2>
          <h1 style={{ color: "#e74c3c" }}>alexander_alatorre@hotmail.com</h1>
        </div>
        <div className="contact-info">
          <h2 className="wow fadeInUp">ADDRESS</h2>
          <h1>J Street</h1>
          <h1>Ventura County</h1>
          <h1>Oxnard CA, 93033</h1>
        </div>
        <div className="contact-info">
          <h2 className="wow fadeInUp">PROJECT INQUIRY</h2>
          <h1>Want to talk to us about</h1>
          <h1>a project?</h1>
          <h1>
            Contact us <a style={{ color: "#e74c3c" }}>here</a>
          </h1>
        </div>
      </div>
      <footer>
        <div className="social-media">
          <div>
            <i class="fab fa-facebook-f"></i>
            <span className="wow fadeInUp">Facebook</span>
          </div>
          <div>
            <i class="fab fa-twitter"></i>
            <span className="wow fadeInUp">Twitter</span>
          </div>
          <div>
            <i class="fab fa-linkedin-in"></i>
            <span className="wow fadeInUp">Linkedin</span>
          </div>
          <div>
            <i class="fab fa-google-plus-g"></i>
            <span className="wow fadeInUp">Google</span>
          </div>
        </div>
        <div className="all-rights">
          <h4 style={{ letterSpacing: "1px", color: "#808080" }}>
            &copy; Alexander Govea Ltd. All Rights Reserved
          </h4>
          <strong style={{ letterSpacing: "1px" }}>
            Privacy Policy. Contact. Work for us
          </strong>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
