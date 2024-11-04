import Image from "next/image";

const Logo: React.FC<{ logo_image: string; className: string }> = ({ logo_image, className }) => {
  return (
    <div className={className}>
      <Image src={logo_image} width={500} height={500} alt="Logo Dagingue" />
    </div>
  );
};

export default Logo;
