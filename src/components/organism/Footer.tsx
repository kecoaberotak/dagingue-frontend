import Title from "../atoms/Title";
import Socmed from "../molecules/Socmed";
import Logo from "../atoms/Logo";
import { FooterMedia } from "@/types/components.types";
import "@/components/organism/footer.styles.css";

const Footer: React.FC<{ footerMedia: FooterMedia }> = ({ footerMedia }) => {
  return (
    <footer className="footer" id="contact">
      <section className="footer-banner" style={{ backgroundImage: `url(${footerMedia.background_image})` }}>
        <Title className="banner-info" title="Kontak" subTitle="Hubungi Kami" />
      </section>
      <section className="footer-contact" style={{ backgroundImage: `url(${footerMedia.footer_image})` }}>
        <div className="contact-info">
          <section className="contact-info-main">
            <p>
              <a href={`mailto:${footerMedia.email}`}>{footerMedia.email}</a>
            </p>
            <p>{footerMedia.phone}</p>
            <section dangerouslySetInnerHTML={{ __html: footerMedia.address }} />
            <p>
              <a href={footerMedia.maps} target="_blank" rel="noreferrer">
                <u>Lihat pada peta</u>
              </a>
            </p>
          </section>
          <Socmed socmedMedia={{ className: "contact-info-socmed", whatsapp: footerMedia.whatsapp, shopee: footerMedia.shopee, instagram: footerMedia.instagram }} />
        </div>
        <Logo className="contact-logo logo" logo_image={footerMedia.logo_image} />
      </section>
    </footer>
  );
};

export default Footer;
