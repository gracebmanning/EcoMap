import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import MapSection from './components/Map';
import Footer from './components/Footer';
import Emissions from './components/Emissions';

const location = {
  address: '4255 Campus Dr A150, Irvine, CA 92612',
  lat: 33.64975774095616,
  lng: -117.83861606629371,
} //idk getting other location yet

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Emissions distance={100}/>
        <MapSection location={location} zoomLevel={17} />
        <Footer />
    </div>
  );
}

export default App;