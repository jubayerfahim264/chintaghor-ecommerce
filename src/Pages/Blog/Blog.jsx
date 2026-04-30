import { useEffect, useState } from "react";
import BlogCarousel from "./Carousel/Carousel";
import "./Blog.css";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router";

const Blog = () => {
  const [todayBlog, setTodayBlog] = useState([]);
  const [horizontalBlog, setHorizontalBlog] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);
  const [travel, setTravel] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodayBlog(data));
  }, []);
  // =-==================
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHorizontalBlog(data));
  }, []);
  // =-==================
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLifeStyle(data));
  }, []);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTravel(data));
  }, []);

  return (
    <>
      <BlogCarousel />
      <div className="container my-4 border-bottom">
        <h4 className="blogTitle">Today's Highlight</h4>
        <div className="row">
          {todayBlog.slice(0, 2).map((blog, index) => (
            <div className="col-md-5" key={index}>
              <Card className="border-0 ">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="none"
                />
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading size="md" className="title">
                      <Link className="title" to={`/blog/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </Heading>
                    <Text className="desc">{blog.body}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        {/* ===========horizontalBlog=========== */}
        {horizontalBlog.slice(3, 6).map((blog, index) => (
          <>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
              className="my-3 ">
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src="https://preview.colorlib.com/theme/content/images/slider_1.jpg"
                alt="Caffe Latte"
              />
              <Stack>
                <CardBody>
                  <Heading size="md" className="title">
                    <Link className="title" to={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </Heading>

                  <Text className="desc">{blog.body}</Text>
                </CardBody>
              </Stack>
            </Card>
          </>
        ))}
        {/* ============================= */}
        <div className="row my-3">
          {/* =============Life style=============== */}
          <div className="col-md-6">
            <h2 className="lifeStyle-Travel">Life Style</h2>
            {lifeStyle.slice(7, 10).map((blog) => (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                key={blog.id}
                className="my-3 ">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://preview.colorlib.com/theme/content/images/slider_1.jpg"
                  alt="Caffe Latte"
                />
                <Stack>
                  <CardBody>
                    <Heading size="md" className="title">
                      <Link className="title" to={`/blog/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </Heading>

                    <Text className="desc">{blog.body}</Text>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </div>
          {/* ==================Travel============ */}
          <div className="col-md-6">
            <h2 className="lifeStyle-Travel">Travel</h2>
            {travel.slice(10, 13).map((blog) => (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                key={blog.id}
                className="my-3">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://preview.colorlib.com/theme/content/images/slider_1.jpg"
                  alt="Caffe Latte"
                />
                <Stack>
                  <CardBody>
                    <Heading size="md" className="title">
                      <Link className="title" to={`/blog/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </Heading>

                    <Text className="desc">{blog.body}</Text>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
