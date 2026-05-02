/* eslint-disable react-hooks/set-state-in-effect */
import CartSummary from "./CartSummary";
import { Trash2, ShoppingBag, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import CouponBox from './CouponBox';
import Payment from "./Payment/Payment";
import "./checkout.css";
import "./cart-mobile.css";
import { Button } from "@headlessui/react";
import ModalComponent from "./Modal";
import { useDisclosure } from "@chakra-ui/react";

const COUPONS = {
  SAVE10: { type: "pct", val: 10 },
  VIP20: { type: "pct", val: 20 },
  FLAT50: { type: "amt", val: 50 },
  EIDOFFER: { type: "pct", val: 40 },
};

const Checkout = (props) => {
  const { addToCart, handleRemove } = props;
  const [checkOut, setCheckOut] = useState([]);
  const [coupon, setCoupon] = useState(null);
   const { isOpen, onOpen, onClose } = useDisclosure(); 

  useEffect(() => {
    setCheckOut(addToCart);
  }, [addToCart]);

  const subTotal = checkOut.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const discount =
    coupon?.type === "pct"
      ? subTotal * (coupon.val / 100)
      : coupon?.type === "amt"
        ? coupon.val
        : 0;

  const total = subTotal - discount;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        {/* Header */}
        <div className="checkout-header">
          <div className="checkout-icon">
            <ShoppingBag size={28} />
          </div>
          <h1 className="checkout-title">Complete Your Order</h1>
          <p className="checkout-subtitle">
            Review your items and proceed to payment
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="checkout-grid">
          {/* Left: Products */}
          <div className="checkout-products">
            <div className="products-header">
              <h2 className="products-title">
                Order Items ({checkOut.length})
              </h2>
            </div>

            {checkOut.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="products-list">
                {checkOut.map((item) => (
                  <div className="product-item" key={item.id}>
                    <div className="product-image">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="item-image"
                      />
                      <div className="qty-badge">{item.qty}</div>
                    </div>

                    <div className="product-details">
                      <h3 className="product-name">{item.title}</h3>
                      <div className="product-info">
                        <span className="product-price">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="product-qty">x{item.qty}</span>
                      </div>
                      <div className="product-total">
                        Total:{" "}
                        <strong>${(item.price * item.qty).toFixed(2)}</strong>
                      </div>
                    </div>

                    <button
                      className="remove-item-btn"
                      onClick={() => handleRemove(item.id)}
                      title="Remove item">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Payment Section */}
          <div className="checkout-sidebar">
            {/* Payment Method */}
            <div className="checkout-section">
              <h3 className="section-title">
                <CheckCircle size={18} />
                Payment Method
              </h3>
              <Payment />
            </div>

            {/* Coupon */}
            <div className="checkout-section">
              <h3 className="section-title">Promo Code</h3>
              <CouponBox setCoupon={setCoupon} coupons={COUPONS} />
            </div>

            {/* Order Summary */}
            <CartSummary subTotal={subTotal} discount={discount} total={total}>
              <Button
                className="place-order-btn checkout-button-link"
                disabled={checkOut.length === 0}
                onClick={() => {
                  // Clear localStorage cart
                  localStorage.removeItem("cart");
                  // Reset cart state
                  setCheckOut([]);
                  setCoupon(null);
                  // Show success modal
                  onOpen();
                }}>
                <span>Place Order</span>
                <span className="btn-amount">${total.toFixed(2)}</span>
              </Button>
            </CartSummary>
          </div>
        </div>
      </div>
      <ModalComponent isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Checkout;
