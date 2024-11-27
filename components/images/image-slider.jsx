"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./image-slider.module.css";

const images = [
  { image: burgerImg, alt: "Ein leckerer, saftiger Burger" },
  { image: curryImg, alt: "Ein leckeres, würziges Curry" },
  { image: dumplingsImg, alt: "Gedämpfte Teigtaschen" },
  { image: macncheeseImg, alt: "Mac and Cheese" },
  { image: pizzaImg, alt: "Eine leckere Pizza" },
  { image: schnitzelImg, alt: "Ein leckeres Schnitzel" },
  { image: tomatoSaladImg, alt: "Ein leckerer Tomatensalat" },
];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
