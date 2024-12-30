import React, { createContext, useState, useContext } from "react";

// Create Context
const CountContext = createContext();

// Provider Component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Hook to use the Count Context
export const useCount = () => useContext(CountContext);
