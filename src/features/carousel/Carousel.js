import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";
import { dataDigitalBestSeller } from "./data";

function Carousel() {
  const [items, setItems] = useState(dataDigitalBestSeller);
  const filterItem = (categItem) => {
    if (categItem === "todos") {
      setItems(dataDigitalBestSeller);
    } else {
      const updatedItems = dataDigitalBestSeller.filter((curElem) => {
        return curElem.category === categItem;
      });
      setItems(updatedItems);
    }

    let buttons = document.querySelectorAll(".op");
    buttons.forEach((button) => {
      if (categItem.toUpperCase() === button.innerHTML.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="menu-button">
        <h3>Explore os nossos serviços</h3>
        <br />
        <div className="filter-container">
          <button className="op active" onClick={() => filterItem("todos")}>
            Todos
          </button>
          <button className="op" onClick={() => filterItem("acompanhamento")}>
            Acompanhamento
          </button>
          <button className="op" onClick={() => filterItem("reparações")}>
            Reparações
          </button>
          <button className="op" onClick={() => filterItem("casa")}>
            Casa
          </button>
          <button className="op" onClick={() => filterItem("aulas")}>
            Aulas
          </button>
        </div>
      </div>

      <div className="App">
        <Slider {...settings}>
          {items.map((item) => (
            <div className="card">
              <div className="card-top">
                <img src={item.linkImg} alt={item.title} />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                {/* <h3>{item.price}</h3> */}
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", color: "yellow" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={className}
//       onClick={onClick}
//       >
// P
//       </div>

//   );
// }
