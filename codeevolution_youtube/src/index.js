// @ts-nocheck
/* eslint-disable react/jsx-pascal-case */
import React,{Component,Fragment,useState,useContext,useEffect} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import "./CustomStyling.css"
//import { getAllByPlaceholderText } from '@testing-library/react';









// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(  <App /> , document.getElementById('root') );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();





//Working on 1st functional component


function Function1()
{
    return <h1>Greetings from Code Evolution code changed 11:54</h1>;
}

ReactDOM.render(<Function1></Function1>,document.getElementById("root"));

function FunctionVariable1() 
{

    let a =  "Mindtree";

    let b = "Developer";

    return <div>
    
    Result after concatenation : {a} + { " "+ b}

    </div>
    

}

ReactDOM.render(<FunctionVariable1></FunctionVariable1>,document.getElementById("root"));


 export function GreetMessageFunction()
{

        return <h2>Welcome to greet message 1st function</h2>

}

ReactDOM.render(<GreetMessageFunction></GreetMessageFunction>,document.getElementById("root"));


export function GreetMessageFunction2()
{

        return <h2>Welcome to greet message 2nd function</h2>

}

ReactDOM.render(<GreetMessageFunction2></GreetMessageFunction2>,document.getElementById("root"));


//Working on a functional component using JSX 

export function render_functionalComponent_usingJSX()
{
    var a =  <h1>Rendering functional components using JSX </h1>;
    
    return a; 
    
}

//re-writing component without using JSX 

/* export function render_functionalComponent_Without_usingJSX()
{
    //here 3rd parameter is the children for HTML element , i.e children for div tag
    //return React.createElement("div",null,"<h1>Hello Vishwas<h1>");//here h1 is just an inner text to div tag but not a DOM node 
    //to overcome this as createElement accepts any umber of parameters , we can have code in below format 
    //Null is used for additional properties
    return React.createElement("div",{id : "ID_attributeName",className : "class_attributeName"},
    React.createElement("h1",null,"Hello Vishwas 11:06"));
}

 */

//Working on props 
//Below code not working , but syntax is correct 
export function Render_functionalComponent_usingJSX_containsProps(props)
{
  
        var a =  <h2>Rendering functional components , {props.aAttribute}</h2>;

        return a; 
    
  
    
}

const propElement = <Render_functionalComponent_usingJSX_containsProps aAttribute = "hello sent"></Render_functionalComponent_usingJSX_containsProps>

ReactDOM.render(propElement,document.getElementById("root"));



export function render_functionalComponent_usingJSX_containsProps()
{
            return <h2 >Rendering functional components , Hello  </h2>;
        
  
    
}
 
export function render_functionalComponent_usingJSX_containsProps1()
{
            return <h2 >Rendering functional components , Hello changed method name </h2>;
               
  
    
}



//In order for Class_component1 to become react class we should extend  Component class to inherit the behaviour



export class Type1  extends React.Component
{
    //class has to implement render method which will return null or some HTML element 

    //in a class only render method should be present 
    
    //In  below method we are rendering a h1 container with some text 

    
    render()
    {
       return <div>
            <p>Text coming from class component"</p>
        </div>
    } 
        
 }


 ReactDOM.render(<Type1></Type1>,document.getElementById("root"));



 //Actual code starts from here , leave evrything aside from starting , start learning from here 

 function Employee_Component(){

    return <div>
        <h2>Welcome to employee Component</h2>
    </div>
}


ReactDOM.render(<Employee_Component></Employee_Component>,document.getElementById("root"));
 








class Component_state extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Message : "Welcome visitor after changing everything"
        };

    }

    AddConsoleLogs()
    {
        console.log("Print everything from add console logs function");
    }


    //Use this way to accept any props
    ChangePropertyVariable = (custom_object) =>
    {
        this.setState({Message : custom_object.target.value});
        console.log(custom_object.target.value);

        //console of function is faster than set state and printing state object in console. 
        //Hence this function when executed for first time, State is just updated , 
        //but old state is added in logs when clicked again as the state is already changed 
        //hence it will get changed state in logs 


        console.log(this.state.Message);
    }


  /*   //Never write below  way , code won't work
    ChangePropertyVariable(custom_object) 
    {
        this.setState({Message : custom_object.target.value});
    }
 */


    //Use this way if props are not there from HTML tags 
    ChangeState_message()
    {
        this.setState({Message : "Finally learnt on click event handling"});
    }

   
    render()
    {
        return <div>
            <h2>{this.state.Message}</h2>

           
            <button onClick={this.AddConsoleLogs}>Click to add logs to console</button>

            <br></br>
            <br></br>

            <button onClick={this.ChangePropertyVariable} value="Subscription started , welcome hacking">On Click event handler : welcome hacking </button>


                {/* Putting state object to change state
                 */}
            <button onClick={this.ChangePropertyVariable} value={this.state.Message}>On Click event handler to change state object </button>

             {/* {this.AddConsoleLogs()}  */}

             <button onClick={() => this.ChangeState_message()}>finally learnt event handling function </button>

             <h3>{this.state.Message} </h3>
        </div>
    }
}

