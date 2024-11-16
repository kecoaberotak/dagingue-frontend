import Image from "next/image";
import React from "react";

interface UploadImageProps {
  previewImageSrc?: string;
  defaultImageSrc: string;
  setPreviewImageSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
  label: string;
}

const UploadImage: React.FC<UploadImageProps> = ({ previewImageSrc, defaultImageSrc, setPreviewImageSrc, label }) => {
  return (
    <section className="upload-gambar">
      <label>
        <p>{label}</p>
      </label>
      <Image src={previewImageSrc || defaultImageSrc} width={500} height={500} alt="Gambar Content" className="gambar-content" />
      <input
        type="file"
        accept="image/*"
        data-testid="input-image-1"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            const objectUrl = URL.createObjectURL(e.target.files[0]);
            setPreviewImageSrc(objectUrl);
          }
        }}
      />
    </section>
  );
};

export default UploadImage;
