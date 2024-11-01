"use client";

import { useBumbuData } from "@/hooks/useBumbuData";
import { useSelectedImage } from "@/hooks/useSelectedImage ";
import Image from "next/image";

const GalleryInfo = () => {
  const { bumbuData } = useBumbuData();
  const { selectedData } = useSelectedImage();

  // Pastikan `bumbuData` memiliki setidaknya satu item sebelum merender konten
  if (bumbuData.length === 0) return null;

  if (!selectedData) {
    return (
      <section className="gallery-info">
        <div className="gallery-info-image">
          <Image src={bumbuData[0].image} alt={bumbuData[0].name} title={bumbuData[0].name} width={1080} height={1080} />
        </div>
        <div className="gallery-info-bumbu">
          <h2>{bumbuData[0].name}</h2>
          <div className="w-[300px] h-[120px] sm:w-[376px] sm:h-[130px]" dangerouslySetInnerHTML={{ __html: bumbuData[0].desc }}></div>
        </div>
      </section>
    );
  }

  return (
    <section className="gallery-info">
      <div className="gallery-info-image">
        <Image src={selectedData.image} alt={selectedData.name} title={selectedData.name} width={1080} height={1080} />
      </div>
      <div className="gallery-info-bumbu">
        <h2>{selectedData.name}</h2>
        <div className="w-[300px] h-[120px] sm:w-[376px] sm:h-[130px]" dangerouslySetInnerHTML={{ __html: selectedData.desc }}></div>
      </div>
    </section>
  );
};

export default GalleryInfo;
