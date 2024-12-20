import React, { createContext, useState } from 'react';
import ReactLoading from 'react-loading';


export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <>
        {loading && (
          <div className="loading-overlay">
            <ReactLoading type="spin" color="#00bfff" height={100} width={100} />
            <p>Cargando productos...</p>
          </div>
        )}
        {children}
      </>
    </LoadingContext.Provider>
  );
}
