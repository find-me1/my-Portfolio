import React, { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/slider.css";

export default function Slider({ images, link }) {
  const [currentImg, setCurrentImg] = useState(1);
  const imageContainerRef = useRef(null);

  const updateImage = useCallback(() => {
    if (currentImg > images.length) {
      setCurrentImg(1);
    } else if (currentImg < 1) {
      setCurrentImg(images.length);
    }
    imageContainerRef.current.style.transform = `translateX(-${
      (currentImg - 1) * 460
    }px)`;
  }, [currentImg, images.length]);
  const prevUpdate = () => {
    setCurrentImg((prev) => prev - 1);
  };
  const nextUpdate = () => {
    setCurrentImg((prev) => prev + 1);
  };
  useEffect(() => {
    updateImage();

    const timeout = setTimeout(() => {
      setCurrentImg((prev) => prev + 1);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [currentImg, updateImage]);

  const openlink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="slider-container">
      <div className="image-container" ref={imageContainerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="images1"
            alt={`slide - ${index}`}
          />
        ))}
      </div>
      <FontAwesomeIcon
        onClick={() => prevUpdate()}
        icon={faAngleDoubleLeft}
        className="btn prev"
      />
      <FontAwesomeIcon
        onClick={() => nextUpdate()}
        icon={faAngleDoubleRight}
        className="btn next"
      />
      <br />
      <button
        type="button"
        className="sliderbutton"
        onClick={() => openlink(link)}
      >
        Link
      </button>
    </div>
  );
}
