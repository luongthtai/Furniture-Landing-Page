import React from "react";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import InfoQuality from "../layouts/Main/InfoQuality/InfoQuality";
import InfoUs from "../layouts/Main/InfoUs/InfoUs";
import Products from "../layouts/Main/Products/Products";
import Testimonials from "../layouts/Main/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <InfoUs />
        <Products />
        <InfoQuality />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
