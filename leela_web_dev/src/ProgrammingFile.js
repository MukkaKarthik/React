import React
//{useState,useContext,useEffect} 
from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export function ProgrammingComponent()
{
    return <div>

        <h3> Welcome to Programming world, default link working </h3>

    </div>
}

export function ProgrammingComponent1()
{
    return <div>

        <h3> Welcome to Programming world 1 </h3>

    </div>
}


export function ParamsComponent(props)
{

    

    return  <div>

        {console.log(props)}

        <h3> Welcome to ParamsComponent </h3>

        {/* <h3> {props.match.params.prop1_link}  </h3> */}


    </div>
}












/* We need to import modules and then use them for navigation 

import {ProgrammingComponent} from "./ProgrammingFile"

import { ProgrammingComponent1 } from './ProgrammingFile';

import {ParamsComponent} from "./ProgrammingFile";
 */




function Param_MainComponent()
{

    let redirection_variable = true; 

    return <div>


        <h3> Welcome to parent component </h3>

        <BrowserRouter>

                <Routes>

                {redirection_variable &&  <Route path='/Programming' element = {<ParamsComponent prop1 = {"hello developing"}></ParamsComponent>}></Route> }

                   

<Route path="/RedirectLink" element = {<ProgrammingComponent1></ProgrammingComponent1>}></Route>

 
<Route path='*' element = {<ProgrammingComponent></ProgrammingComponent>}></Route> 
                
                {/* above link is the default link , apart from 2 words , Programming and RedirectLink if given any other word ,
                 then it will redirect to  ProgrammingComponent functional component 
                 */}




                </Routes>
        
        </BrowserRouter>

    </div>
}

// eslint-disable-next-line react/jsx-pascal-case
ReactDOM.render(<Param_MainComponent></Param_MainComponent>,document.getElementById("root"));

 



class RedirectComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            redirectionLink : false,
        }
    }

    

    render()
    {

        return <React.Fragment>

            <h3> Welcome to class component </h3>

         
            <BrowserRouter>

                <Routes>

               {(this.state.redirectionLink) &&  <Route path='/Programming' element = {<ParamsComponent prop1 = {"hello developing"}></ParamsComponent>}></Route>}


                <Route path="/RedirectLink" element = {<ProgrammingComponent1></ProgrammingComponent1>}></Route>

              
                {/* <Route path='*' element = {<ProgrammingComponent></ProgrammingComponent>}></Route> 
                
                above link is the default link , apart from 2 words , Programming and RedirectLink if given any other word ,
                 then it will redirect to  ProgrammingComponent functional component 
                */}


         


       

                </Routes>

</BrowserRouter>


        </React.Fragment>


         
    }
}

ReactDOM.render(<RedirectComponent></RedirectComponent>,document.getElementById("root"));
