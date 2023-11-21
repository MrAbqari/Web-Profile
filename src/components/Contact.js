import React from "react";
import Ig from "../Images/Instagram.png";
import Fb from "../Images/facebook.png";
import Tiktok from "../Images/tiktok.png";
import Gh from "../Images/github.png";
import LI from "../Images/LinkedIn.png";
import "./Custom.css";

function Contact() {
  return (
    <div id="Contact">
      <div id="ContactForm" className="profile-card">
        <div className="BukuTamu">
          <h2>Form Buku Tamu</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Nama:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <br />
        <h2 style={{ textAlign: "center" }}>Contact</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 10px",
          }}
        >
          <a
            style={{ marginRight: "30px" }}
            href="https://www.instagram.com/mr.abqarii/?next=%2F&hl=id"
          >
            <img
              style={{ height: "auto", width: "40px" }}
              src={Ig}
              alt="Instagram Riza"
            />
          </a>
          <a
            style={{ marginRight: "30px" }}
            href="https://www.facebook.com/riza.abqari.7"
          >
            <img
              style={{ height: "auto", width: "40px" }}
              src={Fb}
              alt="Facebook Riza"
            />
          </a>
          <a
            style={{ marginRight: "30px" }}
            href="https://www.tiktok.com/@mr.abqarii?_t=8fiwEtOtmK8&_r=1"
          >
            <img
              style={{ height: "auto", width: "40px" }}
              src={Tiktok}
              alt="Tiktok Riza"
            />
          </a>
          <a style={{ marginRight: "30px" }} href="https://github.com/MrAbqari">
            <img
              style={{ height: "auto", width: "40px" }}
              src={Gh}
              alt="github Riza"
            />
          </a>
          <a
            style={{ marginRight: "30px" }}
            href="https://www.linkedin.com/in/muhammad-riza-abqari/"
          >
            <img
              style={{ height: "auto", width: "40px" }}
              src={LI}
              alt="LinkedIn Riza"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
