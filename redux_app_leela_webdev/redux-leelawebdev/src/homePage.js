import { Link } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';


import { useState } from "react"; 
import { useDispatch } from "react-redux";

export function HomePage()
{

const [title,setTitle] = useState("");

const [Description_variable,setDescription_function] = useState("");

const  dispatch_variable = useDispatch();


function SubmitForm(event_form)
{
    event_form.preventDefault();
}

  return <div>

      <h3> Welcome to home page </h3>

      <form>

          <div>
              <label> Home Page  Title </label>
                <input type="text" onChange={function(event_object)
                {
                    setTitle(event_object.target.value);
                }}></input>
          </div>

          <div>
              <label> Home Page Description </label>
                <input type="text" onChange={function(des_object)
                {
                    setDescription_function(des_object.target.value);
                }}></input>
          </div>

          <button type="submit"> Click here to submit </button>


      </form>

  </div>
}
