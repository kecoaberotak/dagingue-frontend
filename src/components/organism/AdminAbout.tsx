"use client";

import { getAbout } from "@/services/about.service";
import { AboutResponse } from "@/types/response.types";
import { useEffect, useState } from "react";

const AdminAbout = () => {
  const [data, setData] = useState<AboutResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbout();
        setData(data);
      } catch (error: unknown) {
        // Jika terjadi error, lemparkan ke komponen `error.tsx`
        if (error instanceof Error) throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit About</h1>
      {data ? (
        <>
          <p>{data.desc}</p>
          <p>{data.image1}</p>
          <p>{data.image2}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </div>
  );
};

export default AdminAbout;
