import { logout } from "@/services/auth.service";
// import Button from "../atoms/Button";

const LogoutButton = () => {
  const handleLogout = async () => {
    const response = await logout();

    if (response?.success) {
      console.log(response.message);
    } else {
      console.error("Error logout: ", response.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
