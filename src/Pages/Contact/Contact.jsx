import { Mail } from "lucide-react";
import "./ContactStyles.css";

const ContactPage = () => {
  return (
    <>
      <div className="contactHero">
        {/* Overlay Background */}
        <div className="heroBg"></div>

        {/* Content */}
        <div className="heroContent">
          <h2 className="heroTitle">Get in touch</h2>
          <p className="heroSubtitle">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="contactIconCard">
              <div className="iconBx">
                <Mail />
              </div>
              <h4>Email support@example.com</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contactIconCard"></div>
          </div>
          <div className="col-md-3">
            <div className="contactIconCard"></div>
          </div>
          <div className="col-md-3">
            <div className="contactIconCard"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
