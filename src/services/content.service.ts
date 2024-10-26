import { AboutResponse, ApiResponse, MediaResponse } from "@/types/response.types";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getMedia = async (): Promise<MediaResponse> => {
  try {
    const response = await axios.get<ApiResponse<MediaResponse>>(`${apiUrl}/content/media`);
    if (response.data.status) {
      return response.data.data;
    } else {
      // throw error kalau status false
      throw new Error(
        JSON.stringify({
          status: response.data.status,
          statusCode: response.data.statusCode,
          message: response.data.message,
        })
      );
    }
  } catch (error: unknown) {
    // Tangain error Axios
    if (axios.isAxiosError(error)) {
      throw new Error(
        JSON.stringify({
          status: error.response?.data?.status || false,
          statusCode: error.response?.data?.statusCode || 500,
          message: error.response?.data?.message || "Unexpected error occurred",
        })
      );
    } else {
      // tangain error lainnya
      throw new Error(
        JSON.stringify({
          status: false,
          statusCode: 500,
          message: "Internal server error",
        })
      );
    }
  }
};

export const getAbout = async (): Promise<AboutResponse> => {
  try {
    const response = await axios.get<ApiResponse<AboutResponse[]>>(`${apiUrl}/content/about`);
    if (response.data.status) {
      return response.data.data[0];
    } else {
      throw new Error(
        JSON.stringify({
          status: response.data.status,
          statusCode: response.data.statusCode,
          message: response.data.message,
        })
      );
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        JSON.stringify({
          status: error.response?.data?.status || false,
          statusCode: error.response?.data?.statusCode || 500,
          message: error.response?.data?.message || "Unexpected error occurred",
        })
      );
    } else {
      throw new Error(
        JSON.stringify({
          status: false,
          statusCode: 500,
          message: "Internal server error",
        })
      );
    }
  }
};
