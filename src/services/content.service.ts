import { ApiResponse, MediaResponse } from "@/types/response.types";
import axios, { AxiosError } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getMedia = async (callback: (data: MediaResponse | null, error?: AxiosError | Error) => void) => {
  try {
    const response = await axios.get<ApiResponse>(`${apiUrl}/content/media`);
    callback(response.data.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Mengambil statusCode dan message dari response jika tersedia
      if (error.response) {
        callback(error.response.data, new Error(error.response.data.message || "Unknown error from server"));
      } else {
        callback(null, error);
      }
    } else {
      callback(null, new Error("Unexpected error occurred"));
    }
  }
};
