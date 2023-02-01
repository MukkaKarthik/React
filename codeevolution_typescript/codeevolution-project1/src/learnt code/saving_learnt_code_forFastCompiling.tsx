import React,{useCallback,useState,Component} from 'react';
import ReactDOM from 'react-dom';



const e = <h2> Welcome to hello world </h2> 

// ReactDOM.render(e,document.getElementById('root'));





function HelloWorld()
{
  return <div>

      <h2> Welcome to programming world </h2>


  </div>
}

//ReactDOM.render(<HelloWorld></HelloWorld>,document.getElementById("root"));







//Using props in typescript 

function Parent_Component()
{

  return <HelloWorld1 name_prop1 = "facebook Developer"></HelloWorld1>
}

type props_customType = 
{
  name_prop1 : string
}



function HelloWorld1(props : props_customType)
{
  return <div>

      <h2> Welcome to programming world  {props.name_prop1}  </h2>


  </div>
}

//ReactDOM.render(<Parent_Component></Parent_Component>,document.getElementById("root"));











function Props_Component()
{

  return <div>

    <SubComponent name_prop = {"facebook developer"} value_number_prop={25} boolean_prop = {true}  ></SubComponent>

  </div>

}



type customObject_interfaceType = 
{
  name_prop : string,

  value_number_prop : number , 

  boolean_prop : boolean ,


}


function SubComponent(customObject : customObject_interfaceType )
{
    return <div>

      <h3> Welcome to sub SubComponent  </h3>

        <h3> string given = {customObject.name_prop} , number given = {customObject.value_number_prop} 
        , boolean value given  = { customObject.boolean_prop ? "true is present" : "false is present" } </h3>

     

    </div>
}


ReactDOM.render(<Props_Component></Props_Component>,document.getElementById("root"));












//Sending javascript objects 

function MainComponent()
{

  const details = 
  {
    firstName : "Google" ,
    LastName : "Developer"
  }
  return <div>

    <SubComponent_component prop_name = {details}  ></SubComponent_component>

  </div>
}





type object_type = 
{

  prop_name : {
    firstName : string ,
    LastName : string
  }


}



function SubComponent_component(props : object_type )
{
  return <div>

    <h3> Welcome to SubComponent  </h3>

    <h3> firstName = {props.prop_name.firstName} </h3> 

    <h3> LastName = {props.prop_name.LastName} </h3> 

  </div>
}

ReactDOM.render(<MainComponent></MainComponent>,document.getElementById("root"));












function MainComponent10()
{

  return <div>

{/* <SubComponent  statusProp = "hello"></SubComponent> 

In above component we can pass any value apart from 3 words such as loading or not loading or Error new message 
 , typescript won't throw an error , hence we use object literals  */}

<SubComponent10  statusProp = "loading"></SubComponent10>


  </div>
  
}


type Status_type = 
{

  // statusProp : string , this line is working but it can take ay string , we need to restrict this to 3 words , by doing so , if typed any other word , then typescript will throw an error

  statusProp ?: "loading" | "Not loading" | "Error new message" 
  //here ? is used as an optional prop, prop need not be sent necessarily
}

function SubComponent10(props : Status_type  )
{

  if(props.statusProp == "loading")
  {
      return <h2> Prop sent = loading </h2>
  }

  if(props.statusProp == "Not loading")
  {
    return <h2> Prop sent = Not loading </h2>
  }

  if(props.statusProp == "Error new message")
  {
    return <h2> Prop sent = Error new message </h2>
  }

  return <div>

    {props.statusProp}

  </div>
}

ReactDOM.render(<MainComponent10></MainComponent10>,document.getElementById("root"));













//Passing  sending primitive types as children and react components as children props 



function MainComponent20()
{

  return <div>


<ChildComponent>  welcome to child component  </ChildComponent>





<OscarComponent>

{/* Now passing ChildComponent completely as a child node , Welcome to Oscar Component */}

<ChildComponent> welcome to child component , Now passing ChildComponent completely as a child node , Welcome to Oscar Component</ChildComponent>

</OscarComponent>


  </div>
}


type childComponent_type = 
{
 children : string
}


function ChildComponent(props : childComponent_type )
{
  return <h3> {props.children} </h3>
}



type OscarComponent_type = 
{
  children : React.ReactNode,
}





function OscarComponent(props : OscarComponent_type)
{
  return <h3> {props.children} </h3>
}

ReactDOM.render(<MainComponent20></MainComponent20>,document.getElementById("root"));










//Passing click handlers to child components

function MainComponent30()
{

  function ClickHandler(): void
  {
    console.log("Printing messages");
    return;
  }

  return <div>

    <h3>  Welcome to main component </h3> 

    <ButtonComponent handler = {ClickHandler} ></ButtonComponent>


    

  </div>

}


type ButtonProps_type = 
{
 handler : () => void,

}


function ButtonComponent(props : ButtonProps_type)
{
  return <div>

    <h3> Welcome to button component </h3>

    <button type="button" onClick={props.handler}> Click here to perform function</button >



  </div>
}

ReactDOM.render(<MainComponent30></MainComponent30>,document.getElementById("root"));














// Using styles from an external file 

function MainComponent40()
{

  return <div>

    <h3 className='Styling_InlineComponent' > Welcome to style component  </h3>

  </div>


}

ReactDOM.render(<MainComponent40></MainComponent40>,document.getElementById("root"));






//Using styles from an internal file

function MainComponent50()
{

  return <div>

    <h3 className='Styling_InlineComponent' > Welcome to style component  </h3>

    <Styling_functionalComponent  styles_prop = { { border: "3px solid black" , color: "red" , background : "green"}}></Styling_functionalComponent>

  </div>


}

