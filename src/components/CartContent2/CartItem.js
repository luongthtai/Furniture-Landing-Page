import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { deleteProduct } from "../../redux/actition/countProduct";

export default function CartItem({ cartItem, price }) {
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState(0);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSubTotal(cartItem.price * quantity);

  }, [subTotal, quantity, cartItem, price]);
  
  price(subTotal)
  
  const plusQuantity = (value) => {
    setQuantity(quantity + 1);
  };

  const prevQuantity = (value) => {
    setQuantity(quantity - 1);

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
        <button onClick={() => prevQuantity(subTotal)}>-</button>
        <span id={styles.quantity}>{quantity}</span>
        <button onClick={() => plusQuantity(subTotal)}>+</button>
      </td>
      <td id={styles.subTotal}>
        <i className="fa-solid fa-dollar-sign"></i>
        {subTotal}
      </td>
    </tr>
  );
}
