import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { deleteProduct } from "../../redux/actition/countProduct";

export default function CartItem({ cartItem, valueTotal }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    valueTotal(cartItem.price * quantity)
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const prevQuantity = () => {
    setQuantity(quantity - 1);

    if (quantity < 2) {
      setQuantity(1);
    }
  };

  return (
    <tr key={cartItem._id}>
      <td>
        <div
          className={styles.deleteProduct}
          onClick={() => dispatch(deleteProduct(cartItem._id))}
        >
          x
        </div>
      </td>
      <td>
        <img src={cartItem.img} alt="product" />
      </td>
      <td>{cartItem.name}</td>
      <td>
        <i className="fa-solid fa-dollar-sign"></i>
        {cartItem.price}
      </td>
      <td>
        <button onClick={prevQuantity}>-</button>
        <span id={styles.quantity}>{quantity}</span>
        <button onClick={plusQuantity}>+</button>
      </td>
      <td id={styles.subTotal} onClick={handleChange}>
        <i className="fa-solid fa-dollar-sign"></i>
        {cartItem.price * quantity}
      </td>
    </tr>
  );
}
