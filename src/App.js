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
       page={page}
       updatePage = {updatePage}
       updateLanguage = {updateLanguage}
       language = {language}
       />
    {page ==='main' &&  <Main
    language = {language}/> }
    {page ==='nav__events' &&  <Events
    language = {language}/> }
    {page ==='nav__materials' &&  <Materials
    language = {language}/> }
    {page ==='nav__letter' &&  <Letter
    language = {language}/> }




    </div>
  );
}

export default App;
