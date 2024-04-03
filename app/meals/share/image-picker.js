"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";

function MealImagePicker({ lable, name }) {
  const [mealImage, setMealImage] = useState();
  const ref = useRef();

  function handlePickImage() {
    ref.current.click();
  }

  function handleChooseImage(event) {
    const image = event.target.files[0];

    if (!image) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      setMealImage(e.target.result);
    };

    reader.readAsDataURL(image);
  }

  return (
    <div className={styles.controls}>
      <div className={styles.preview}>
        {!mealImage && <p>No image selected yet!!</p>}
        {mealImage && (
          <Image
            src={mealImage}
            alt="This is a meal's image from a customer"
            name={name}
            lable={lable}
            fill
          />
        )}
      </div>
      <div className={`${styles.picker} ${styles.input}`}>
        <label htmlFor={name}>{lable}</label>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept=".jpg,.png"
          ref={ref}
          onChange={handleChooseImage}
        />
        <button
          className={styles.button}
          onClick={(event) => handlePickImage(event)}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default MealImagePicker;
