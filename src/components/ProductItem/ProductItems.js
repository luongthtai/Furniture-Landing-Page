import React from "react";
import { useDispatch } from "react-redux";
import { countProductPlus } from "../../redux/actition/countProduct";
import styles from "./ProductItems.module.scss";
import Slider from "react-slick";
import "./productSlick.css"
import "./product.css"

export default function ProductItems(props) {
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ],
  };

  return (
    <Slider {...settings} className={styles.slides}>

      {props.product.map((item) => (
        <div className={styles.productItems} key={item._id}>
        <img src={item.img} alt={item.name} />

        <div className={styles.infProducts}>
          <div className={styles.infPdtItems}>
            <p className={styles.typeProducts}>
              {item.categories === 1
                ? "Chair"
                : item.categories === 2
                ? "Beds"
                : item.categories === 3
                ? "Sofa"
                : "Lamp"}
            </p>
            <h4 className={styles.nameProducts}>{item.name}</h4>
            <div className={styles.vote}>{item.star}<i className="fa-solid fa-star"></i></div>
          </div>

          <div className={styles.buy}>
            <p className={styles.price}>
              <i className="fa-solid fa-dollar-sign"></i>
              {item.price}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(countProductPlus(item));
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      ))}
      
    </Slider>
  );
}
