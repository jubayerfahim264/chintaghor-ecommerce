import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const BlogDeatails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);
  console.log(blogDetails);

  return (
    <>
      <div className="container my-3 mx-auto">
        <Card className="m-auto">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{blogDetails.title}</Heading>
              <Text>
               {blogDetails.body}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default BlogDeatails;
