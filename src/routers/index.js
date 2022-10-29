import Error from "../layouts/Error/Error.js";
import About from "../pages/About/About.js";
import Contact from "../pages/Contact/Contact.js";
import HomePage from "../pages/HomePage.js";
import Shop from "../pages/Shop/Shop.js";

export const routers = [
  { id: 1, path: "/", component: <HomePage /> },
  { id: 2, path: "*", component: <Error /> },
  { id: 3, path: "/about", component: <About /> },
  { id: 4, path: "/contact", component: <Contact /> },
  { id: 5, path: "/shop", component: <Shop /> },
];
