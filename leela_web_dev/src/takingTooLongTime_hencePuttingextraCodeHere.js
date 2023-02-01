/* eslint-disable react/jsx-pascal-case */
//import axios from "axios";
//import React
//{ useEffect, useState } 
//from "react";

//import ReactDOM from "react-dom";

/*import App from './App';
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




















 




 


//Using state object 


   
  
//     Below function not working  

//   changeProperties = () =>  {
//     const destructure_array = [...this.state.AddressDetails];
    
//     destructure_array[0].Location = "Bangalore name modified";
//     destructure_array[1].Location = "Pune name modified";
//     destructure_array[2].Location = "Chennai name modified";

//     destructure_array[0].Pincode = "Pincode changed from 345";
//     destructure_array[1].Pincode = "Pincode changed from 346";
//     destructure_array[2].Pincode = "Pincode changed from 347";


//     this.setState({AddressDetails : destructure_array});

//          return this.state.AddressDetails;

//  
 
//          valueChanged = () =>
//          {

//           const a = "value changed via variable";
//            this.setState({Title : this.state.Title + " values changed to something else " + a + " " +  (10 * 50)});
//            console.log(this.state.Title);

          
//          }

//          updateConsole() // this is method type notation
//          {
//           console.log("Executing plane javascript function " + (10 * 643));
//           this.setState({Title : "Value changed in updateConsole function"}); 
         
//           console.log( "Title = " + this.state.Title);

//          }

//          updateConsole_usingBind = () => // this is property type notation 
//          {
           
//             this.setState({Title : "Value changed in updateConsole using bind function"}); 
//              console.log(this.state.Title);
//          }


//          passingParameters(text_parameter)
//          {
//             console.log(text_parameter);
//          }
 

//   render()
//   {
  
//     return <div>
//         Using 1st index in array :- Location =  {this.state.AddressDetails[0].Location}
//         <br></br>
//         Using 1st index in array :- Pincode =  {this.state.AddressDetails[0].Pincode}
//         <br></br>
//           <br></br>
//        {this.state.AddressDetails[0].Pincode}
//        <br></br>

//        <button onClick={this.valueChanged}>change title name</button>
//        <br></br>


//        <label>Title property in state = {this.state.Title} </label>
    
    

//         <br></br>
//         <br></br>

//         Using 2nd index in array :- Location =  {this.state.AddressDetails[1].Location}
//         <br></br>
//         Using 2nd index in array :- Pincode =  {this.state.AddressDetails[1].Pincode}
//         <br></br>

//         <br></br>
//         <br></br>

//         Using 3rd index in array :- Location =  {this.state.AddressDetails[2].Location}
//         <br></br>
//         Using 3rd index in array :- Pincode =  {this.state.AddressDetails[2].Pincode}
//         <br></br>

//         <button onClick={this.valueChanged}>valueChanged property</button> 
//         {/* here title didn't change as valueChanged is executed as a method  */}

//         <br></br>
//         <button onClick={this.updateConsole.bind(this)}>click here to update console function</button>
//         {/* update console funcion has bind mentioned inside , 
//         hence without using bind here , react won't understand that this 
//         word used in function refers to this function , but it will assume as it refers to class */}

//         {/* above line will throw an error because we see that this word in updateConsole function refers to updateConsole function but not with class component . hence in order to execute following line 
//         this.setState({Title : "Value changed in updateConsole function"}); we need to use bind function
//           */}

// <button onClick={this.updateConsole_usingBind}>click here to update console function without bind function</button>

// <button onClick={this.updateConsole_usingBind.bind(this)}>click here to update console function having bind function</button>

// <br></br>

// {/* <button onClick={this.passingParameters("Executing passing parameter function by passing parameters")}>passing parameter function</button> */}
// {/* if we follow above line we are directy calling function without using onClick attribute , hence use the below way in order to execute function after clicking on the button */}


// <br></br>
// <button onClick={this.passingParameters.bind("Executing passing parameter function by passing parameters")}>passing parameter function</button>
// {/* this way it will show event handler object in the console */}

// <button onClick={this.passingParameters.bind(this,"Executing passing parameter function by passing parameters")}>passing parameter function</button>


//     </div>
//   }

// } 

// ReactDOM.render(<State_component></State_component>,document.getElementById("root"));











































































/* 



  //Working on redux sample counter 

 import { initialState } from "./reducer/reducerFile1";
 import { store_variable } from "./store/storeFile1";




  class ReduxComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            counterValue_component : initialState.counterValue
        }

    }

    componentDidMount()
    {
        const state_variable_temp = store_variable.getState();
        console.log(state_variable_temp);
    }




    render()
    {
        return <div>

            <h3> Welcome to ReduxComponent </h3>

            <div> Counter Value in reducer store =  {this.state.counterValue_component} </div>

            <div>



            </div>
           
        </div>
    }
}

ReactDOM.render(<ReduxComponent></ReduxComponent>,document.getElementById("root"));



  */