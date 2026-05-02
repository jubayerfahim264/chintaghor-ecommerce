import "./Shop.css";
import SliderPage from "../Blog/Carousel/Carousel";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import MenuShop from "./MenuShop";
import Popular from "./Popular";

const Shop = (props) => {
  const newArrived = [
    {
      id: "newproducts001ebook",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      title: "Atomic Habits",
      price: 450,
      qty: 1,
    },
    {
      id: "newproducts002ebook",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
      title: "Rich Dad Poor Dad",
      price: 500,
      qty: 1,
    },
    {
      id: "newproducts003ebook",
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      title: "The Psychology of Money",
      price: 550,
      qty: 1,
    },
    {
      id: "newproducts004ebook",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
      title: "Think and Grow Rich",
      price: 600,
      qty: 1,
    },
    {
      id: "newproducts005ebook",
      img: "https://template-kit.ancorathemes.com/blog-for-life/wp-content/uploads/sites/13/2020/06/the-tonik-4x1AyuOTIgo-unsplash-450x450.jpg?w=400",
      title: "Deep Work",
      price: 650,
      qty: 1,
    },
    {
      id: "newproducts006ebook",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
      title: "Start With Why",
      price: 700,
      qty: 1,
    },
  ];
  // ==========================================================//

  return (
    <>
      <SliderPage />
      <div className="container my-3">
        <h4 className="NewArrived text-center">New Arrived</h4>
        <div className="row">
          {newArrived.map((pd) => (
            <div className="col-md-4 my-2" key={pd.id}>
              <Card className="text-center">
                <CardBody>
                  <Image
                    src={pd.img}
                    alt={pd.id}
                    borderRadius="md"
                    style={{ height: 190, width: "100%", objectFit: "cover" }}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" className="Shopheading">
                      {pd.title}
                    </Heading>

                    <Text color="blue.600" className="price">
                      ${pd.price}
                    </Text>
                  </Stack>

                  <Button
                    rightIcon={<ShoppingCart />}
                    className="shopBtn"
                    onClick={() => props.handleAddCart(pd)}>
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        <MenuShop />
        <Popular handleAddCart={props.handleAddCart} />
      </div>
    </>
  );
};

export default Shop;
