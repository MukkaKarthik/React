import React from 'react';
import ReactDOM from 'react-dom';


import { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux';

import {HomePage} from "./homePage"

import {NavigationPage} from "./NavigationPage"

import {SingleSignOn} from "./SignUpForm";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

import {GlobalStore} from "./SignUpForm"

import {CSSHello,CSSLoaderComponent} from "./CSSLoaderFile1";








/* import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */




function RoutingComponent()
{
  return <div>

    <h3> Welcome to programming and Welcome to hello world</h3>

   
    <BrowserRouter>
    
      <Routes>

        <Route path='/homePageFile' element = {<HomePage></HomePage>}></Route>

        <Route path='/NavigationPageFile' element = {<NavigationPage></NavigationPage>}> </Route>

        {/* <Route path='/SingleSignOnRoute' element = {<Provider store={GlobalStore}>
          <SingleSignOn></SingleSignOn>
        </Provider>  }> </Route> */}

        <Route path='/CSSLoaderRouter' element = {<CSSHello></CSSHello>}></Route>

        <Route path='/CSSLoaderStylingRouter' element = {<CSSLoaderComponent></CSSLoaderComponent>}></Route>




        

      </Routes>


    </BrowserRouter>

   
       
   
  </div>
}




ReactDOM.render(<RoutingComponent></RoutingComponent>,document.getElementById("root"));