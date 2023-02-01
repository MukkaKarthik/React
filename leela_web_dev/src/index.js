/* eslint-disable react/jsx-pascal-case */
// @ts-nocheck

import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
/* import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {ProgrammingComponent} from "./ProgrammingFile"

import { ProgrammingComponent1 } from './ProgrammingFile';

import {ParamsComponent} from "./ProgrammingFile";
 */
 import './index.css';

 import axios from 'axios';




  
//Working on routes 


import {BrowserRouter, Route, Routes } from 'react-router-dom';

import {ProgrammingComponent} from "./ProgrammingFile"

import { ProgrammingComponent1 } from './ProgrammingFile';


function Hello()
{
    return <h3>Welcome to programming </h3>
}

ReactDOM.render(<Hello></Hello>,document.getElementById("root"));



const Element = function()
{
    return <div> 
  
    <h2>Welcome to programming language</h2> 
 
 
   <h2>Welcome to react language</h2>
 
   10 + 20 = {10+20}
 
   <br></br>
 
 
 
 </div>
 
}
 
const ElementFunction = <Element></Element>

ReactDOM.render(ElementFunction,document.getElementById("root"));


function Example1()
{
  return <div>

  <h2 >Welcome to example functional component</h2>

  </div>
}

ReactDOM.render(<Example1></Example1>,document.getElementById("root"));



class HelloWorld extends React.Component{

  render()
  {

    return <div>

      <h3>Welcome to class component</h3>

    </div>

  }

}

ReactDOM.render(<HelloWorld></HelloWorld>,document.getElementById("root"));







class Text_render extends React.Component{

    render()
    {
      return <div>
  
         <First_division_display name="division" id="first_division_id" text = "first_division_text"></First_division_display> 
  
        <br></br>
        <br></br>
  
        <Second_division_display></Second_division_display>
  
        
      </div>
    }
  
  }
   
  function First_division_display(props)
  {
  
    //props.name = "NAme of the props is changed";  props are read only property , they can't be changed . Never change props state 
    return <div>
  
   <h2>Welcome to text render component 1st first_division</h2>;
  
    <h3> {props.name + " Welcome aboard " } PropsID = {props.id}  </h3>
    <h3> Props text = {props.text}  </h3>
  
    </div>
   
  }
  
  function Second_division_display()
  {
    return <h2>Welcome to text render component 2nd division </h2>;
  }
  
  
  ReactDOM.render(<Text_render></Text_render>,document.getElementById("root"));
  
   









class Post_first extends React.Component
  {
    
    render()
    {
      return <div>
  
       Title1 =  {this.props.title}
       <br></br>
        description1 = {this.props.description}
        <br></br>
        <br></br>
  
      </div>
    }
  }
  
  class Post_Second extends React.Component
  {
  
    
   
    render()
    {
      return <div>
        
        Title2 =  {this.props.title}
        <br></br>
      
        description2 = {this.props.description}
        <br></br>
        <br></br>
   
  
  
      </div>
    }
  }
  
  class DifferentPosts extends React.Component
  {
    render()
    {
      return <div>
  
      <Post_first title="Post of title 1" description = "Post of description 1"></Post_first>
      <Post_Second title="Post of title 2" description = "Post of description 2"></Post_Second>
  
      </div>
    }
  }
  
  ReactDOM.render(<DifferentPosts></DifferentPosts>,document.getElementById("root"));







//Putting class in comments as browser is taking too long time to reload


class State_component extends React.Component{

    constructor()
    {
        super();

        this.state = {
            AddressDetails : [
              {Location : "Bangalore" , PinCode : 345},
              {Location : "Pune" , PinCode : 346},
              {Location : "Chennai" , PinCode : 347}
            ] , 
            Title : "Officer Position"
          }; 
    }

    showObjectDetailsInConsole()
    {
        console.log(this.state.AddressDetails,this.state.Title);
    }

    render()
    {
        
        return <div>

        <h3>fetching details in the class component from the state object</h3>

        <h4> {JSON.stringify(this.state.AddressDetails)} </h4>

        <button onClick={this.showObjectDetailsInConsole.bind(this)}>Show object details in console</button>

        </div>
         
    }
}


