"use client";

import { login } from "@/services/auth.service";
import Button from "@/components/atoms/Button";

const response = login("email", "password");

const LoginPage = () => {
  console.log(response);

  return (
    <form>
      <p>Login</p>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <Button>Login</Button>
    </form>
  );
};

export default LoginPage;