type style_type = 
{
  styles_prop : React.CSSProperties
}


function Styling_functionalComponent(props : style_type)
{
  return <div>

    {/* <h3 style={props.styles_prop}> Welcome to styling component </h3> :- this code is working  */} 

  </div>
}



ReactDOM.render(<MainComponent50></MainComponent50>,document.getElementById("root"));










//Working on useState 


function UseState_component()
{


  const [isLoggedIn_variable,setLogin_function] = useState(false) 


   const Login_Handler = function() : void
   {
     setLogin_function(true);
   }


   const Logout_Handler = function() : void
   {
     setLogin_function(false);
     
     // if false is given as string , then typescript will throw an error 
//this is due to typescript inference , Typescript will infer as boolean as initial value is  of boolean type   
   }

  return <div>

    <h3> Welcome to UseState component </h3>

    <button type="button" onClick={Login_Handler} > Click here to log in </button>

    <button type="button" onClick={Logout_Handler} > Click here to log out </button>

    <label> {isLoggedIn_variable ? "Present state is true" : "Present state is false"} </label>

  </div>
}

ReactDOM.render(<UseState_component></UseState_component>,document.getElementById("root"));






//Working on useState using props

function UseState_component10()
{


  function clickHandler() : any
  {
    console.log("Printing messages");

    alert("Welcome to alert function");

  }

    return <div>

      <SideComponent prop_ClickHandler = {clickHandler}></SideComponent>

    </div>
}


type Handler_type = 
{
  prop_ClickHandler : React.MouseEventHandler | any 
}

function SideComponent(props : Handler_type )
{
    return <div>

    <h3> Welcome to side component </h3>

    <button type='button' onClick={props.prop_ClickHandler}>Click here to execute function  </button>

    

    </div>
}


//ReactDOM.render(<UseState_component10></UseState_component10>,document.getElementById("root"));










//Working on use State functions 


type UserDetails_type =
{
  name : string,
  email : string
}



function UseState_Type()
{

 //this line is working :-  const [user,setDetails_function] = useState <UserDetails_type |  null>(null); // we are deviating from type inference as typescript will throw an error as null is defined as an initial value

  //or using type assertion by defeating null logic

  const [user,setDetails_function] = useState <UserDetails_type |  null>({} as UserDetails_type); 


  function changeUserDetails() 
  {

    setDetails_function({

      name : "Code evolution",
      email : "Working in Bangalore"

    });

    console.log(user);

  }

 
  return <div>

    <h3> Welcome to use state component </h3>

    User Name = {user?.email} 
    USer Email = {user?.name}

    {/* check the user if it has properties before accessing them  */}

    <button type='button' onClick={changeUserDetails}> CLick here to change name </button>

   
  </div>
}

ReactDOM.render(<UseState_Type></UseState_Type>,document.getElementById("root"));











//Working on class components 


type state_types = 
{
  counter : number,
  message : string

}



class Class_component<state_types> extends Component
{

    state= 
    {
      counter : 0,
      message : "Hello programmer"
    }


  
    
  IncrementCounter()
  {
    this.setState({counter : this.state.counter + 10});
    console.log(this.state.counter);
    console.log(this.state.message);
  }

  render()
  {
    return <div>

      <h2> welcome to class component </h2>

      <button type='button' onClick={this.IncrementCounter} > Click here to increment counter </button>

      <label> Counter value =  {this.state.counter}  </label>

    </div>
  }
}


ReactDOM.render(<Class_component></Class_component>,document.getElementById("root"));








function Restrict_MainComponent()
{
  return <div>

    <Restrict_sideComponent  NumberValue_prop1={23} isBoolean_prop2 = {false} ></Restrict_sideComponent>

  </div>
}

type number_variable = 
{
  NumberValue_prop1 : number,
  isBoolean_prop2 : boolean,
 }

function Restrict_sideComponent({
  NumberValue_prop1,isBoolean_prop2} : number_variable)
{
  return <div>
    

    <h3> value of NumberValue_prop1 = {NumberValue_prop1}  </h3>

    <h3> Is number a boolean value   { {isBoolean_prop2} ? "yes" : "no" }  </h3>

    

  </div>
}

ReactDOM.render(<Restrict_MainComponent></Restrict_MainComponent>,document.getElementById("root"));











//Extracting the props from a different component only props , but not values 
//when done it will list out all the props names when props. is used in the derived component 

function Extract_Component_Main()
{

  return <div>

    <h3> Welcome to Extract_Component</h3>

    <Original_Component_sub  stringValue = {"Hyderabad"} BooleanValue = {true} NumberValue ={25} ></Original_Component_sub>


  </div>
}

type extract_type = 
{
  stringValue : string,

  BooleanValue? : boolean ,

  NumberValue : number
}


function Original_Component_sub(props : extract_type)
{
    return <div>

      <h2> Welcome to original component implementation </h2>

      <h3> Welcome to {props.stringValue}  </h3>

      <h3> Boolean value present =  {props.BooleanValue}  </h3>

      <h3> Number given =  {props.NumberValue}  </h3>

     

    </div>
}


const Extract_Component= function(props : React.ComponentProps<typeof Original_Component_sub >)
{

  //here when props and dot is used props.  it will list out all the derived props from the extracted component

  return <div>

{props.BooleanValue ? "Boolean value is present" : "Boolean value is not present"}

<br></br>

{props.stringValue}

<br></br>

{props.NumberValue}


  </div>

}

ReactDOM.render(<Extract_Component stringValue={'Sending hello message '} NumberValue={25} ></Extract_Component>,document.getElementById("root"));



