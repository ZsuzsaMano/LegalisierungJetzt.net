import React, {useContext} from 'react';
import {LegalisierungContext} from '../context/LegalisierungContext';
import languagesObject from '../languagesObject';
import img1 from '../img/Manos_grande.png';

const Main = () => {
  return (
    <main className="home">
      <img src={img1} alt="hands in front of logo"/>
    </main>
  );
};

export default Main;
