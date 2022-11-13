import { useSelector } from "react-redux";
// import CartContent from "../../components/CartContent/CartContent";
import CartContent2 from "../../components/CartContent2/CartContent2";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer.js";

export default function Cart() {
  const cartItems = useSelector((state) => state.count.bought);

  return (
    <>
      <Nav backgroundColor="#e58411" colorNumber="#0d1b39" position="inherit" />
      {/* <CartContent cartItems={cartItems} /> */}
      <CartContent2 cartItems={cartItems} />
      <Footer />
    </>
  );
}
