import { ApiResponse, BumbuResponse, MediaResponse, PotongResponse } from "@/types/response.types";
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

export const getPotong = async (): Promise<PotongResponse> => {
  try {
    const response = await axios.get<ApiResponse<PotongResponse>>(`${apiUrl}/product/potong`);
    if (response.data.status) {
      return response.data.data;
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

export const getBumbu = async (): Promise<BumbuResponse> => {
  try {
    const response = await axios.get<ApiResponse<BumbuResponse>>(`${apiUrl}/product/bumbu`);
    if (response.data.status) {
      return response.data.data;
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
