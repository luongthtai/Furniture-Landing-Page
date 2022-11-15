import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CartContent2.module.scss";
import CartItem from "./CartItem";

export default function CartContent2() {
  const bought = useSelector((state) => state.count.bought);

  const allProduct = (value) => {
    let all = 0

    all += value

    console.log("hihi",all)
  }

  // const price = useSelector(state => state.count.totals)

  const [subTotal, setSubTotal] = useState(0);

  const [totals, setTotals] = useState({
    shipping: "",
    totals: subTotal,
  });

  useEffect(() => {
    let tien = 0;

    if (bought === []) {
      setSubTotal(0);
    }

    bought
      ? bought.map((item) => setSubTotal((tien += item.price)))
      : setSubTotal(0);
  }, [bought, subTotal]);

  const submit = (e) => {
    e.preventDefault();
    console.log(totals);
  };

  const handleSubmit = (e) => {
    setTotals({
      totals: subTotal + Number(e.target.value),
      shipping: e.target.name,
    });
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
              <CartItem cartItem={item} key={item._id} price={allProduct}/>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.cartContentTotal}>
        <h2>Cart Totals</h2>

        <form className={styles.containerTotals} onSubmit={(e) => submit(e)}>
          <div className={styles.subtotal}>
            <p>Sub Total</p>
            <p>
              <i className="fa-solid fa-dollar-sign"></i>
              {subTotal}
            </p>
          </div>

          <div className={styles.formRadio}>
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
          </div>

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