ReactDOM.render(<State_component></State_component>,document.getElementById("root"));





//Conditional rendering of elements 

class Operator_component extends React.Component
{
    constructor()
    {
        super();
        this.state = {count : 1}

    }


  render()
  {
    return <div>

      Count value = {this.state.count && "Show count"} 
      {/* Result :- if count is greater than 0 then result is "show count"
      Result :- If count is equal to 0 , then result is Count Value = 0; */}

     
     

    </div>
  }
}

ReactDOM.render(<Operator_component></Operator_component>,document.getElementById("root"));







//If we want to type something in input fields and capture those values 

class Component1 extends React.Component
{

 state = {
   Title_object : "Pune",
   DoesEXist_object : 45,
   Location_Object : "all is well"
 }

 ShowOnConsole(event_object)
 {

   this.setState({Title_object :  event_object.target.value});
   console.log(this.state.Title_object);

 }

  render()
  {
    return <div>

     <label>Title :  </label> <input  type="text"  onChange={this.ShowOnConsole.bind(this)}  ></input> 
     <br></br>
     <label>Title value = {this.state.Title_object}</label>
     
     <br></br>
     <label>DoesExist :  </label> <input type="text" ></input>
     <br></br>
     <label>Title value = {this.state.DoesEXist_object}</label>

     <br></br>
     <br></br>
     <label>Title value = {this.state.Location_Object}</label>
    </div>
  }
}


ReactDOM.render(<Component1></Component1>,document.getElementById("root"));






class Parent_component extends React.Component
 {

    constructor()
    {
        super();

        this.state = {
            Name : "facebook Developer",
        
          };
        

    }

            onChange_PropertyValue() 
            {
               this.setState({ Name : this.props.name});
                       
            }


   render()
   {
     return <div>

      <h2>Welcome to parent component</h2>
      <label>State Name object = {this.state.Name}</label>
      <Child_component Google_name_sending = {this.state.Name}></Child_component>

  
     </div>
   }
 }


 class Child_component extends React.Component{

  constructor()
  {
    super();
    this.state = {
        Context_property1 : "Name being changed from Bangalore to Delhi",
      }
  
  }

  render()
  {

   
  

    const Property1 = this.state.Context_property1;


    console.log(Property1);
    console.log(this.state.Context_property1);
   

    return <div>

      <h2>Welcome to child component</h2>

      <label>State Object received from parent = {this.props.Google_name_sending} </label>

      <br></br>
      <label>Child state object = {this.state.Context_property1}</label>
     
    </div>
  }

 }
ReactDOM.render(<Parent_component></Parent_component>,document.getElementById("root"));










//Using children nodes from Parent

class Children_parentComponent extends React.Component{
    render()
    {
      return <div>
          <Children_childComponent>
  
            <div>Showing dialog data 1</div>
  
            <div>Showing dialog data 2</div>
  
            <div>Showing dialog data 3</div>
           
          </Children_childComponent>
      </div>
    }
  }
  
  class Children_childComponent extends React.Component{
  
    render()
    {
      return <div>
        <h2>Welcome to child component</h2>
        <h3>{this.props.children}</h3>
      
      </div>
    }
  }
  
  ReactDOM.render(<Children_parentComponent></Children_parentComponent>,document.getElementById("root"));
  
  




  



//Working on context

const component_context = React.createContext({});

class Context_MainComponent extends React.Component
{

  render()
  {
      return <div>

        <h3> Welcome to main component </h3>

        <component_context.Provider value = "changed hello world props">

        <Context_SubComponent></Context_SubComponent>
        </component_context.Provider>

       
       

      </div>
  }
}

class Context_SubComponent extends React.Component
{

  render()
  {
    return <div>

        <h3> Welcome to side component  </h3>

        <component_context.Consumer>

       {function(value)
        {
          return <div>
           <h3>  {value}</h3>        
          </div>
        } } 

        </component_context.Consumer>

    </div>
  }
}


ReactDOM.render(<Context_MainComponent></Context_MainComponent>,document.getElementById("root"));





  
  
  




class ErrorBoundary_Component extends React.Component
{

  //use any of these 2 methods to make react component into an error boundary

