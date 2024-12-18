"use client";

import { Fragment, useEffect, useState } from "react";
import AdminAbout from "@/components/organism/AdminAbout";
import "react-quill/dist/quill.snow.css";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

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

  // MIDDLEWARE SEMENTARA
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/auth/login"); // Redirect ke page login
      }
    });

    return () => unsubscribe();
  }, [router]);

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
