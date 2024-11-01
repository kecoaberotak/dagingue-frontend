"use client";

import { createContext, useState } from "react";

type SelectedData = {
  image: string;
  desc: string;
  name: string;
};

type SelectedImageContextType = {
  selectedData: SelectedData | null;
  setSelectedData: (data: SelectedData) => void;
};

export const SelectedImageContext = createContext<SelectedImageContextType | undefined>(undefined);

export const SelectedImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedData, setSelectedData] = useState<SelectedData | null>(null);

  return <SelectedImageContext.Provider value={{ selectedData, setSelectedData }}>{children}</SelectedImageContext.Provider>;
};