ReactDOM.render(<Component_state></Component_state>,document.getElementById("root"));















//Working on states



class Count_Component extends React.Component
 {

    constructor(props)
    {
        super(props);
        this.state = {Count : 2}
    }


    //Without sending props , this won't work as we are not sending any custom object 
  /*   IncrementCount_withoutProps() //we can't increment value here if {this.state.Count} is used
    {
        this.setState({Count :  765 });
        console.log("Count = " + this.state.Count);
    }
 */
    //With sending props

  /*    IncrementCount_havingProps = (custom_object1) =>
    {
        this.setState({Count : this.state.Count + custom_object1.target.value});
        console.log("Count = " + this.state.Count);
    }//Output :- String concatenation is performed 
 
 */
 
/*     IncrementCount_havingProps_noValue = (custom_object2) =>
    {
        this.setState({Count : this.state.Count + custom_object2.target.value });
        console.log("Count = " + this.state.Count);
     }//Output :- string concatenation is performed 
 
 */
 
 
   render()
     {
         return <div>
              Count value = {this.state.Count}

              <br></br>
              <br></br>

          {/* <button onClick={this.IncrementCount_wihtoutProps} >Inrement Count without Props event handler</button> */}
              <br></br> 
              <br></br>

          {/*     <button onClick={this.IncrementCount_havingProps} value = {100} >Increment Count having props sending explicitly value = 100</button>
           */}
            {/* above line when value is given regardless of value="100" or value = {100} it performs concatenation operation */}



              <br></br>
              <br></br>

              {/* <button onClick={this.IncrementCount_havingProps_noValue} value = "100">Increment Count no props</button> */}
               
         </div> 
     }
 }

 ReactDOM.render(<Count_Component></Count_Component>,document.getElementById("root"));








 



 class SetState_component extends React.Component
 {
   constructor(props)
   {
     super(props);
     this.state = {Count : 0}
   }


//Overall output for this function :- 
//Output :- Invoking call back function = 100
// 0

   IncrementCount = () => // this is working as a property
   {
   
 //    this.state.Count = this.state.Count + 10; 
 //* UI won't re-render if state keeps changing , UI value remains same , but in console it shows correct output */
   
       this.setState({Count : this.state.Count + 100}); // By using this way both are changed UI as well as browser 

//Hence never modify the state directly if done so , React wont' re-render the component , setState will react know that it has to rerender the component

//setState returns 2 properties , 1) setting state and 2) call back function

this.setState({Count : this.state.Count + 100}, function(){console.log("Invoking setState call back function = " + this.state.Count)} );

 console.log(this.state.Count); // this method is executed asynchronously
   }
   render()
   {
     return <div>

     Count =  {this.state.Count} 
     {}

     <button onClick={this.IncrementCount}>Click to increment Count</button>

     </div>
   }
 }


 ReactDOM.render(<SetState_component></SetState_component>,document.getElementById("root"));







 



 // destructuring arrays or properties on functional components 

function Main_Component()
{
  return <div>

    <h2>Executing main component</h2>
    <Sub_Component props_property1 = "Bangalore prop 1" props_property2 = "Delhi prop 2"></Sub_Component>

    {/* sending 2 props while calling Sub_Component functional component */}
  </div>

}

//1st way of destructuring
/* const Sub_Component = ({props_property1,props_property2}) => // collecting 2 difference props in 2 different variables 
{
  return <div> 
    <h2> Executing sub component </h2>

<h2>{props_property1} </h2> 

<h2> {props_property2} </h2>

  </div> 

}
 */

// 2nd way of destructuring
function Sub_Component(props) // collecting 2 difference props in 2 different variables 
{
  const {props_property1,props_property2} = props;
  return <div> 
    <h2> Executing sub component </h2>

<h2>{props_property1} </h2> 

<h2> {props_property2} </h2>

  </div> 

}

 ReactDOM.render(<Main_Component></Main_Component>,document.getElementById("root"));







 


 // destructuring arrays or properties on class components 

class Destructuring_classComponent1 extends React.Component{
  
    render()
    {
      return <div>
  
        <h2>Welcome to parent component</h2>
  
        <Destructuring_classComponent2 props_property1 = "Bangalore prop 1" props_property2 = "Delhi prop 2"></Destructuring_classComponent2>
  
      </div>
    }
  }
  
  class Destructuring_classComponent2 extends React.Component{
    
    render()
    {
      const {props_property1,props_property2} = this.props
      return <div>
  
      <h2>Welcome to child component</h2>
  
      {props_property1}
      {props_property2}
        
  
      </div>
    }
  }
  
  ReactDOM.render(<Destructuring_classComponent1></Destructuring_classComponent1>,document.getElementById("root"));










  //Event handling on functions


 function FunctionClick_functionalComponent()
 {

  function ClickHandler()
  {
    console.log("click event fired");
  }

  function ClickHandlerFunction()
  {
    console.log("Welcome to click handler function 2 ");
  }

    return <div>

    <h2>Welcome to function click</h2>

    <button onClick={ClickHandler}>Click for firing event </button>

    <button onClick={ClickHandlerFunction}>Click Handler function 2 </button>
    </div>
 }

 ReactDOM.render(<FunctionClick_functionalComponent></FunctionClick_functionalComponent>,document.getElementById("root"));




   
 //Event handling on classes

 class FunctionClick_classComponent extends React.Component
 {

  ClickHandler_class()
  {
    console.log("click event fired");
  }

   render()
   {
     return <div>
        <h2>Welcome to class component</h2>

        <button onClick={this.ClickHandler_class}>Click for firing event in class component</button>
   
     </div>
   }
 }

 ReactDOM.render(<FunctionClick_classComponent></FunctionClick_classComponent>,document.getElementById("root"));









 




 //Working on Event binding

