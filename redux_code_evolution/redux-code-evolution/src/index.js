import userEvent from '@testing-library/user-event';
import { type } from '@testing-library/user-event/dist/type';

import payloadReact from 'payload-react';



import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





import { connect } from 'react-redux';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

const redux_library = require("redux");


import { useSelector } from 'react-redux';








/* import App from './App';
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
reportWebVitals();
 */


function CakeContainer(props)
{
  return <div>

    <h3>Number of cakes = {props.numOfCakes} </h3>

    <button onClick={props.buyCake_constant} > Buy cakes </button>

  </div>
}



//Here we are going in uni-directional flow 

// creating constants -> creating action creators -> creating reducers -> creating store 

//This store will talk to apps




//creating constants to avoid spelling mistakes

const buyCake_constant = "Buying Cake from Online shopping";




//Creating cake action creator that returns an object 

const CakeAction = function()
{
  return
  {
    type_casting : buyCake_constant
  }
}






//Creating reducers to handle action creators , Reducers accept state and function as parameters 

const initialState_redux = 
{
  numOfCakes : 10
}


const cake_reducer = function(s = initialState_redux,action_type_temp)
{

  

    switch(action_type_temp.type_casting)
    {
        case buyCake_constant :
        {
          // numOfCakes : s.numOfCakes - 1;
          console.log("Number of cakes = " + s.numOfCakes);
        }
        break;

        default : 
        {
          console.log("this is default case " + s.numOfCakes);
        } 
        break;
    }
}




//Creating stores 


const store_library = createStore;











//now defining state update from store to app and dispatch actions 





const mapStateToProps = function(state_map = initialState_redux)
{
    return
    {
      numOfCakes : state_map.numOfCakes - 1;
    }
}

const mapDispatchToProps = function(dispatch)
{
    return
    {
      buyCake_constant : () => 
      {
        dispatch(CakeAction);
      }
    }
}



connect(mapStateToProps,mapDispatchToProps)(CakeContainer);



ReactDOM.render(<Provider store={store_library.bind(cake_reducer)}>
  <CakeContainer></CakeContainer>
</Provider>,document.getElementById("root"));











