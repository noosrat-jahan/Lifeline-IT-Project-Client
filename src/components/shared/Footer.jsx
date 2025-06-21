import React from "react"
import "../../Footer.css"
import { Link } from "react-router-dom"
import mainlogo from "../../assets/mainlogo.png"
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="container">
          <div class="footer-grid">
            {/* <!-- Column 1 --> */}
            <div class="footer-column">
              <img src={mainlogo} alt="" width="300px" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                quos enim soluta voluptatum officiis alias commodi velit
                quaerat, blanditiis quo.
              </p>

              <div class="social-links">
                <Link to="#" class="social-link" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" class="social-link" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link to="#" class="social-link" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="#" class="social-link" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#" class="social-link" aria-label="YouTube">
                  <i class="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            {/* <!-- Column 2 - --> */}
            <div class="footer-column">
              <h3>Navigation</h3>
              <ul class="footer-links">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">services</Link>
                </li>
                <li>
                  <Link to="#">Courses</Link>
                </li>
                <li>
                  <Link to="#">Tecnologies</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </div>

            {/* <!-- - Contact --> */}
            <div class="footer-column">
              <h3>Contact</h3>

              <div class="contact-info">
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>
                    123 Rue du Bien-être
                    <br />
                    75000 Paris, France
                  </span>
                </div>

                <div class="contact-item">
                  <i class="fas fa-phone-alt"></i>
                  <span>
                    +33 1 23 45 67 89
                    <br />
                    Lun-Ven, 9h-18h
                  </span>
                </div>

                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <span>
                    contact@harmonie.com
                    <br />
                    support@harmonie.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright">
            <p>
              2025 &copy;
              <script>document.write(new Date().getFullYear());</script>
              All rights reserved |{" "}
              <Link to="#">LifeLine IT Training Institue</Link>
            </p>
          </div>
        </div>
      </footer>
      <div class="developer">
        Developed by{" "}
        <Link to="" target="_blank">
          Proxima IT
        </Link>
      </div>
    </div>
  )
}

export default Footer
