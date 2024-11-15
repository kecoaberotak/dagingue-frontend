"use client";

import { getAbout } from "@/services/about.service";
import { AboutResponse } from "@/types/response.types";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";

const AdminAbout = () => {
  const [data, setData] = useState<AboutResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [srcPreview, setSrcPreview] = useState<string | undefined>(undefined);
  const [srcPreview2, setSrcPreview2] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);

  const modules = {
    toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image"], ["clean"]],
  };

  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

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
              <section className="upload-gambar">
                <label htmlFor="gambar1">
                  <p>Gambar content 1 :</p>
                </label>
                <Image src={srcPreview || data.image1} width={500} height={500} alt="Gambar Content" className="gambar-content" />
                <input
                  type="file"
                  name="gambar1"
                  accept="image/*"
                  data-testid="input-image-1"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const objectUrl = URL.createObjectURL(e.target.files[0]);
                      setSrcPreview(objectUrl); // objectUrl adalah string yang cocok dengan tipe `srcPreview`
                    }
                  }}
                />
              </section>
              <section className="upload-gambar">
                <label htmlFor="gambar2">
                  <p>Gambar content 2 :</p>
                </label>
                <Image
                  src={srcPreview2 || data.image2} // Tampilkan srcPreview2 jika ada, atau gunakan data.image2
                  width={500}
                  height={500}
                  alt="Gambar Content"
                  className="gambar-content"
                />
                <input
                  type="file"
                  name="gambar2"
                  accept="image/*"
                  data-testid="input-image-2"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const objectUrl = URL.createObjectURL(e.target.files[0]);
                      setSrcPreview2(objectUrl); // objectUrl adalah string yang cocok dengan tipe `srcPreview`
                    }
                  }}
                />
              </section>
            </div>
            <label>Isi Content : </label>
            <ReactQuill theme="snow" value={(content ?? data.desc) || ""} onChange={setContent} modules={modules} formats={formats} />
            {/* <div className="form-button">
          <Button>Submit</Button>
        </div> */}
          </form>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </>
  );
};

export default AdminAbout;