  static getDerivedFromStateError() 
  // this executes just before during render method , we can't return any errors as it executes prior render method
  {
      console.log("getDerivedFromStateError method got executed");
     // return {hasError : true}; this line is not working
  }

  componentDidCatch() //this will fire when all components complete rendering
  {
    console.log("componentDidCatch method got executed");

  }

  constructor(props)
  {
    super(props);

    this.state = 
    {
      hasError : false,
      displayConsole : function()
      {
        console.log("printing error messages");
      }
    }
  }

  render()
  {


    if(this.state.hasError)
    {
        return <h2> Error is not present </h2>
    }

    return <div>
          <h2> An error occurred , an error is present  </h2>

          {this.state.displayConsole()}
    </div>
  }
}

ReactDOM.render(<ErrorBoundary_Component></ErrorBoundary_Component>,document.getElementById("root"));


  













//Working on refs

class Alphabet extends React.Component
{

   constructor(props)
   {
       super(props);

        this.ref_variable = React.createRef();
        

        
   }

   ClickHandler()
   {
          console.log(this.ref_variable);

          this.ref_variable.current.focus();

          this.ref_variable.current.value = "testing click handler function";

          console.log(this.ref_variable.current.value);


   }

    render()
    {
        return <div>

               <h3> Welcome to alphabet component </h3>

               <input type="text"  ref={this.ref_variable}  onClick={this.ClickHandler.bind(this)} ></input>

               {/* In above statement , we are assigning reference to the HTML element  */}




               <Component_ref  > </Component_ref>

               {/* In above statement , we are assigning reference to the component , this should be a class component 
               as it loads an instance on the console  */}

             

        </div>
    }
}


class Component_ref extends React.Component
{
    constructor(props)
    {
        super(props);
        this.ref_component_variable = React.createRef();
       
    }

    componentDidMount()
    {
       console.log(this.ref_component_variable); // class instance is being loaded on the console with all properties
       console.log(this.ref_component_variable.current);//null
       
    }


    render()
    {
        return <div>

           <h3> Welcome to component react  </h3>

      
        </div>
    }
}

ReactDOM.render(<Alphabet></Alphabet>,document.getElementById("root"));







// Vanilla Javascript passing parameters

class Vanilla extends React.Component
{

    clickHandler(name)
    {
            console.log("Welcome " + name + " to programming");    
    }

    render()
    {
        return <div>

            <button onClick={this.clickHandler.bind(this,"developer")}> click here  </button>

        </div>
    }
}

ReactDOM.render(<Vanilla></Vanilla>,document.getElementById("root"));








 //Working on Fragment concept

 class Fragment_Component extends React.Component
 {
     render()
     {
        /*  return <div>
 
             <Fragment_Sub></Fragment_Sub>
 
             By this way there is a nesting of 3 levels
 
         </div> */
 
         return <React.Fragment>
 
                 <Fragment_Sub></Fragment_Sub>
                 <Fragment_Sub1></Fragment_Sub1>
                 <Fragment_Sub2></Fragment_Sub2>
 
         </React.Fragment>
     }
 }
 
 
 class Fragment_Sub extends React.Component
 {
     render()
     {
         return <div>
             Welcome to sub comments 
 
             <Fragment_Sub1></Fragment_Sub1>
         </div>
     }
 }
 
 class Fragment_Sub1 extends React.Component
 {
     render()
     {
         return <div>
             Welcome to sub comments 1
 
             <Fragment_Sub2></Fragment_Sub2>
         </div>
     }
 }
 
 class Fragment_Sub2 extends React.Component
 {
     render()
     {
         return <div>
             Welcome to sub comments 2
         </div>
     }
 }
 
 ReactDOM.render(<Fragment_Component></Fragment_Component>,document.getElementById("root"));





 

//Map function 

class Map_Component extends React.Component {
  
