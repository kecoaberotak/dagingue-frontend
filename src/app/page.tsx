import Header from "@/components/organism/Header";
import { getMedia } from "@/services/content.service";
import { MediaResponse } from "@/types/response.types";

export default async function Homepage() {
  try {
    // fetch data API
    const data: MediaResponse = await getMedia();
    console.log(data, "DATA");
    return (
      <div>
        <Header />
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
