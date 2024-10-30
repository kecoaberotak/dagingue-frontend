import { BumbuDataContextType, BumbuResponse } from "@/types/response.types";
import { createContext, useState } from "react";

export const BumbuData = createContext<BumbuDataContextType | undefined>(undefined);

const BumbuDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [bumbuData, setBumbuData] = useState<BumbuResponse>([]);

  return <BumbuData.Provider value={{ bumbuData, setBumbuData }}>{children}</BumbuData.Provider>;
};

export default BumbuDataProvider;
