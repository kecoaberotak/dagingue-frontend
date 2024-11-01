"use client";

import { useBumbuData } from "@/hooks/useBumbuData";
import GalleryItemsImage from "../atoms/GalleryItemsImage";

export default function GalleryItems() {
  const { bumbuData } = useBumbuData();

  // Pastikan `bumbuData` memiliki setidaknya satu item sebelum merender konten
  if (bumbuData.length === 0) return null;

  return (
    <section className="gallery-items">
      {bumbuData.map((data) => (
        <GalleryItemsImage key={data.id} name={data.name} desc={data.desc} image={data.image} />
      ))}
    </section>
  );
}