class EventBinding extends React.Component{

    constructor(props)
    {
      super(props);
      this.state = {Message : "Working on event binding"};
  
      //This is as per Vanilla Javascript
      this.CatchEventHandler_addedBindWord = this.CatchEventHandler_addedBindWord.bind(this); // this is the official way of react 
    }
  
    CatchEventHandler = () =>
    {
      this.setState({Message : "Stopped working"});
      console.log(this);
    }
  
    CatchEventHandler_addedBindWord_withoutJavaScript = () =>
    {
      this.setState({Message : "Stopped working"});
      console.log(this);
    }
  
    or
    
    CatchEventHandler_addedBindWord()
    {
      this.setState({Message : "Stopped working"});
      console.log(this);
    }
  
  
    render()
    {
      return <div>
            {this.state.Message}
          <button onClick={this.CatchEventHandler}>click here </button>
          <br></br>
          <h3>Using binding function</h3>
          
          
          <button onClick={this.CatchEventHandler_addedBindWord}>click here </button> 
  
          <br></br>
  
          {/* Using bind keyword */}
          <button onClick={this.CatchEventHandler_addedBindWord.bind(this)}>click here CatchEventHandler_addedBindWord function</button>
  
          or
  
          <button onClick={() => this.CatchEventHandler_addedBindWord_withoutJavaScript}>Arrow function CatchEventHandler_addedBindWord function</button>
  
  
          or
  
          <button onClick={this.CatchEventHandler_addedBindWord}>React official way  CatchEventHandler_addedBindWord function</button>
  
  
      </div>
    }
  }
  
  ReactDOM.render(<EventBinding></EventBinding>,document.getElementById("root"));








  



  //Methods as props 


class Methods_component_parent extends React.Component{
  

    constructor(props)
    {
      super(props);
      this.state = {Message : "Information being displayed on parent component"}
  
    }
    
  
    Click_EventHandler = () =>
    {
      this.setState({Message : this.state.Message + "adding few words from Click_EventHandler method"});
      console.log(this.state.Message);
    }
  
  
   
    render()
    {
      return <div>
  
        <Methods_component_child method_passing = {this.Click_EventHandler}></Methods_component_child>
  
        <Method_function_child method_passing = {this.Click_EventHandler}></Method_function_child>
  
      </div>
    }
  }
  
  
  class Methods_component_child extends React.Component{
    render()
    {
      return <div>
        <h2>Welcome to child component</h2>
        <button onClick={this.props.method_passing}>Click here to execute method in parent component class component </button>
  
      </div>
    }
  }
  
  
  <h2>or passing it to components  </h2>
  
  function Method_function_child(props)
  {
   
      return <div>
        <h2>Welcome to child component</h2>
        <button onClick={props.method_passing}>Click here to execute method in parent component functional component</button>
  
       </div>
    
  }
  
  ReactDOM.render(<Methods_component_parent></Methods_component_parent>,document.getElementById("root"));













  







  class MainComponent extends React.Component
{
  render()
  {
    return <div>

      <SubComponent></SubComponent>

    </div>
  }
}

class SubComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }
  render()
  {
         //1st approach using if else conditions
      if(this.state.isLoggedIn)
      {
        return <div>
          Is logged in function is set to true
        </div>
      }

      else
      {
        return <div>
        Is logged in function is set to false
      </div>
    

 /* //2nd approach using element wise approach 
           
           let elem ;

           if(this.state.isLoggedIn)
           {
             elem = <h2>Is logged in function is set to true </h2>;
           }

           else
           {
             elem = <h2>Is logged in function is set to false </h2>;
           }

           return <div>
            
             {elem}

           </div>
 */



        /*    //Using ternary operator
           
           return this.state.isLoggedIn ? <h2>Is logged in function is set to true </h2> : <h2>Is logged in function is set to false </h2>
 */
    


/*            //Using short circuit operator 

              return this.state.isLoggedIn && <h2>Welcome to home page</h2>
              //will render nothing if false is set in the function 
 */

              

          
     
            }
}

}

ReactDOM.render(<MainComponent></MainComponent>,document.getElementById("root"));






