import { onIdTokenChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export const monitorAuthState = (callback: (isAuthenticated: boolean) => void) => {
  // ini variabel user diambil dari mana? otomatiskah berdasarkan udah login dari firebase auth?
  onIdTokenChanged(auth, async (user) => {
    if (user) {
      const idToken = await user.getIdToken(true); // ambil token terbaru
      localStorage.setItem("idToken", idToken); // simpan ke localStorage
      callback(true); // status login true
    } else {
      localStorage.removeItem("idToken"); // hapus token jika tidak ada token
      callback(false); // status login false
    }
  });
};
