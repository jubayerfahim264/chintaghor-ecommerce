import { Link } from "react-router";

const MenuShop = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="menuShopContent">
              <h2 className="menuHeading">
                Creative Designs Brand Identity and Packaging
              </h2>
              <p>
                একটি আধুনিক ডিজিটাল মার্কেটপ্লেস যেখানে আপনি শিখতে পারবেন, তৈরি
                করতে পারবেন এবং আয় করতে পারবেন প্রিমিয়াম ইবুক, টেমপ্লেট এবং
                কোর্স—সব এক জায়গায়।
              </p>
              <button className="menuBtn"><Link>Read More</Link></button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menuShop">
              <img
                src="https://template-kit.ancorathemes.com/blog-for-life/wp-content/uploads/sites/13/2020/06/laurice-manaligod-i7uV0Q8tJ48-unsplash-1-scaled-e1592241323351.jpg"
                alt=""
                className="img-fluid"
                style={{ height: 400, width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuShop;
