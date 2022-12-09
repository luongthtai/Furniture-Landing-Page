import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./ClientReview.module.scss";
import "./Client.css"; 

export default function ClientReview() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("https://fe21-db.vercel.app/furniture/review")
      .then((response) => response.json())
      .then((data) => setClient(data));
  }, []);

  const settings = {
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <Slider  {...settings}>
        {client.map((item) => (
          <div className={styles.clientItems} key={item._id}>
            <img id={styles.background} src={item.background} alt={item.name} />

            <div className={styles.clientContent}>
              <img className={styles.avarta} src={item.avatar} alt={item.name} />
              <div className={styles.client}>
                <h5>{item.name}</h5>
                <p id={styles.name}>{item.city}</p>
                <p id={styles.cmt}>{item.comment}</p>
              </div>
              <div className={styles.vote}>xxxxx</div>
            </div>
          </div>
        ))}
    </Slider>
  );
}
