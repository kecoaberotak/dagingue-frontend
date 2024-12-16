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
      message: "Login Success",
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      role: null, // role tidak ada jika gagal
      user: null, // user juga null jika gagal
      message: errorMessage,
    };
  }
};

// APAKAH LOGOUT MENGHAPUS AUTHORISASI TOKEN???
export const logout = async () => {
  try {
    await signOut(auth); // logout dari Firebase Auth
    return { success: true, message: "Logout success" };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }
};
