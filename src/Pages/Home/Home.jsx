import { Button } from "@chakra-ui/react";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-2">
            <div className="pdTitle">
              <h2>আপনার সাফল্যের জন্য সেরা ডিজিটাল প্রোডাক্ট</h2>
              <p>
                ক্রিয়েটর ও ডেভেলপারদের জন্য তৈরি শক্তিশালী ইবুক, টেমপ্লেট ও
                কোর্স
              </p>
              <Button
                bg="#000000"
                borderColor="#ccd0d5"
                color="#ffffff"
                _hover={{ bg: "gray.500" }}
                size="md"
                className="mt-4 rounded-0 w-full">
                <Link to="/shop"> Shop Now</Link>
              </Button>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="imgDiv">
              <img
                src="https://img.magnific.com/free-vector/graphic-design-courses-isometric-concept-with-computer-tablet-planner-money-swatches-3d-vector-illustration_1284-30002.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* =============================== */}
        <Categories />
        {/* ========================== */}
        {/* =============================== */}
        <Featured />
        {/* ========================== */}
      </div>
    </>
  );
};

export default Home;