/* 


//Working on lists mapping 

function Map_Component()
{

  const  array = ["Name1","Name2","Name3"] ;

 // const ArrayList =  array.map(array_object => <div> {array_object} </div>);

// Adding index as a unique key
const ArrayList1 =  array.map(array_object,index => <div key={<index>}> {array_object} </div>);

  const ArrayList =  array.map( function(array_object,index)
  {
    return <div key={<unique property in javascript object>}>  
    {array_object} 
    </div>}
    
);

return <div>
     {array}  :   Output = Name1Name2Name3 


    <h2>{array[0]}</h2>
    <h2>{array[1]}</h2>
    <h2>{array[2]}</h2>

    Output :- Name1
Name2
Name3 


                                     <h2 > {ArrayList1}</h2> 

    <h2 >  index = {index}  {ArrayList1}</h2>  
 </div>
   

const PersonList = [
  { id_unique : "25",
    Name : "Mindtree developer",
    Skill : "Developer",
    age : 35,
    DoesExist : true},

  { id_unique : "35",
    Name : "Google developer",
  Skill : "Tester",
  age : 40,
  DoesExist : false},

  {id_unique : "45",
    Name : "Facebook developer",
  Skill : "Operations",
  age : 68,
  DoesExist : true},
];

const PersonList_variable = PersonList.map( function(custom_personList_object)
{
  return <div>

    PersonList[0] =


    <h4> Name : {PersonList[0].Name}</h4>
    <h4>Skill : {PersonList[0].Skill}</h4>
    <h4>age : {PersonList[0].age}</h4>
    <h4>DoesExist : {PersonList[0].DoesExist}</h4>


    PersonList[1] =


<h4> Name : {PersonList[1].Name}</h4>
<h4>Skill : {PersonList[1].Skill}</h4>
<h4>age : {PersonList[1].age}</h4>
<h4>DoesExist : {PersonList[1].DoesExist}</h4>

PersonList[2] =


<h4> Name : {PersonList[2].Name}</h4>
<h4>Skill : {PersonList[2].Skill}</h4>
<h4>age : {PersonList[2].age}</h4>
<h4>DoesExist : {PersonList[2].DoesExist}</h4>


  </div>
});



//Assigning unique value as a prop for every Javascript object , key could be anything from any of the properties from a  javaScript object 
//Do not use key prop if we want to send this prop to some other component , use a different name as a prop 

//key={PersonList.id_unique} include this below div attribute but it is not working 
return <div  >{PersonList_variable}</div>
 
}

ReactDOM.render(<Map_Component></Map_Component>,document.getElementById("root"));




 */




//Getting styles from somewhere else 

function Styling()
{
  return <div className="primary">Welcome to styling component trying a difference </div>
}

ReactDOM.render(<Styling></Styling>,document.getElementById("root"));


//Working on Inline styling creating an object and apply to tags 

 function Inline_Component()
{

  return <div>
    <h2 className="primary">Welcome to inline component</h2>

  </div>
}

ReactDOM.render(<Inline_Component></Inline_Component>,document.getElementById("root"));
 









//Working on controlled components

class Controlled_Component extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {Name : "google Developer"};

     }

  
  ChangeStateProperty(custom_object_state)
  {
    this.setState({Name : custom_object_state.target.value});
  }

  

  render()
  {
    console.log("Invoking render method");
    return <div>
      <h2>Welcome to controlled component</h2>

      <input type="text" onChange={this.ChangeStateProperty.bind(this)}></input>
      
      {this.state.Name}

      <br></br>
      <br></br>

           </div>
  }
}

ReactDOM.render(<Controlled_Component></Controlled_Component>,document.getElementById("root"));













//Working on life cycle methods

//Execution phase during mounting phase 

class Lifecycle_component extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {Name : "google Developer"};

    console.log("Invoking constructor method");
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log("Invoking getDerivedStateFromProps function");
    return null;
  }

  componentDidMount()
  {
    console.log("Invoking componentDidMount method");
  }

  render()
  {
    console.log("Invoking render method  1st statement");
    return <div>
      <h2>Welcome to Lifecycle_component</h2>
    </div>
  }
}


ReactDOM.render(<Lifecycle_component></Lifecycle_component>,document.getElementById("root"));

//Output :- 
// Invoking constructor method
// index.js:39 Invoking getDerivedStateFromProps function
// index.js:50 Invoking render method
// index.js:45 Invoking componentDidMount method








//Working on refs 


class Ref_component_parent extends React.Component
{
  render()
  {
    return <div>

      <Ref_component_child></Ref_component_child>

    </div>
  }
}


class Ref_component_child extends React.Component
{

  constructor(props)
  {
    super(props);
    this.Reference_childComponent = React.createRef();
   

  }

  componentDidMount()
  {
    console.log(this.Reference_childComponent);
    this.Reference_childComponent.current.focus();
  }

  getInputElementValue()
  {
    alert(this.Reference_childComponent.current.value);
  }

  render()
  {
    return <div>
          <h2>Welcome to child component</h2>
          <input ref={this.Reference_childComponent} ></input>
          <button onClick={this.getInputElementValue.bind(this)}>Click to show alert</button>
    </div>
  }
}
ReactDOM.render(<Ref_component_parent></Ref_component_parent>,document.getElementById("root"));














