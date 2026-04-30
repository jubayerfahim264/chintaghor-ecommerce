import "./Shop.css";
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Td,
  Thead,
  Tr,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router";
const Cart = (props) => {
  const AddedCart = props.addToCart;
  console.log(AddedCart);

  return (
    <>
      <div className="container my-5">
        <TableContainer className="border rounded">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>products</Th>
                <Th>price</Th>
                <Th>quantity</Th>
                <Th>SubTotal</Th>
              </Tr>
            </Thead>
            {AddedCart.map((cart) => (
              <Tbody key={cart.id}>
                <Tr>
                  <Td>
                    <img
                      src={cart.img}
                      alt=""
                      style={{ height: 60, width: 60 }}
                    />
                  </Td>
                  <Td>{cart.title}</Td>
                  <Td>
                    <NumberInput size="sm" maxW={32} defaultValue={0}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                  <Td>${cart.price}</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>

        <div className="row">
          <div className="col-md-6">
            <Link to="/shop">
              <Button colorScheme="teal" variant="outline" className="mt-3">
                Return to Shop
              </Button>
            </Link>
          </div>
          <div className="col-md-6 my-3">
            <Stack gap={0} direction={"row"}>
              <Input placeholder="Cuopon Code" rounded={0} />
              <Button rounded={0} bgColor={"orange.400"} paddingX={10}>
                Apply Coupon
              </Button>
            </Stack>
          </div>
        </div>
        <div className="cartTotal col-md-5">
          <h4
            style={{
              fontFamily: "Playfair Display",
            }}>
            Cart Total
          </h4>
          <ul>
            <li>
              <span>Product Price</span>
              <span>450</span>
            </li>
            <li>
              <span>Total</span>
              <span>450</span>
            </li>
          </ul>
          <Link>
            <Button
              rounded={0}
              colorScheme="teal"
              paddingX={10}
              style={{
                display: "flex",
                margin: "auto",
                fontFamily: "Playfair Display",
                fontSize: 18,
              }}>
              Procces to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
