import Image from "next/image";
import "@/components/organism/header.style.css";
import { HeaderMedia } from "@/types/components.types";
import Socmed from "../molecules/Socmed";

interface HeaderProps {
  headerMedia: HeaderMedia;
}

const Header: React.FC<HeaderProps> = ({ headerMedia }) => {
  return (
    <header id="home" className="header" style={{ backgroundImage: `url(${headerMedia.hero_image})` }}>
      <div className="logo">
        <Image src={headerMedia.logo_image} width={500} height={500} alt="Logo Dagingue" />
      </div>
      <ul className="navbar-header">
        <li>
          <a href="#about">Tentang Kami</a>
        </li>
        <li>
          <a href="#product">Produk</a>
        </li>
        <li>
          <a href="#contact">Kontak</a>
        </li>
      </ul>
      <Socmed socmedMedia={{ whatsapp: headerMedia.whatsapp, shopee: headerMedia.shopee, instagram: headerMedia.instagram }} />
    </header>
  );
};

export default Header;
