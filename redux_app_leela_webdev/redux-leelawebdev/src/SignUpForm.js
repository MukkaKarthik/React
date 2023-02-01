import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from "react"
import "./index.css"
import { createStore } from 'redux';

import { Reducer1 } from './AuthReducers/authReducerFile1';
import { Provider, useDispatch } from 'react-redux';

import { signUpAction } from './AuthActions/authActionFile1';

import { applyMiddleware } from 'redux';

const applyMiddleware_library = applyMiddleware;

const thunk_Library = require("redux-thunk");

const Logger = thunk_Library.default;


export function SingleSignOn(props)
{
  
    const dispatch = useDispatch();

    const [email_var,setEmail_function] = useState("");
    const [password_var,setPassword_function] = useState("");

    let ErrorsObject = {
        email_error : "",
        Password_error : ""
    }

    const [error_variable,SetError_function] = useState(ErrorsObject);

    
    function onSignUpClicked(Event_custom)
    {

     Event_custom.preventDefault();
      
            const ErrorsObject_copy = {...error_variable};
            var errorType = false;

            if(email_var === "")
            {
                  
                  ErrorsObject_copy.email_error = "Didn't enter anything , Enter valid email";
                  errorType = true;

            }

            if(password_var === "")
            {
                    ErrorsObject_copy.Password_error = "Didn't enter anything , Enter valid password";
                    errorType = true;

                }

            
                 
            SetError_function(ErrorsObject_copy);

            if(!errorType)
            {
                    console.log("form has been submitted successfully");
            }

            dispatch(signUpAction(email_var,password_var));

    }

    return <div >
        <h3>  Welcome to SingleSignOn function </h3>

            <form onSubmit={onSignUpClicked}>
                    <div>

                        <label>Email</label>

                        <input type="text" placeholder='type email here' onChange={function(Email_object)
                        {
                            setEmail_function(Email_object.target.value);
                            
                        }}></input>

                           <label> {email_var}  </label> 

                           <div>
                               {error_variable.email_error && <div> {error_variable.email_error} </div> }
                           </div>

                    </div>
                    <br></br>

                    <div>

                        <label>Password</label>

                        <input type="text" placeholder='type password here' onChange={function(Password_object)
                        {
                            setPassword_function(Password_object.target.value);    
                        }}></input>

                        <label> {password_var} </label>

                          <div> {error_variable.Password_error && <div> {error_variable.Password_error} </div> }  </div>  

                    </div>
                    <br></br>

                    <div>
                        <label>Submit</label>
                        <button type='submit'>CLick here to Submit</button>
                    </div>

            </form>

    </div>
    
}






//Creating store here

export const GlobalStore = createStore(Reducer1,applyMiddleware_library(Logger));