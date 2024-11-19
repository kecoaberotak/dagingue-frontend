"use client";

import Button from "@/components/atoms/Button";

const Login = () => {
  return (
    <form>
      <div>
        <label>Email: </label>
        <input type="email" required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" required />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
