const GalleryItemsImage: React.FC<{ name: string; desc: string; image: string }> = ({ name, desc, image }) => {
  return (
    <section className="gallery-item-image">
      <img src={image} alt={name} />
      <div className={`cover`} data-name={name} data-desc={desc} data-image={image} />
    </section>
  );
};

export default GalleryItemsImage;
