import "@/components/organism/product.styles.css";
import { PotongResponse } from "@/types/response.types";
import Card from "../molecules/Card";
import Title from "../atoms/Title";

const ProductPotong: React.FC<{ potongData: PotongResponse; bg_image: string }> = ({ potongData, bg_image }) => {
  let classname = "";
  if (potongData.length > 2) {
    classname = "cards-product-3";
  } else if (potongData.length < 2) {
    classname = "cards-product-1";
  } else classname = "cards-product-2";
  return (
    <div className="product-potong" style={{ backgroundImage: `url(${bg_image})` }}>
      <Title className="title-section potong" title="Produk" subTitle="Jenis Potongan" />
      <section className={classname}>
        {potongData.map((potong) => {
          return <Card key={potong.id} tipe={potong.name} berat={potong.desc} image={potong.image} />;
        })}
      </section>
    </div>
  );
};

export default ProductPotong;
