"use client";

import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ContextType {
  items: Product[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<ContextType>({
  items: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
});

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addToBasket = (product: Product) => {
    setItems([...items, product]);
  };

  const removeFromBasket = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <BasketContext.Provider value={{ items, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
