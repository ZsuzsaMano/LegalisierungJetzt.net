import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types';


export const LegalisierungContext = createContext();

const LegalisierungContextProvider = (props) => {
  const [language, setLanguage] = useState('DE')
  const updateLanguage = e => setLanguage(e.target.id)

  return (
    <LegalisierungContext.Provider value={{language, setLanguage, updateLanguage}}>
    {props.children}
    </LegalisierungContext.Provider>
  )
}

export default LegalisierungContextProvider;
