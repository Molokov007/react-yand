import React from 'react';
import Car from './components/car';
import Card from './components/card';
import Contacs from './components/contacs';
import Footer from './components/footer';
import Forma from './components/forma';
import Header from './components/header';
import Job from './components/job';
import Plase from './components/plase';
import Plasejob from './components/plasejob';
import Plasemobile from './components/plasemobile';
import './styles/App.css';


function App() {


    return ( 
    <div className = "App">
       <Header/>
       <Plase/>
       <Card/>
       <Job/>
       <Plasejob/>
       <Plasemobile/>
       <Contacs/>
       <Forma/>
       <Car/>
       <Footer/>          
    </div>
    );
}

export default App;