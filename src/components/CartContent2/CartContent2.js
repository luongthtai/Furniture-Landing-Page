import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CartContent2.module.scss";
import CartItem from "./CartItem";

export default function CartContent2() {
  const bought = useSelector((state) => state.count.bought);

  const [totals, setTotals] = useState({
    totals: 0,
  });

  useEffect(() => {
    let tien = 0;

    bought.map((item) => (tien += item.__v * item.price));

    console.log(tien);

    setTotals({
      totals: tien,
    });
  }, [bought]);

  const submit = (e) => {
    e.preventDefault();
    console.log(totals);
  };

  return (
    <div id={styles.cartContent}>
      <div className={styles.cartContentProduct}>
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
            {bought.map((item) => (
              <CartItem cartItem={item} key={item._id} />
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.cartContentTotal}>
        <h2>Cart Totals</h2>

        <form className={styles.containerTotals} onSubmit={(e) => submit(e)}>

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
