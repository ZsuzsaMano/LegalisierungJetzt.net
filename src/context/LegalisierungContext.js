import React, { createContext, useState } from 'react';

export const LegalisierungContext = createContext();

const LegalisierungContextProvider = (props) => {
  const [language, setLanguage] = useState('DE');

  return (
    <LegalisierungContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LegalisierungContext.Provider>
  );
};

export default LegalisierungContextProvider;
