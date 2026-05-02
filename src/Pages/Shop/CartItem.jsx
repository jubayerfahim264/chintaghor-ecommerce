import { Trash2 } from "lucide-react";
import "./cart.css";
import { Tr, Td } from "@chakra-ui/react";

const CartItem = (props) => {
  const { img, title, price, qty, id } = props.item;
  const { handleQty, handleRemove } = props;
  
  return (
    <Tr className="cart-item-row">
      <Td className="cart-td cart-img-cell">
        <div className="item-img-wrapper">
          <img
            src={img}
            alt={title}
            className="item-img"
          />
        </div>
      </Td>
      <Td className="cart-td cart-product-cell">
        <div className="item-info">
          <p className="item-title">{title}</p>
        </div>
      </Td>
      <Td className="cart-td cart-qty-cell">
        <div className="qty-control">
          <button 
            className="qty-btn" 
            onClick={() => handleQty(id, -1)}
            title="Decrease quantity"
          >
            −
          </button>
          <span className="qty-value">{qty}</span>
          <button 
            className="qty-btn" 
            onClick={() => handleQty(id, 1)}
            title="Increase quantity"
          >
            +
          </button>
        </div>
      </Td>
      <Td className="cart-td cart-price-cell">
        <div className="item-price">${(price * qty).toFixed(2)}</div>
      </Td>
      <Td className="cart-td cart-action-cell">
        <button
          className="remove-btn"
          onClick={() => handleRemove(id)}
          title="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </Td>
    </Tr>
  );
};

export default CartItem;
