
import "./App.css"
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, comedy, docs, horror, originals, romance } from './urls'


function App() {
  return (
    <div className='App' >
        
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={action} title='Action Movies' isSmall />
        {/* <RowPost url={comedy} title='Comedy Movies' isSmall />
        <RowPost url={horror} title='Horror Movies' isSmall />
        <RowPost url={romance} title='Romantic Movies' isSmall />
        <RowPost url={docs} title=' Documentaries' isSmall /> */}
        
      

    </div>

  );
}

export default App;
