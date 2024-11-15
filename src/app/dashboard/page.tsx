"use client";

import { Fragment, useState } from "react";
import AdminAbout from "@/components/organism/AdminAbout";
import "react-quill/dist/quill.snow.css";

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
          {Object.keys(components).map((component, index) => (
            <Fragment key={index}>
              <li key={`component-${index}`}>
                <a onClick={() => setHalaman(component as keyof typeof components)}>{component.charAt(0).toUpperCase() + component.slice(1)}</a>
              </li>
              <li key={`slash-${index}`}>
                <span>/</span>
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>
      <main className="admin-panel-content">{components[halaman]}</main>
    </section>
  );
};

export default Dashboard;
