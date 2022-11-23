import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { deleteProduct, plusProduct, prevProduct } from "../../redux/actition/countProduct";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState(0);

  const [quantity, setQuantity] = useState(cartItem.__v);

  useEffect(() => {
    setSubTotal(cartItem.price * quantity);

  }, [quantity, cartItem]);
  
  const plusQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(plusProduct(cartItem))
  };

  const prevQuantity = () => {
    setQuantity(quantity - 1);
    dispatch(prevProduct(cartItem))

    if (quantity < 2) {
      setQuantity(1);
    }
  };

  return (
    <tr key={cartItem._id} id={styles.cartItem}>
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
        <button onClick={() => prevQuantity()}>-</button>
        <span id={styles.quantity}>{quantity}</span>
        <button onClick={() => plusQuantity()}>+</button>
      </td>
      <td id={styles.subTotal}>
        <i className="fa-solid fa-dollar-sign"></i>
        {subTotal}
      </td>
    </tr>
  );
}