    /**
       * @param {any} props
       */
    constructor(props) {
      super(props);
  
      this.state = {
       
          UserDetails: [
              { id: 1 },
              { Location: "Bangalore" },
              { Role: "Tester" },
              { Company: "facebook developer" },
            ],
           
       
      };
    }
    render() {
      return (
        <table>
          <thead>
  
                  <tr>
                     
                      <th>Location Column</th>
                      <th>Role Column</th>
                      <th>Company Column</th>
                  </tr>
  
          </thead>
  
          <tbody>
            {this.state.UserDetails.map(function ( PersonDetails) {
              return (
               
                    <tr>
  
                    <td>{PersonDetails.Location }</td> 
                    <td> {PersonDetails.Role} </td>  
                    <td>  {PersonDetails.Company}  </td> 
                    </tr>
               
              );
            } )}
          </tbody>
        </table>
      );
    }
  }
  
  
  ReactDOM.render(<Map_Component></Map_Component>,document.getElementById("root"));
  












 //Styling Inline components

 class InLineStyling extends React.Component
 {
     render()
     {
         return <div style={{color : "red" , backgroundColor : "grey" , border : "3px solid black"}}>
             <h2> Welcome to RenderProps component </h2>
         </div>
     }
 }
 
 ReactDOM.render(<InLineStyling></InLineStyling>,document.getElementById("root"));

 












  //Working on render props


  class RenderProps extends React.Component
  {
  
      constructor(props)
      {
          super(props);
          this.state = 
          {
              XPosition : 0,
              YPosition : 0
          }
      }
  
      eventHandler(eventHandler_inputVariable)
      {
          this.setState(
              {
                  XPosition : eventHandler_inputVariable.clientX,
                  YPosition : eventHandler_inputVariable.clientY
              }
          )
      }
  
      render()
      {
          return <div style={{border : "3px solid black"}}  onClick={this.eventHandler.bind(this)}>
  
  <h3> Welcome to RenderProps component </h3>
    
  <h2> X Position value = {this.state.XPosition}  Y Position value = {this.state.YPosition} </h2>
  
  
          </div>
          
      }
  } 
  
  
  ReactDOM.render(<RenderProps></RenderProps>,document.getElementById("root"));
  
  
  
  











// props sending to a different component 

class ReverseChanges extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            UserDetails : [
                { id : 1, Location : "Bangalore" , Role : "Tester"},
                {id : 2, Location : "Chennai" , Role : "developer"},
                {id : 3, Location : "Delhi" , Role : "research"}
            ]
        };

      }

   render()
    {
        return <div>

            <h2> Welcome to TypeChecking component </h2>

            {this.state.UserDetails.map(function(user_TemporaryVariable)
            {
                return (<div> 

                   

                    <h3> Location =  {user_TemporaryVariable.Location} ,  Role = {user_TemporaryVariable.Role}</h3> 
                    {/* above line is working , it will internally in this component  - map function working within the component */}

                        {/* In below line we are sending map function results to some other component */}
                    <SideComponent Location_prop1 = {user_TemporaryVariable.Location} role_prop2 = {user_TemporaryVariable.Role}> </SideComponent>
                </div>);

            })}

        </div>
    }
}



class SideComponent extends React.Component
{
   
    render()
    {
        return <div>
            {/* <h3> Welcome to side component </h3> */}

            <h2> Location from main component = {this.props.Location_prop1} </h2>
            <h2> Role from main component = {this.props.role_prop2} </h2>

        </div>
    }
}


ReactDOM.render(<ReverseChanges></ReverseChanges>,document.getElementById("root"));


















 //Working on hooks functional components useState method and useEffect method

 //useEffect works when component is mounted on the browser 
 
 function Hook_Component()
 {
     const [a_variable,b_function] = useState({countValue : 0});
 
     const [c_variable,d_function] = useState({count_notRequired : 100})
 
     function clickHandler_function1()
     {
          b_function({countValue : a_variable.countValue + 100});   
          console.log("After Increment value = " + a_variable.countValue);
     }
 
     function clickHandler_function2()
     {
          d_function({count_notRequired : c_variable.count_notRequired + 1000});   
          console.log("After Increment value = " + c_variable.count_notRequired);
     }
 
 
     useEffect(
         function()
         {
                 document.title = "Count = " + a_variable.countValue;
         },[a_variable] // this method will execute only when state variable a_variable value changes , as it is mentioned in dependency list
 
     ); // this way it will work when component is mounted on the browser
 
 /*     here [] will pick the variables from useState method and useEffect method will be executed when these change , 
     but if mention dependencies then it will work for only those variables declared in []
  */    
 
     return <div>
 
         <h3>  Welcome to Hook_Component </h3>
 
         <label> After Increment value = {a_variable.countValue} </label>
 
         <label> After Increment value = {c_variable.count_notRequired} </label>
 
         <button type='button' onClick={clickHandler_function1}> Click here to change state </button>
 
         <button type='button' onClick={clickHandler_function2}> Click here to change state </button>
 
     </div>
 
 }
 
 ReactDOM.render(<Hook_Component></Hook_Component>,document.getElementById("root"));










 


 //Hide and show function

