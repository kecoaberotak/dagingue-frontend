// hooks/useBumbuData.ts
import { useContext } from "react";
import { BumbuData } from "@/contexts/BumbuDataContext";
import { BumbuDataContextType } from "@/types/response.types";

export const useBumbuData = (): BumbuDataContextType => {
  const context = useContext(BumbuData);

  if (!context) {
    throw new Error("useBumbuData must be used within a BumbuDataProvider");
  }

  return context;
};
