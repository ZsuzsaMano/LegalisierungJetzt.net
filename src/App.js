import React, {useEffect, useState} from 'react';
import './styles/style.min.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Letter from './components/Letter';
import Main from './components/Main';
import Materials from './components/Materials';

function App() {

  const [page, setPage] = useState('main');
  const [language, setLanguage] = useState('DE')

  const updatePage = e => setPage(e.target.id)

  const updateLanguage = e => setLanguage(e.target.id)

  return (
    <div className="App">
      <Hero
       updatePage={updatePage}/>
      <Navbar
       updatePage = {updatePage}
       updateLanguage = {updateLanguage}
       language = {language}
       />
    {page ==='main' &&  <Main/> }
    {page ==='nav__events' &&  <Events/> }
    {page ==='nav__materials' &&  <Materials/> }
    {page ==='nav__letter' &&  <Letter/> }




    </div>
  );
}

export default App;
