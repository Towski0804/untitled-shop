import React from "react";
import { all_product } from "../../assets/all_product";

export const ShopContext = React.createContext<ShopContextType | null>(null);

interface ShopContextType {
  all_product: Product[];
}

interface ShopContextProviderProps {
  children: React.ReactNode;
}

const ShopContextProvider: React.FC<
  React.PropsWithChildren<ShopContextProviderProps>
> = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
