"use client";

import { useBumbuData } from "@/hooks/useBumbuData";
import { BumbuResponse } from "@/types/response.types";
import { useEffect } from "react";
import Title from "../atoms/Title";
import GalleryInfo from "../molecules/GalleryInfo";
import GalleryItems from "../molecules/GalleryItems";

const ProductBumbu: React.FC<{ bumbuData: BumbuResponse }> = ({ bumbuData }) => {
  const { setBumbuData } = useBumbuData();

  useEffect(() => {
    setBumbuData(bumbuData);
  }, [bumbuData, setBumbuData]);
  return (
    <section className="product-bumbu">
      <Title className="title-section bumbu" title="Produk" subTitle="Varian Bumbu" />
      <section className="gallery">
        <GalleryInfo />
        <GalleryItems />
      </section>
    </section>
  );
};

export default ProductBumbu;
