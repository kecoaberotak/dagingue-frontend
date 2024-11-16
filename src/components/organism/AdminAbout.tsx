"use client";

import { getAbout } from "@/services/about.service";
import { AboutResponse } from "@/types/response.types";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import UploadImage from "../molecules/UploadImage";
import TextEditor from "../molecules/TextEditor";

const AdminAbout = () => {
  const [data, setData] = useState<AboutResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [srcPreview, setSrcPreview] = useState<string | undefined>(undefined);
  const [srcPreview2, setSrcPreview2] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);

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
    <>
      {data ? (
        <>
          <h1 className="form-title">Edit Content About</h1>
          <form className="form-content">
            <div className="upload-gambar-about">
              <UploadImage previewImageSrc={srcPreview} defaultImageSrc={data.image1} setPreviewImageSrc={setSrcPreview} label="Gambar content 1 :" />
              <UploadImage previewImageSrc={srcPreview2} defaultImageSrc={data.image2} setPreviewImageSrc={setSrcPreview2} label="Gambar content 2 :" />
            </div>
            <label>Isi Content : </label>
            <TextEditor defaultContent={data.desc || ""} setNewContent={setContent} newContent={content} label="Isi Content : " />
            <div className="form-button">
              <Button type={"submit"}>Submit</Button>
            </div>
          </form>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </>
  );
};

export default AdminAbout;
