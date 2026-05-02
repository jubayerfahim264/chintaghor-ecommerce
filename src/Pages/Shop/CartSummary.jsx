import "./cart.css"
const CartSummary = (props) => {
  const { subTotal, discount, total } = props;
  return (
    <div className="checkout-section summary-card">
      <p className="summary-title">Order Summary</p>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>

     
        <div className="summary-row accent">
          <span>Discount</span>
        {
            discount > 0 ? (
                <span>-${discount.toFixed(2)}</span>
            ) : (
                <span>$0.00</span>
            )
         }
        </div>
     

      <div className="summary-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      {props.children}
    </div>
  );
};

export default CartSummary;
