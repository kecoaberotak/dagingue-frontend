import Header from "@/components/organism/Header";
import About from "@/components/organism/About";
import ProductPotong from "@/components/organism/ProductPotong";
import ProductBumbu from "@/components/organism/ProductBumbu";
import Footer from "@/components/organism/Footer";
import { getBumbu, getMedia, getPotong } from "@/services/content.service";
import { getAbout } from "@/services/about.service";
import { AboutResponse, BumbuResponse, MediaResponse, PotongResponse } from "@/types/response.types";
import BumbuDataProvider from "@/contexts/BumbuDataContext";
import "@/components/organism/product.styles.css";

export default async function Homepage() {
  try {
    // fetch data API
    const mediaData: MediaResponse = await getMedia();
    const headerMedia = {
      hero_image: mediaData.hero_image,
      logo_image: mediaData.logo_image,
      whatsapp: mediaData.whatsapp,
      instagram: mediaData.instagram,
      shopee: mediaData.shopee,
    };

    const footerMedia = {
      footer_image: mediaData.footer_image,
      logo_image: mediaData.logo_image,
      background_image: mediaData.background_image,
      address: mediaData.address,
      email: mediaData.email,
      phone: mediaData.phone,
      maps: mediaData.maps,
      whatsapp: mediaData.whatsapp,
      shopee: mediaData.shopee,
      instagram: mediaData.instagram,
    };

    const aboutData: AboutResponse = await getAbout();

    const potongData: PotongResponse = await getPotong();

    const bumbuData: BumbuResponse = await getBumbu();

    return (
      <div>
        <Header headerMedia={headerMedia} />
        <About aboutData={aboutData} />
        <section className="mb-[50px] grid gap-[50px]" id="product">
          <ProductPotong potongData={potongData} bg_image={mediaData.background_image} />
          <BumbuDataProvider>
            <ProductBumbu bumbuData={bumbuData} />
          </BumbuDataProvider>
        </section>
        <Footer footerMedia={footerMedia} />
      </div>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Error message berisi JSON yang dikirim dari service
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
