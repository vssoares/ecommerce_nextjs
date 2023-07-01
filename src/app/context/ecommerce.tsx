'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
   // Carrinho
   toggleCarrinho: boolean;
   setToggleCarrinho: Dispatch<SetStateAction<boolean>>;
}

const EcommerceContext = createContext<ContextProps>({
   // Carrinho
   toggleCarrinho: false,
   setToggleCarrinho: (): boolean => false,
});



export const EcommerceContextProvider = ({ children }: any) => {
   // Carrinho
   const [toggleCarrinho, setToggleCarrinho] = useState<boolean>(false);

   const values = {
      // Carrinho
      toggleCarrinho,
      setToggleCarrinho
   }

   return (
      <EcommerceContext.Provider value={values}>
         {children}
      </EcommerceContext.Provider>
   );
}

export const useEcommerceContext = () => useContext(EcommerceContext);