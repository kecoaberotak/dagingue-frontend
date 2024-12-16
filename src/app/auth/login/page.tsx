"use client";

import { login } from "@/services/auth.service";
import Button from "@/components/atoms/Button";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(email, password);

    if (response.success) {
      console.log(`${response.message}, role: ${response.role}`);
      // simpan role atau token jika diperlukan
    } else {
      setError(response.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <p className="text-secondary">{error}</p>}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginPage;
