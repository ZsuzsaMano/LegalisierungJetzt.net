import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LegalisierungContext = createContext();

const LegalisierungContextProvider = (props) => {
  const [language, setLanguage] = useState('DE');
  const { children } = props;
  return (
    <LegalisierungContext.Provider value={{ language, setLanguage }}>
      {children}
    </LegalisierungContext.Provider>
  );
};
LegalisierungContextProvider.propTypes = {
  children: PropTypes.any,
};
export default LegalisierungContextProvider;