//Forwarding references to other class components 

class Ref_parentComponent extends React.Component
{


  constructor(props)
  {
    super(props);
    this.ParentRef_variable = React.createRef();
  }

  render()
  {
    return <div>
      <h2>Welcome to Ref_parentComponent component </h2>

      <Ref_childComponent referenceID={this.ParentRef_variable}></Ref_childComponent>

     

    </div>
  }
}

class Ref_childComponent extends React.Component
{

 
  focusOnInputElement()
  {
    this.props.referenceID.current.focus();
  }

  render()
  {
    return <div>
      <h2>Welcome to Ref_childComponent component </h2>

      <input type="text" ref={this.props.referenceID}></input>

      <button onClick={this.focusOnInputElement.bind(this)}>This is child class, Click here to focus on input element </button>
         </div>
  }
}


ReactDOM.render(<Ref_parentComponent></Ref_parentComponent>,document.getElementById("root"));














//Forwarding ref from class component to functional component



class ForwardingRef_classComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.ParentRef = React.createRef();
  }


  focus_functionalComponent_InputElement()
  {
    this.ParentRef.current.focus();
  }
  render()
  {
    return <div>
      <h2>Welcome to parent class component</h2>
      <ReceiveRef_functionalComponent ref={this.ParentRef}></ReceiveRef_functionalComponent>
      <button onClick={this.focus_functionalComponent_InputElement.bind(this)}>Click here to forward ref and focus functional component input element</button>
    </div>
  }
}


const ReceiveRef_functionalComponent = React.forwardRef((props,referenceIDobject) => {
  return <div>
  <h2>Welcome to child functional component</h2>

  <input type="text" ref={referenceIDobject}></input>

  </div>


});


ReactDOM.render(<ForwardingRef_classComponent></ForwardingRef_classComponent>,document.getElementById("root"));













//Working on Portals 


function Parent_functionalComponent()
{
    return <div>

      <Child_classComponent></Child_classComponent>

    </div>
}

class Child_classComponent extends React.Component
{

  
  render()
  {
      return ReactDOM.createPortal(<div>Welcome to child component</div>,document.getElementById("portal-root"));
  }
}

ReactDOM.render(<Parent_functionalComponent></Parent_functionalComponent>,document.getElementById("root"));





/* 


//Working on Error Boundaries

class Boundary_classComponent extends React.Component
{
  render()
  {
    return (
      <div>
        <h3>Welcome to Boundaries component</h3>

        <ErrorBoundary_component>
         
          <ExecuteMethod functionName = "no_function"></ExecuteMethod> 
         
        </ErrorBoundary_component>

       
      </div>

        // <ExecuteMethod functionName="function"></ExecuteMethod>

        //   <ExecuteMethod functionName="Method"></ExecuteMethod>
        

        //   this line will throw an error which leads to application break 
    );
  }
}


class ErrorBoundary_component extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = 
    {
      hasError : false
    }

  }

  static getDerivedStateFromError(error)
  {
     return {
       hasError : true
      }
  }
    render()
    {
      if(this.state.hasError)
      {
        return <div>Something went wrong</div>
      }
    }

}


function ExecuteMethod({functionName})
{
  if(functionName === "no_function")
  {
    throw new Error("Function word is not valid")
  }
  return <div>
   <h3>{functionName}</h3> 
  </div>
}

ReactDOM.render(<Boundary_classComponent></Boundary_classComponent>,document.getElementById("root"));

//This seems confusing , but as per React official documentation , these are primarily for production purpose and not development 
//hence it is not visible much in development 

 */




/* 
//Working on higher components , writing duplicate codes


class HigherOrder_component extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {ClickCount : 0,
    MouseHovered : 0 };
  }


  clickCount_incrementNumber()
  {
     this.setState({ClickCount :  this.state.ClickCount + 1 });  
  }

  MouseHovered_incrementNumber()
  {
     this.setState({MouseHovered :  this.state.MouseHovered + 1 });  
  }

  render()
  {
    console.log(this);
    return <div>
          <button onClick={this.clickCount_incrementNumber.bind(this)} >Clicked x times </button>
         
          <br></br>
          <br></br>
          
          <label>No of times Clicked = {this.state.ClickCount}</label>

          <button onMouseOver={this.MouseHovered_incrementNumber.bind(this)} >Hovered x times </button>
        
          <br></br>
          <br></br>
          
          <label>No of times mouse hovered = {this.state.MouseHovered}</label>



    </div>
  }
}

ReactDOM.render(<HigherOrder_component></HigherOrder_component>,document.getElementById("root"));


 */





//Calling via different methods 

class Render_component_clickCounter extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {Count : 0}
  }

  IncrementCount()
  {
    console.log("Counter value = " + this.state.Count);
    this.setState({Count : this.state.Count + 10});
  }

  render()
  {
    return <div>
      <h2>Welcome to class component</h2>


      <button onClick={this.IncrementCount.bind(this)}>Clicked {this.state.Count} times</button>

    No of times clicked = {this.state.Count}

    </div>
  }
}


