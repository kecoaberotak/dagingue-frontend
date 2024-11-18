import axios from "axios";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const login = async (email: string, password: string) => {
  try {
    // Proses Login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();

    // Kirim token ke REST API untuk verifikasi dan mendapatkan role
    const response = await axios.post(`${apiUrl}/auth/login`, { token: idToken });

    // CEK JUGA ROLENYA, apakah sesuai yang dibikin di REST API!!!
    return {
      success: true,
      role: response.data.role, // role dari API
      user: userCredential.user,
    };
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

// APAKAH LOGOUT MENGHAPUS AUTHORISASI TOKEN???
export const logout = async () => {
  try {
    await signOut(auth); // logout dari Firebase Auth
  } catch (error: unknown) {
    // BENERIN LAGI ERRORNYA!!!
    throw new Error(
      JSON.stringify({
        status: false,
        statusCode: 500,
        message: error,
      })
    );
  }
};
