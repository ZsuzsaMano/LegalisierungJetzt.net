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
const [active, setActive] = useState(false);

const updatePage = e => setPage(e.target.id)

  return (
    <div className="App">
      <Hero/>
      <Navbar
       page={page}
       updatePage = {updatePage}
       active = {active}
       setActive = {setActive}/>
    {page ==='main' &&  <Main/> }
    {page ==='nav__events' &&  <Events/> }
    {page ==='nav__materials' &&  <Materials/> }
    {page ==='nav__letter' &&  <Letter/> }




    </div>
  );
}

export default App;