ReactDOM.render(<Render_component_clickCounter></Render_component_clickCounter>,document.getElementById("root"));







class Render_component_HoverCounter extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {Count : 0}
  }

  IncrementCount()
  {
    this.setState({Count : this.state.Count + 10});
  }

  render()
  {
    return <div>
      <h2>Welcome to class component</h2>


      <button onMouseOver={this.IncrementCount.bind(this)}>Hovered x times</button>

    No of times hovered = {this.state.Count}

    </div>
  }
}

ReactDOM.render(<Render_component_HoverCounter></Render_component_HoverCounter>,document.getElementById("root"));











class NameComponent extends React.Component
{


  renderName() 
  {
   
 return <h2>{this.props.name_function_prop1}</h2> 
  }

  render()
  {
    return <div>
 
 <h2> {this.props.name_prop1} </h2>
 <h2> {this.renderName()} </h2>


 <h2> {this.props.react_function} </h2>


 
 
    </div>
 }

}

ReactDOM.render(<NameComponent></NameComponent>,document.getElementById("root"));





class MainComponentFinal extends React.Component
{
  render()
  {

    function countNumbers()
    {
       return "hello count numbers program"; 
    }

    function Programming()
    {
      return <h2>Welcome to react and gaming developed by facebook</h2>
    }

    

    return <div>

        <Render_component_clickCounter></Render_component_clickCounter>
        <Render_component_HoverCounter></Render_component_HoverCounter>

        <NameComponent name_prop1 = "Hello World"></NameComponent>
        <NameComponent name_function_prop1 = {countNumbers} ></NameComponent>

        <NameComponent react_function = {Programming} ></NameComponent>


    </div>
  }
}

ReactDOM.render(<MainComponentFinal></MainComponentFinal>,document.getElementById("root"));











//Working on Hooks 



function Hook_component()
{

  const [CountValue,IncrementCount] = useState(0);


  const InitialValue = 0;
 

return <div>
  <h3>Welcome to hook component</h3>


    <label>Reset Button</label><button onClick={() => IncrementCount(InitialValue)}>Count = {CountValue}</button>
    <label>Increment Counter</label><button onClick={() => IncrementCount(CountValue + 10)}>Count = {CountValue}</button>
   
    <label>Decrement Counter</label><button onClick={() => IncrementCount(CountValue - 10)}>Count = {CountValue}</button>


</div>


}


ReactDOM.render(<Hook_component></Hook_component>,document.getElementById("root"));







//Working on use State 

function Use_component() 
{
    const [variable_property1] = useState(10);


     function helloVariable()   
     {
      
        console.log("Hello World , Don't attack Ukraine, final value after calculation = " + variable_property1);
       return <h1>Welcome to hello world programming</h1>
         
    } 


  
    return <div>

<label>Value given as property in useState method =  {variable_property1} </label>

<button onClick={helloVariable}>Click to Execute helloVariable function</button>

    </div>


}



ReactDOM.render(<Use_component></Use_component>,document.getElementById("root"));
















//Setting names using useState method 

function HookCounter()
{

const [variable1,function1_settingName] = useState(
    {firstName : "facelift developer", 
    lastName : "collaboration with google",
    Enhanced_firstName : "",
    Enhanced_lastName : ""});

    return <div>
    
    
    <h2> Welcome to hello world component </h2>

    <input type="text" value = {variable1.firstName}></input>

        <h2 type="text" >{variable1.lastName}</h2>


      Type Enhanced_firstName = <input value = {variable1.firstName }
      onChange={event_object_first => function1_settingName({Enhanced_firstName : event_object_first.target.value }) }></input>
         
         
        Type Enhanced_lastName = <input value = {variable1.lastName }
         onChange={event_object_last => function1_settingName({Enhanced_lastName : event_object_last.target.value }) }></input>

         <h2> Enhanced first Name given = {variable1.firstName + variable1.Enhanced_firstName}</h2>

          <h2> Enhanced last Name given = {variable1.lastName + variable1.Enhanced_lastName}</h2>

          <textarea  value = {variable1.firstName + variable1.Enhanced_firstName}></textarea>

          <br></br>

          <textarea  value = {variable1.lastName + variable1.Enhanced_lastName}></textarea>

          <h2>{JSON.stringify(variable1)}</h2>

         
         
          {/* Using spread operator and updating states too by using spread operator */}

          Type Enhanced_firstName = <input 
      onChange={event_object_first => function1_settingName({...variable1,Enhanced_firstName : event_object_first.target.value }) }></input>
         
         
        Type Enhanced_lastName = <input 
         onChange={event_object_last => function1_settingName({...variable1,Enhanced_lastName : event_object_last.target.value }) }></input>

         <h2> Enhanced first Name given = {variable1.firstName + variable1.Enhanced_firstName}</h2>

          <h2> Enhanced last Name given = {variable1.lastName + variable1.Enhanced_lastName}</h2>

          <textarea  value = {variable1.firstName + variable1.Enhanced_firstName}></textarea>

          <br></br>

          <textarea  value = {variable1.lastName + variable1.Enhanced_lastName}></textarea>

          <h2>{JSON.stringify(variable1)}</h2>


    
    </div>
}

