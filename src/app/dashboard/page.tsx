"use client";

import { Fragment, useState } from "react";

// Definisikan komponen placeholder untuk setiap halaman
const components = {
  about: () => <h1>About</h1>,
  media: () => <h1>Media</h1>,
  bumbu: () => <h1>Bumbu</h1>,
  potong: () => <h1>Potong</h1>,
};

// Tipe untuk key yang valid di objek `components`
type HalamanKey = keyof typeof components;

const Dashboard = () => {
  // Atur tipe `halaman` agar sesuai dengan key yang valid di `components`
  const [halaman, setHalaman] = useState<HalamanKey>("about");

  // Dapatkan komponen sesuai halaman aktif atau default ke About
  const ActiveComponent = components[halaman];

  return (
    <section className="admin-panel">
      <nav className="content-nav">
        <ul>
          {Object.keys(components).map((page) => (
            <Fragment key={page}>
              <li>
                <a onClick={() => setHalaman(page as HalamanKey)}>{page.charAt(0).toUpperCase() + page.slice(1)}</a>
              </li>
              <li>
                <span>/</span>
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>
      <main className="admin-panel-content">
        <ActiveComponent />
      </main>
    </section>
  );
};

export default Dashboard;
