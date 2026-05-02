/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import "./cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import {
  Box,
  SkeletonCircle,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router";

const Cart = (props) => {
  const { addToCart, handleRemove } = props;
  const [cart, setCart] = useState([]);

  //Handle Updating Quantity
  const handleQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  // Sync cart state with parent addToCart prop
  useEffect(() => {
    setCart(addToCart);
  }, [addToCart]);
  // Cart Summery Data
  const subTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const total = subTotal;
  // ==========================================================//
  return (
    <>
      <div className="checkout-wrapper">
        <div className="container ">
          <div className="checkout-container">
            <h1 className="cart-header">
              Your Cart <span>({cart.length} items)</span>
            </h1>
            <div className="checkout-grid">
            {cart.length === 0 ? (
              <>
                <Box padding="6" boxShadow="lg" bg="white">
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              </>
            ) : (
              <>
                <TableContainer className="cart-table-container">
                  <Table variant="simple" className="cart-table">
                    <Thead className="cart-table-head">
                      <Tr className="cart-header-row">
                        <Th className="cart-th">Image</Th>
                        <Th className="cart-th">Product</Th>
                        <Th className="cart-th">Quantity</Th>
                        <Th className="cart-th">Price</Th>
                        <Th className="cart-th">Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody className="cart-table-body">
                      {cart.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          handleQty={handleQty}
                          handleRemove={handleRemove}
                        />
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </>
            )}
            <div className="checkout-sidebar">
              <CartSummary subTotal={subTotal} total={total}>
                <Link to="/checkout">
                  <button className="checkout-btn">Proceed to Checkout</button>
                </Link>
              </CartSummary>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
