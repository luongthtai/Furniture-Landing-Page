import React from "react";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import InfoUs from "../layouts/Main/InfoUs/InfoUs";
import Products from "../layouts/Main/Products/Products";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <InfoUs />
        <Products />
      </main>
      <Footer />
    </>
  );
}
