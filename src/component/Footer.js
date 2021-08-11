function Footer() {

    return(
        <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack" />
              <span className="logo_name">App Name</span>
            </div>
            {/* <div className="media-icons">
              <a href="#footer"><i className="fab fa-facebook-f" /></a>
              <a href="#footer"><i className="fab fa-twitter" /></a>
              <a href="#footer"><i className="fab fa-instagram" /></a>
              <a href="#footer"><i className="fab fa-linkedin-in" /></a>
              <a href="#footer"><i className="fab fa-youtube" /></a>
            </div> */}
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="#">Home</a></li>
              <li><a href="#footer">Contact us</a></li>
              <li><a href="#footer">About us</a></li>
              <li><a href="#footer">Early Access</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#footer">Product Details</a></li>
              <li><a href="#footer">Integrations</a></li>
              <li><a href="#footer">Augmented Reality</a></li>
              {/* <li><a href="#">Banner design</a></li> */}
            </ul>
            {/* <ul className="box">
              <li className="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Prefrences</a></li>
              <li><a href="#">Pricing</a></li>
            </ul> */}
            {/* <ul className="box">
              <li className="link_name">Courses</li>
              <li><a href="#">HTML &amp; CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Photoshop</a></li>
            </ul> */}
            {/* <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" defaultValue="Subscribe" /></li>
            </ul> */}
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2021 <a href="#">Company Name</a>All rights reserved</span>
            <span className="policy_terms">
              <br/>
              <a href="#footer">Privacy policy</a>
              <a href="#footer">Terms &amp; conditions</a>
            </span>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;