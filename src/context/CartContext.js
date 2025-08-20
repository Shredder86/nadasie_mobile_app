// src/context/CartContext.js
import React, { createContext, useContext, useMemo, useState } from "react";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{product, qty}]

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { product, qty }];
    });
  };
  const remove = (productId) => setItems((prev) => prev.filter((i) => i.product.id !== productId));
  const clear = () => setItems([]);
  const total = useMemo(
    () =>
      items.reduce((sum, i) => sum + Number(i.product.price || 0) * Number(i.qty || 1), 0),
    [items]
  );

  return (
    <CartCtx.Provider value={{ items, add, remove, clear, total }}>
      {children}
    </CartCtx.Provider>
  );
}
export const useCart = () => useContext(CartCtx);
