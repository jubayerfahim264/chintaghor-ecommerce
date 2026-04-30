import { Clock9, Mail, MapPin, Phone } from "lucide-react";
import "./ContactStyles.css";
import { Input, Stack, Textarea } from "@chakra-ui/react";

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
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="contactIconCard">
              <div className="iconBx">
                <Mail size={42} />
              </div>
              <h4>Email</h4>
              <p>support@example.com</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contactIconCard">
              <div className="iconBx">
                <Phone size={42} />
              </div>
              <h4>Phone</h4>
              <p>(+88)01306-952094</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contactIconCard">
              <div className="iconBx">
                <MapPin size={42} />
              </div>
              <h4>Address</h4>
              <p>82 12th Street, Office 14</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contactIconCard">
              <div className="iconBx">
                <Clock9 size={42} />
              </div>
              <h4>Office Hours</h4>
              <p>Mon-Fri: 9am to 5pm</p>
            </div>
          </div>
        </div>
        {/* ====================== */}
        <div className="contactInput">
          <h2>How We Can Help You?</h2>
          <Stack spacing={4} direction={"row"}>
            <Input placeholder="John Doe...." />
            <Input placeholder="example@company.com" />
          </Stack>
          <Textarea placeholder="Write something...." />
          <button className="contactBtn">Send Query</button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
