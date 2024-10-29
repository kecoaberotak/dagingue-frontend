import Image from "next/image";

const Card: React.FC<{ tipe: string; berat: string; image: string }> = ({ tipe, berat, image }) => {
  return (
    <div className="card">
      <section className="card-product">
        <Image className={"potong-img"} src={image} alt={tipe} title={tipe} width={500} height={500} />
      </section>
      <section className="card-product-info">
        <p>{tipe}</p>
        <p>{berat}</p>
      </section>
    </div>
  );
};

export default Card;
