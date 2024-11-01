"use client";

import Image from "next/image";
import { useSelectedImage } from "@/hooks/useSelectedImage";

const GalleryItemsImage: React.FC<{ name: string; desc: string; image: string }> = ({ name, desc, image }) => {
  const { setSelectedData } = useSelectedImage();

  const selectImage = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setSelectedData({
      image: target.getAttribute("data-image") || "",
      desc: target.getAttribute("data-desc") || "",
      name: target.getAttribute("data-name") || "",
    });

    const imageItems = document.querySelectorAll(".cover");
    imageItems.forEach((image) => {
      if (image.classList.contains("selected")) {
        image.classList.remove("selected");
      }
    });
    target.classList.add("selected");
  };

  return (
    <section className="gallery-item-image" onClick={selectImage}>
      <Image src={image} alt={name} width={1080} height={1080} />
      <div className={`cover`} data-name={name} data-desc={desc} data-image={image} />
    </section>
  );
};

export default GalleryItemsImage;
