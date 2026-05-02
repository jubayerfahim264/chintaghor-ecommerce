import { useState } from "react";
import "./cart.css";
import { useToast } from "@chakra-ui/react";
const CouponBox = ({ setCoupon, coupons }) => {
  const [code, setCode] = useState("");
  const toast = useToast();
  const applyCoupon = () => {
    const upper = code.toUpperCase();

    if (coupons[upper]) {
      setCoupon(coupons[upper]);
      toast({
        title: "Coupon Applied",
        description: `Coupon ${upper} applied successfully!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setCoupon(null);
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is not valid.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="coupon-wrap">
        <input
          className="coupon-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="VIP20"
        />
        <button onClick={applyCoupon}>Apply</button>
      </div>
    </>
  );
};

export default CouponBox;
