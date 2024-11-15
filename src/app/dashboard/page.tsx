"use client";

import { useState } from "react";
import AdminAbout from "@/components/organism/AdminAbout";

// Definisikan komponen placeholder untuk setiap halaman
const components = {
  about: <AdminAbout />,
  media: <h1>Media</h1>,
  bumbu: <h1>Bumbu</h1>,
  potong: <h1>Potong</h1>,
};

const Dashboard = () => {
  // Atur tipe `halaman` agar sesuai dengan key yang valid di `components`
  const [halaman, setHalaman] = useState<keyof typeof components>("about");

  return (
    <section className="admin-panel">
      <nav className="content-nav">
        <ul>
          {Object.keys(components).map((component) => (
            <>
              <li key={component}>
                <a onClick={() => setHalaman(component as keyof typeof components)}>{component.charAt(0).toUpperCase() + component.slice(1)}</a>
              </li>
              <li>
                <span>/</span>
              </li>
            </>
          ))}
        </ul>
      </nav>
      <main className="admin-panel-content">{components[halaman]}</main>
    </section>
  );
};

export default Dashboard;
