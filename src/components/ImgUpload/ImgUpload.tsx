import React, { useEffect } from "react";
import styles from "./ImgUpload.module.css";
import { AddPhoto } from "../../assets/icons/AddPhoto";

export const ImgUpload = () => {
  const [image, setImage] = React.useState<string | undefined>();

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Выберите формат изображения png или jpeg");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {image && <img className={styles.preview} src={image} alt={"image"} />}
      <AddPhoto className={styles.icon} />
      <input
        type={"file"}
        accept={"image/png, image/jpeg"}
        onChange={handleFileChange}
        ref={fileInputRef}
        className={styles.input}
      />
    </div>
  );
};
