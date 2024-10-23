import Header from "@/components/organism/Header";
import { getMedia } from "@/services/content.service";

export default async function Home() {
  getMedia((res, error) => {
    if (error) {
      console.error("Error fetching media:", error.message);
    } else if (res) {
      console.log("Media data:", res);
    }
  });

  return (
    <div>
      <Header />
    </div>
  );
}
