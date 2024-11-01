import Image from "next/image";

const GalleryItemsImage: React.FC<{ name: string; desc: string; image: string }> = ({ name, desc, image }) => {
  return (
    <section className="gallery-item-image">
      <Image src={image} alt={name} width={1080} height={1080} />
      <div className={`cover`} data-name={name} data-desc={desc} data-image={image} />
    </section>
  );
};

export default GalleryItemsImage;