ReactDOM.render(<HookCounter></HookCounter>,document.getElementById("root"));















/* 


//Working on useEffect state 

function Effect_Component()
{

//    try these lines of code separately
//   const [var1,func1] = useState(5);

//   return <div>

//     <button onClick={() => func1(var1 + 10) }>Clicked {var1} times</button>

//   </div>
 


  const [var1,func1] = useState(5);

  const [var2,func2] = useState("");


  useEffect(function() {
    document.title = "Clicked" +  var1 +  "times";
    console.log("useEffect functionality = " + document.title);

    
  },[var1]); 


 // [var1] :- this is an array which is a conditional run , console log statement written in func2 will work only when var1 value changes  

  return <div>

    <button onClick={() => func1(var1 + 10) }>Clicked {var1} times</button>

    <input placeholder='type something' value={var2} onChange = {function(event_object)
      {func2(console.log("values keep changing every time" + event_object.target.value))}
      
      
      }></input>

  </div>

}

ReactDOM.render(<Effect_Component></Effect_Component>,document.getElementById("root"));


 */



/* 


//useEffect with incorrect dependency 

function IncorrectDependency()
{

  const [count,setCount] = useState(0);


  function tickByOne()
  {
    setCount(count + 1);
  }

  useEffect(
    function()
    {
    const int_variable = setInterval(tickByOne,1000);


    return function()
    {
      clearInterval(int_variable);
    }


    },[count] //told react to ignore watching changes in the count variable , if we want to observe any changes for particular elements add them in the dependency list

  );


  return <div>


    <h2> Increment Counter Value =  {count}</h2>


  </div>
}

ReactDOM.render(<IncorrectDependency></IncorrectDependency>,document.getElementById("root"));



 */













//Working on Context 

const UserContext_variable1 = React.createContext();
const UserContext_variable2 = React.createContext();

function Context_Component_parent()
{
  return <div>

    <h3>Welcome to parent component</h3>

    <UserContext_variable1.Provider value={"Code evolution 1st provider"}>


    <UserContext_variable2.Provider value={"Code evolution 2nd provider"}>     

      <Context_Component_child ></Context_Component_child>

      <SimplifyingContext></SimplifyingContext>

    </UserContext_variable2.Provider>    

    </UserContext_variable1.Provider>

  </div>
}

function Context_Component_child()
{
  return <div>

    <h3>Welcome to child component</h3>

    <UserContext_variable1.Consumer>

     {/* {
            user => {return <div> {user} </div> } // this code is also working
     } */}  

     {

          function(Value_received)
          {
              return <h2> Welcome {Value_received} </h2>
          }

       
     }


    </UserContext_variable1.Consumer>


    <UserContext_variable2.Consumer>

     {/* {
            user => {return <div> {user} </div> } // this code is also working
     } */}  

     {

          function(Value_received)
          {
              return <h2> Welcome {Value_received} </h2>
          }

       
     }


    </UserContext_variable2.Consumer>


  </div>
}



//Simplifying context use 
// Context_Component_child() this component can be made smaller by writing code in the following way 

function SimplifyingContext()
{

      const a = useContext(UserContext_variable1);

      const b = useContext(UserContext_variable2);

  return <div>
    <h3>Welcome to programming</h3>

    <h3>SimplifyingContext function 1st react provider value =  {a}  </h3>

    <h3>SimplifyingContext function 2nd react provider value =  {b}  </h3>

  </div>

}


ReactDOM.render(<Context_Component_parent></Context_Component_parent>,document.getElementById("root"));













//Working on arrays 


function ReportTest()
{

  const a = ["Bangalore","Delhi","Chennai","Hyderabad","Mumbai"];

  const b = [...a,"B variable 1st word","B variable 2nd word","B variable 3rd word"];

  return <div>


    <button onClick={ function() {

        console.log(a);

        console.log(b);

        console.log(...a);

        console.log(...b);

    }  }>Click for array results</button>

  </div>
}

ReactDOM.render(<ReportTest></ReportTest>,document.getElementById("root"));








// Testing onClick function with Vanilla Javascript :- 


function Reducer_Component()
{
 return <div>

  <h2> Welcome to functional component </h2>

  <button onClick={
    function()
    {console.log("Printing console messages")
    }
    }
    > Click here to console logs  </button>

 </div>
}

ReactDOM.render(<Reducer_Component></Reducer_Component>,document.getElementById("root"));







