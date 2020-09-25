import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import MobileFooterNav from './components/mobileFooterNav/MobileFooterNav.js'



import Home from './components/home/Home'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div id="myWrapper">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          
        </div>

        <div id="myFooter">
          <Footer/>
        </div>
        
        <MobileFooterNav/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