function HideComponent()
{

    const [showVariable,showFunction] = useState(true);


    function HideComponent_function()
    {
        showFunction(!showVariable);
    }

    useEffect(
        function()
        {
            console.log("Component mounted , mount phase");
        },[]
    );

   useEffect(
       function()
       {
           return function()
           {
               console.log("Component unmounted , event fired");
           }
       },[showVariable]
   );




    return <div>

            <h3> Welcome to hide component </h3>

            <label> Boolean value = {showVariable} </label>

            <button onClick={HideComponent_function}> Hide component</button>

    </div>
}

ReactDOM.render(<HideComponent></HideComponent>,document.getElementById("root"));
















//Interceptors

function AxiosLibrary()
 {
    axios.interceptors.request.use(function(request_object)
    {
           console.log(request_object);
           //change request object as per user requirements and then send data to the server 
           return request_object;

    });//these 3 lines of code will be executed prior sending HTTP request to the server 

    axios.interceptors.response.use(function(response_object)
    {
            console.log(response_object);
           //change response object as per user requirements and then print data on the browser 
           return response_object;
    });
//these 3 lines of code will be executed prior rendering data on the browser , it will perform required manipulations on received data



        return <div>

            <h3> Welcome to axios component </h3>

        </div>     
 }

ReactDOM.render(<AxiosLibrary></AxiosLibrary>,document.getElementById("root"));













  //Passing props to deep nested components  

  function ConsoleProperties()
  {
      return <div>
 
         <h3> Welcome to main component </h3>
 
         <Console_Child1 prop1 = {"hello world"}></Console_Child1>
 
      </div>
  }
 
 
  function Console_Child1(props)
  {
      return <div>
 
      {console.log(props)} 
 
      {/* <Console_Child2></Console_Child2>  */}
      {/* by declaring this way , props received in Console_Child1 component won't be passed to Console_Child2 component */}
 
      {/* Hence declare this way if we want to pass props again to next child component */}
 
      <Console_Child2 {...props}></Console_Child2> 
 
 
      </div>
 
    
 
  }
 
 
  function Console_Child2(props)
  {
      return <div>
          {console.log(props)}  
          {/* :- above line is working  uncomment and check the code  */}
      </div>
  }
 
  ReactDOM.render(<ConsoleProperties></ConsoleProperties>,document.getElementById("root"));




/* import {BrowserRouter, Route, Routes } from 'react-router-dom';

import {ProgrammingComponent} from "./ProgrammingFile"

import { ProgrammingComponent1 } from './ProgrammingFile';
 */

function NavigationComponent()
 {
     return <div>

            <h3> Welcome to NavigationComponent  </h3>

          <BrowserRouter>
          
          <Routes>


 {/* 1st way of routing from different file , import component in this file and export component from that particular file*/}
                
                {/* <switch>   */}

                {/* Adding key is not mandatory , it is optional */}

                <Route path='/ProgrammingFile_firstComponent' element = {<ProgrammingComponent></ProgrammingComponent>} key={23}> </Route>

                <Route path='/ProgrammingFileRandomWord' element = {<ProgrammingComponent1></ProgrammingComponent1>} key={24}>  </Route>

         
                    {/* 2nd way of routing within same file*/}

                    <Route path='/route2_FunctionalComponent' element = {<Routing_2ndWay></Routing_2ndWay>} key={29}></Route>


                {/* </switch> */}



</Routes>

          </BrowserRouter>
     </div>
 }


 function Routing_2ndWay()
 {
     return <h3> Routing 2nd way comes here </h3>
 }

 ReactDOM.render(<NavigationComponent></NavigationComponent>,document.getElementById("root"));


 




