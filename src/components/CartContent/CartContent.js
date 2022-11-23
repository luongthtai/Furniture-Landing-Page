import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actition/countProduct";
import styles from "./CartContent.module.scss";

export default function CartContent({ cartItems }) {
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState(0);

  const [totals, setTotals] = useState({
    shipping: "",
    totals: subTotal,
  });

  const [quantity, setQuantity] = useState(1);

  const isNext = (item) => {
    setQuantity(quantity + 1);
    console.log(item._id, quantity + 1);
  };

  useEffect(() => {
    var tien = 0;
    cartItems.map((item) => (tien += item.price));

    setSubTotal(tien * quantity);

    if (quantity < 2) {
      setQuantity(1);
    }

    setTotals({
      totals: subTotal,
    });
  }, [cartItems, subTotal, quantity]);

  const isPrev = (item) => {
    console.log(item._id, quantity);

    setQuantity(quantity - 1);
  };

  // const handleSubmit = (e) => {
  //   setTotals({
  //     totals: subTotal + Number(e.target.value),
  //     shipping: e.target.name,
  //   });
  // };

  const submit = (e) => {
    console.log(totals);
    e.preventDefault();
  };

  return (
    <div className={styles.cartContent}>
      <div className={styles.shoppingCart}>
        <h2>Shopping Cart</h2>
        <table>
          <tbody>
            <tr className={styles.tbOfContent}>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>

            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <div
                    className={styles.deleteProduct}
                    onClick={() => dispatch(deleteProduct(item._id))}
                  >
                    x
                  </div>
                </td>
                <td>
                  <img src={item.img} alt="product" />
                </td>
                <td>{item.name}</td>
                <td>
                  <i className="fa-solid fa-dollar-sign"></i>
                  {item.price}
                </td>
                <td>
                  <button onClick={() => isPrev(item)}>-</button>
                  <span id={styles.quantity}>{quantity}</span>
                  <button onClick={() => isNext(item)}>+</button>
                </td>
                <td id={styles.subTotal}>{item.price * quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.cartTotals}>
        <h2>Cart Totals</h2>

        <form className={styles.containerTotals} onSubmit={(e) => submit(e)}>
          <div className={styles.subtotal}>
            <p>Sub Total</p>
            <p>
              <i className="fa-solid fa-dollar-sign"></i>
              {subTotal}
            </p>
          </div>

          {/* <div className={styles.formRadio}>
            <p>Shipping</p>

            <div className={styles.shipping}>
              <label>
                Free Ship
                <input
                  name="shipping"
                  type="radio"
                  value={0}
                  onChange={handleSubmit}
                  required
                />
              </label>

              <label>
                Flat Rate: 10.00
                <input
                  name="shipping"
                  type="radio"
                  value={10}
                  onChange={handleSubmit}
                  required
                />
              </label>

              <label>
                Pickup
                <input
                  name="shipping"
                  type="radio"
                  value={0}
                  onChange={handleSubmit}
                  required
                />
              </label>
            </div>
          </div> */}

          <div className={styles.total}>
            <p>Total</p>
            <p>
              <i className="fa-solid fa-dollar-sign"></i>
              {totals.totals}
            </p>
          </div>

          <button type="submit">Check Out</button>
        </form>
      </div>
    </div>
  );
}
