import Image from "next/image";

interface logoProps {
  logoMedia: { logo_image: string };
}

const Logo: React.FC<logoProps> = ({ logoMedia }) => {
  return (
    <div className="logo">
      <Image src={logoMedia.logo_image} width={500} height={500} alt="Logo Dagingue" />
    </div>
  );
};

export default Logo;
