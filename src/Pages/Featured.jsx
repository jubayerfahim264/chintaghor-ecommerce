import { Button, Input } from "@chakra-ui/react";
import { Link } from "react-router";

const featured = [
  {
    id: 1,
    name: "React Landing Page Template",
    image:
      "https://img.magnific.com/premium-photo/animal-cognition-with-fade-out-image-effects-card-layout-wild-animals-pets-web-layout-idea_1020495-653574.jpg",
    price: 700,
  },
  {
    id: 2,
    name: "Admin Dashboard Template",
    image:
      "https://img.magnific.com/premium-psd/modern-saas-crm-admin-panel-ui-kit-ai-analytics-customer-management-dashboard_540486-4348.jpg",
    price: 900,
  },
  {
    id: 3,
    name: "Web Development eBook",
    image:
      "https://img.magnific.com/free-psd/software-engineer-poster-template-design_23-2151856374.jpg",
    price: 500,
  },
];

const blogPost = [
  {
    id: 1,
    title: "নতুন স্কিল শিখে মাঝপথে কেন থেমে যান? সমাধান জানুন.",
    editiion: "Edition 291",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrGrJ3YXQjjpkTASUSfW6WVUC5DpdZE9Iqw&s",
    auth: "Programming Hero",
    written: "Written by",
  },
  {
    id: 2,
    title: "শুরু থেকে স্কিল গ্রোথ—সঠিকভাবে এগোনোর সম্পূর্ণ গাইড",
    editiion: "Edition 292",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqODr_wTIQsvDCsrQIUns9FA82u-925jz8w&s",
    auth: "Bohubrihi.com",
    written: "Written by",
  },
];

const Featured = () => {
  return (
    <>
      <div className="container">
        <h4 className="featuredHeadline">
          সাফল্যের পথে এগোতে জ্ঞান ও দক্ষতা ঠিক ততটাই জরুরি, যতটা গাছের জন্য
          পানি ও রোদ।
        </h4>
        <div className="row">
          <div className="col-md-3">
            <div className="featuredCard">
              <h3 className="featuredCardTitle">Featured</h3>
              <p>
                আমাদের সব ডিজিটাল প্রোডাক্ট ১০০% অরিজিনাল ও মানসম্মত কোনো কপি বা
                নিম্নমানের কনটেন্ট ব্যবহার করা হয় না—শুধু প্রিমিয়াম রিসোর্স
              </p>
              <Button className="shadow-sm">
                <a href="/shop">সব প্রোডাক্ট দেখুন</a>
              </Button>
            </div>
          </div>
          {featured.map((item) => (
            <div className="col-md-3 my-3" key={item.id}>
              <div className="featuredCard">
                <img src={item.image} alt={item.name} className="img-fluid" />
                <h3 className="itemsName">{item.name}</h3>
                <h1>{item.price} ৳</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ================== */}
      <div className="row my-5">
        {blogPost.map((blog, index) => (
          <div className="col-md-6 my-3" key={index}>
            <div className="blogCard">
              <div className="imgDivBx">
                <img src={blog.img} alt={blog.title} />
                <p className="imgPara">
                  <span className="write">{blog.written}</span>
                  <span className="writer">{blog.auth}</span>
                </p>
              </div>
              <p className="edition">{blog.editiion}</p>
              <h3 className="blogHeadline">
                <Link to="/blog">{blog.title}</Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* =================== */}
      <div className="newsLetter my-3">
        <h4>Get 15% off your next order, Subscribe to our Newsletter</h4>
        <div className="inputDiv">
          <Input type="email" placeholder="Enter your email here" />
          <Button>
            <a href="#">Subscribe</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Featured;
