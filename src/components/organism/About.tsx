import "@/components/organism/about.styles.css";
import { AboutResponse } from "@/types/response.types";
import Image from "next/image";

interface AboutProps {
  aboutData: AboutResponse;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  return (
    <section id="about" className="about">
      <div className="about_images">
        <Image src={aboutData.image1} width={500} height={500} alt="Dagingue Product" className="image1" />
        <Image src={aboutData.image2} width={500} height={500} alt="Dagingue Product" className="image2" />
      </div>
      <article className="article-about">
        <h1>Tentang Dagingue</h1>
        <section dangerouslySetInnerHTML={{ __html: aboutData.desc }}></section>
      </article>
    </section>
  );
};

export default About;
