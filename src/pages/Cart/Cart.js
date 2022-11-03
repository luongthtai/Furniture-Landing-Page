import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer.js";
import styles from "./CartContent.module.scss";

export default function Cart() {
  return (
    <>
      <Nav backgroundColor="#e58411" colorNumber="#0d1b39" position="inherit" />
      <CartContent />
      <Footer />
    </>
  );
}

const CartContent = () => {
  const [totals, setTotals] = useState({
    shipping: "",
    totals: ""
  })

  const [cart, setCart] = useState([])
  const cartItems = useSelector(state => state.count.bought)

  const handleSubmit = (e) => {
    setTotals({
      ...totals,
      shipping: e.target.value
    })
  }

  console.log('cart items: ' + cartItems)

  const submit = (event) => {
    console.log(totals)
    setCart(cartItems)
    console.log("cart : " , cart)
  }

  return (
    <div className={styles.cartContent}>
      {console.log(cart)}
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

            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className={styles.deleteProduct}>x</div>
                </td>
                <td>
                  <img src={item.image} alt="product" />
                </td>
                <td>{item.nameProduct}</td>
                <td>{item.price}</td>
                <td>
                  <div className={styles.quantity}>{item.id}</div>
                </td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.cartTotals}>
        <h2>Cart Totals</h2>

        <form className={styles.containerTotals}>
          <div className={styles.subtotal}>
            <p>Sub Total</p>
            <p>315</p>
          </div>

          <div className={styles.formRadio}>
            <p>Shipping</p>

            <div className={styles.shipping}>
              <label>
                Free Ship
                <input name="shipping" type="radio" value="freeShip" onChange={handleSubmit} required />
              </label>

              <label>
                Flat Rate: 10.00
                <input name="shipping" type="radio" value="flatRate" onChange={handleSubmit} required/>
              </label>

              <label>
                Pickup
                <input name="shipping" type="radio" value="pickup" onChange={handleSubmit}/>
              </label>
            </div>
          </div>

          <div className={styles.total}>
            <p>Total</p>
            <p>315</p>
          </div>

          <button type="button" onClick={submit}>Check Out</button>
        </form>
      </div>
    </div>
  );
};
