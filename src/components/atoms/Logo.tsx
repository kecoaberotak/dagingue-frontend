import Image from "next/image";

const Logo: React.FC<{ logo_image: string }> = ({ logo_image }) => {
  return (
    <div className="logo">
      <Image src={logo_image} width={500} height={500} alt="Logo Dagingue" />
    </div>
  );
};

export default Logo;
