import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer";
import styles from "./Shop.module.scss";

export default function Shop() {
  const [postData, setPostData] = useState({
    img: "",
    name: "",
    categories: 1,
    price: 0,
    star: 1,
    description: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleData = () => {
    fetch("https://fe21-db.herokuapp.com/furniture/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  const handleSubmit = (e) => {
    handleData();
    alert("Thêm thành công")
    e.preventDefault();
  };

  return (
    <>
      <Nav backgroundColor="#0d1b39" position="inherit" />
      <div id={styles.shopPage}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Thêm sản phẩm:</label>

          <table>
            <tbody>
              <tr>
                <th> Link Product Image</th>
                <th>Name product</th>
                <th>Type Product</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="img"
                    placeholder="Link Img"
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <select
                    id={styles.categories}
                    name="categories"
                    onChange={handleChange}
                    required
                  >
                    <option value={1}>Chair</option>
                    <option value={2}>Beds</option>
                    <option value={3}>Sofa</option>
                    <option value={4}>Lamp</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    placeholder="100"
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <textarea
            placeholder="Description"
            name="description"
            onChange={handleChange}
            required
          />

          <button>Thêm sản phẩm</button>
        </form>
      </div>

      <AllProduct />

      <Footer />
    </>
  );
}

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [toggle, setToggle] = useState(true);

  const viewAll = (value) => {
    setToggle(!toggle);
    fetch("https://fe21-db.herokuapp.com/furniture")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetch("https://fe21-db.herokuapp.com/furniture")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleClick = (value) => {
    const dltResult = window.confirm("Chắc chưa bạn êi");

    if (dltResult) {
      fetch("https://fe21-db.herokuapp.com/furniture/" + value, {
        method: "DELETE",
      });
    }
  };

  return (
    <div id={styles.productList}>
      <button type="button" onClick={() => viewAll()}>
        View All Product
      </button>

      {toggle ? (
        <p>Product List</p>
      ) : (
        <table id={styles.list}>
          <tbody>
            <tr>
              <th>Product Id</th>
              <th>Name product</th>
              <th>Type Product</th>
              <th>Price</th>
              <th></th>
            </tr>
            {product.map((item) => (
              <tr key={item._id}>
                <th>{item._id}</th>
                <th>{item.name}</th>
                <th>
                  {item.categories === 1
                    ? "Chair"
                    : item.categories === 2
                    ? "Sofa"
                    : item.categories === 3
                    ? "Beds"
                    : "Lamp"}
                </th>
                <th>{item.price}</th>
                <th onClick={() => handleClick(item._id)}>
                  <span>Delete</span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
