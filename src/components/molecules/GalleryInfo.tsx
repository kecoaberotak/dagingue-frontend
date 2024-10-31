"use client";

import { useBumbuData } from "@/hooks/useBumbuData";
import Image from "next/image";

const GalleryInfo = () => {
  const { bumbuData } = useBumbuData();

  return (
    <section className="gallery-info">
      <div className="gallery-info-image">{bumbuData.length > 0 && bumbuData[0].image && <Image src={bumbuData[0].image} alt={bumbuData[0].name} title={bumbuData[0].name} width={1080} height={1080} />}</div>
      <div className="gallery-info-bumbu">
        {bumbuData.length > 0 && bumbuData[0].desc && (
          <>
            <h2>{bumbuData[0].name}</h2>
            <div className="w-[300px] h-[120px] sm:w-[376px] sm:h-[130px]" dangerouslySetInnerHTML={{ __html: bumbuData[0].desc }}></div>
          </>
        )}
      </div>
    </section>
  );
};

export default GalleryInfo;
