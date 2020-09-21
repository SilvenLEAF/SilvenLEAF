import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'


import Home from './components/home/Home'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="myWrapper">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          
        </div>

        <div id="myFooter">
          <Footer/>
        </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
