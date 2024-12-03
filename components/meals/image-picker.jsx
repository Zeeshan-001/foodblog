"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  // Image Picker
  const handleImagePicker = () => {
    imageInputRef.current.click();
  };

  // Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label} </label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>Kein Bild ausgewählt</p>}
          {pickedImage && <Image src={pickedImage} alt="selected Image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id="iamge"
          accept="'image/png, image/jpeg, image/webp"
          name={name}
          ref={imageInputRef} // Input Reference
          //   multiple
          required
          onChange={handleImageChange}
        />
      </div>
      <button
        onClick={handleImagePicker}
        className={classes.button}
        type="buton"
      >
        Bild auswählen
      </button>
    </div>
  );
}

export default ImagePicker;
