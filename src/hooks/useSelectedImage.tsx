"use client";

import { useContext } from "react";
import { SelectedImageContext } from "@/contexts/SelectedImageContext";

export const useSelectedImage = () => {
  const context = useContext(SelectedImageContext);
  if (!context) {
    throw new Error("useSelectedImage harus digunakan di dalam SelectedImageProvider");
  }
  return context;
};
