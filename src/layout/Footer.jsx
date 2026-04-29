import "./LayoutStyled.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-md-3">
            <div className="footerCard">
              <h2 className="chintaghor">Chintaghor</h2>
              <p>
                একটি আধুনিক ডিজিটাল মার্কেটপ্লেস যেখানে আপনি শিখতে পারবেন, তৈরি
                করতে পারবেন এবং আয় করতে পারবেন প্রিমিয়াম ইবুক, টেমপ্লেট এবং
                কোর্স—সব এক জায়গায়।
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footerCard">
              <h2 className="footerHeadline">Connect</h2>
              <ul>
                <li>
                  <a href="#">Instagram </a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Linkedine</a>
                </li>
                <li>
                  <a href="">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footerCard">
              <h2 className="footerHeadline">Resources</h2>
              <ul>
                <li>
                  <a href="#">Return Policy </a>
                </li>
                <li>
                  <a href="#">Track an Order</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footerCard">
              <h2 className="footerHeadline">About</h2>
              <ul>
                <li>
                  <a href="#">Our Story </a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
