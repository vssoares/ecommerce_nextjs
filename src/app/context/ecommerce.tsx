'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
   firstName: string;
}

interface ContextProps {
   data: DataType[];
   setData: Dispatch<SetStateAction<DataType[]>>;
}

const EcommerceContext = createContext<ContextProps>({
   data: [],
   setData: (): DataType[] => []
});

export const EcommerceContextProvider = ({ children }: any) => {
   const [data, setData] = useState<[] | DataType[]>([]);

   return (
      <EcommerceContext.Provider value={{ data, setData }}>
         {children}
      </EcommerceContext.Provider>
   );
}

export const useEcommerceContext = () => useContext(EcommerceContext);