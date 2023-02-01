import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';




const redux_var = require("redux");


const applyMiddleware_var = redux_var.applyMiddleware;


const reduxLogger = require("redux-logger");



const logger = reduxLogger.createLogger();





//Creating action for reference purpose and to avoid spelling mistakes

const type_buyCake = "Buy cake";

const type_buyBiscuits = "Buying biscuits from a different shop";



//Creating action creators
function BuyCake_function()
{
  return {
    type : type_buyCake,
    info : "First redux action"
  }
}


function BuyBiscuits_function()
{
  return {
    type : type_buyBiscuits,
    info : "Second redux action"
  }
}

const initialState = 
{
  numOfCakes : 10,
  numOfBiscuits : 100
}



const reducer_function = (state_temp,action) =>
{

    switch(action.type)
    {
      case type_buyCake : console.log("executing BuyCake_function function");
      
      break;

      case type_buyBiscuits :  console.log("executing BuyBiscuits_function function");
       break;

      default :   break;
    
    }


}




const store_final = redux_var.createStore(reducer_function,applyMiddleware_var(logger));


console.log(initialState);

store_final.dispatch(BuyBiscuits_function());
store_final.dispatch(BuyCake_function());












// Code not working , can use for learning purpose :- 

//Creating Base store and Middleware for connecting redux store

const redux_library =  require("redux");

const middleware = redux_library.applyMiddleware;


const thunkLibrary = require("redux-thunk").default;
const axiosLibrary = require("axios");



const initialState1 = 
{
  type : "",
  isLoadingComponent : false,
  usersFromAPI : [],
  error : "",
  payLoad : ""
}

//Describing actions and action creators 

const fetch_users_data = "request being dispatched to fetch data";

const fetch_success = "API fetched successfully";

const fetch_failure = "An error occurred while fetching data from API";

const fetch_users_data_variable = function()
{
  return
  {
    type : fetch_users_data;
     DeliveryInfo : "Sample of users data";
    
  }
}






// Store the data if request is successfully done

const fetch_success_variable = function(users_tempVariable)
{
  return
  {
    type : fetch_success;
     DeliveryInfo : "Successfully delivered";
    payLoad : users_tempVariable

  }
}


//throw an error message if request is not delivered

const fetch_failure_variable = function(ErrorMessage)
{
  return
  {
    type : fetch_failure;
    DeliveryInfo : "Delivery failure";
    //payload : ErrorMessage;

  }
}



//action reducer 


const reducer_function_API = function(initialState,action_type)
{
    switch(action_type.type)
    {
      case fetch_users_data : //return
      {

       [...initialState];
        isLoadingComponent : true;

      }

      case fetch_failure :// return
      {
        [...initialState];
        isLoadingComponent : false;
        error : action_type.payload;
        usersFromAPI : [];

      }

      case fetch_success :// return
      {
            [...initialState];
            isLoadingComponent : false;
            usersFromAPI : action_type.payload;
            error : ""
            
      }
    }
}

const GlobalStore = redux_library.createStore(reducer_function_API,middleware(thunkLibrary));



//Creating action creators
const ActionCreator_function =  function()
{
  return function(dispatch)
  {
    dispatch(fetch_users_data_variable());
      axios.get("https://jsonplaceholder.typicode.com/users").then(function(response_data)
      {
        //response_data is the array of 10 users data from API end point 

            const user_data = response_data.data.map(user => user.id);
          dispatch(fetch_success_variable());
          console.log(response_data.data);

      }).catch(function(ErrorMessage_temp)
      {
        //ErrorMessage_temp is the error message

        dispatch(fetch_failure_variable(ErrorMessage_temp.message));

      });
  }
}


GlobalStore.subscribe(function()
{
  console.log(GlobalStore.getState());
});

GlobalStore.dispatch(ActionCreator_function);

//The ability of thunk middleware is to make the action creator return function rather than object