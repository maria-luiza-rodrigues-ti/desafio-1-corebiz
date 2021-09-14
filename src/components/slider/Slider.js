import React, { useState } from "react";
import "./Slider.css";
import Btnslider from "./Btnslider";
import Dataslider from "./Dataslider";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== Dataslider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Dataslider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Dataslider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="slider-container">
        {Dataslider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/images/bg${index + 1}.jpg`}
                alt=""
              />
            </div>
          );
        })}
        <Btnslider moveSlide={nextSlide} direction={"next"} />
        <Btnslider moveSlide={prevSlide} direction={"prev"} />
        <div className="paragraph-container">
          <h2 className="text-one">
            Olá, você quer fazer entrar de cabeça em
            <br /> desenvolvimento?
          </h2>
          <h1 className="text-two">
            <strong>front-end • back-end • mobile</strong>
          </h1>
        </div>
        <div className="dots-container">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