/* 

function DataFetchingOne()
{

  const [isLoading,setLoading] = useState(true);
  const [error_object1,setError_function] = useState("");
  const [Post,setPost] = useState({});


  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/11")
      .then(function (response) {
        console.log(response);
        setLoading(false);
        setPost(response.data);
        setError_function("");


      })
      .catch(function (error_customObject) {
        console.log(error_customObject);
        setLoading(false);
        setPost({});
        setError_function("Something went wrong");

      });
  });

  return <div>

        { isLoading ? "Loading" : Post.title   }

        {Error ? Error : null}
  </div>

}

ReactDOM.render(<DataFetchingOne></DataFetchingOne>,document.getElementById("root"));

 */









//Working on counter checking value if odd or even 

function UseMemo_Component()
{

  const [countOne,IncrementCountOne] = useState(0);
  const [countTwo,IncrementCountTwo] = useState(0);


  const a = function()
  {
    IncrementCountOne(countOne + 10);
  }
  

  const b = function()
  {
    IncrementCountTwo(countTwo + 3);
  }

  const EvenOrOdd_CountOne_PropertyVariable = function()
  {
    return (countOne % 2 === 0);
  }


  const EvenOrOdd_CountTwo_PropertyVariable = function()
  {
    return (countTwo % 2 === 0);
  }


  return <div>


        <button onClick={a}>CountOne Counter function </button>
        <label> {countOne} </label>
        <label> Counter value is even or odd ? :-   {EvenOrOdd_CountOne_PropertyVariable() ? "Is an even value" : "is an odd value"} </label>

        <br></br>
        <br></br>
        <button onClick={b}> countTwo Counter function </button>
        <label> {countTwo} </label>
        <label> Counter value is even or odd ? :-   {EvenOrOdd_CountTwo_PropertyVariable() ? "Is an even value" : "is an odd value"} </label>


  </div>

}

ReactDOM.render(<UseMemo_Component></UseMemo_Component>,document.getElementById("root"));






//Working on refs 

function RefComponentChildTotal()
{

  const inputRef_object = React.useRef(null);

  useEffect(function()
  {
    inputRef_object.current.focus();
  },[]);

  
  return <div>
     
     <h2> Welcome to ref component </h2>

     <input type="text" ref={inputRef_object} ></input>

  </div>
}

ReactDOM.render(<RefComponentChildTotal></RefComponentChildTotal>,document.getElementById("root"));






//Updating document title 


function UpdatingDocumentTitle()
{

  const [count_variable,setCount_function] = useState(0);


  useEffect(
    function()
    {
      document.title = "Executing UseEffect function " + count_variable;
    }
  );

  return <div>

<button onClick={function() { setCount_function(count_variable + 15) }}> Count value = {count_variable} </button>
  
  </div>
}




ReactDOM.render(<UpdatingDocumentTitle></UpdatingDocumentTitle>,document.getElementById("root"));








//Custom Hooks - reusing logic , always use "use" as a prefix for custom hook function

function MainComponent_functionalHook()
{

    const [count_variable,updateDocument_function_mainComponent] = useState(0);

    
  
  return <div>
    <h2> Welcome to main component </h2>

   {useTryingSample()} 

   {useIncrementCounter_and_updateDocument(count_variable,updateDocument_function_mainComponent)}

  </div>
}



function useTryingSample() // this is a custom hook function , always use "use" as a prefix for custom hook function
{
  return <div>

    <h2> Welcome to useTryingSample() function </h2>

  </div>
}

function useIncrementCounter_and_updateDocument(count_variable,updateDocument_function_mainComponent)
{

useEffect( function()
{
  document.title = "Custom hook called function " + count_variable;
} );

    return <div>
 
 <h2> Welcome to useIncrementCounter_and_updateDocument function </h2>

<button onClick={ function() { updateDocument_function_mainComponent(count_variable + 1) } }> Click here to update document title with counter value </button>

    </div>
}

ReactDOM.render(<MainComponent_functionalHook></MainComponent_functionalHook>,document.getElementById("root"));








function ReUse_Component()
{

  const [counter,setCounter_function] = useState(15);

  console.log("Welcome to  programming");

  return <div>

      <h3>Welcome to ReUse_Component component </h3>

      <button onClick={ function() { setCounter_function(counter + 20) } }> Increment counter value , current value = {counter} </button>

      <label> Counter value = {counter}  </label>

  </div>
}

ReactDOM.render(<ReUse_Component></ReUse_Component>,document.getElementById("root"));









//Working on arrays re-render 

function ReRender()
{

  const initialState = {
    fname : "IBM" ,
    lname : "Developer" 

  }


  const [name_property,setName_function] = useState(initialState)


   function changeName_name_property() //this function will work for the first time , but not every time when button is clicked as new value is same as old value  
  {

    setName_function( name_property.fname = "new IBM" , name_property.lname = "new developer"  );

    name_property.fname = "IBM" ; 
   name_property.lname = "Developer" ; 

   setName_function(name_property ); // by doing this way onClick function works every time
 

   setName_function( name_property.fname = "new IBM" , name_property.lname = "new developer"  );

    console.log("onClick function worked");

    console.log(name_property);
  }

  return <div>

      <button onClick={changeName_name_property}> Click for console messages </button>

  </div>


}

ReactDOM.render(<ReRender></ReRender>,document.getElementById("root"));


