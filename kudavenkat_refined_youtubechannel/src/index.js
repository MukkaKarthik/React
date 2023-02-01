import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';


import "./index.css";
//import {useFormik} from "formik"


//import {Employee_redux} from "./EmployeeComponent" // if .js extension is used it works the same , no problem occurs if or not using .js file 



//  import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

/* 

//Using Javascript extension 

 const element1 = <h1 className='testJSExtension'>First : Welcome to React programming using Javascript extension syntax</h1>

ReactDOM.render(element1,document.getElementById("root"));

//Here h1 is the element type and class name attribute is the property 

const element2 = <h1 className='testJSExtension'>Root Node  : Welcome to React programming using Javascript extension syntax</h1>

ReactDOM.render(element2,document.getElementById("root"));

//here we are rendering second element into the same container . Hence last element will have precedence while rendering elements on the browser 
 


 //rendering elements on different containers

const element3 = <h1>[Root1 Node ]First : Welcome to React programming , revision started for React project</h1>

ReactDOM.render(element3,document.getElementById("root1"));

//Here h1 is the element type and class Name attribute is the property 

const element4 = <h1>[Root2 Node ]Second : Welcome to React programming using Javascript extension syntax</h1>

// className='testJSExtension'

ReactDOM.render(element4,document.getElementById("root2"));
 



//It is always a good practice to render all the contents into a single container rather than creating multiple containers 

const CommonElement = <div className='testJSExtension'>

  <h1>CommonFirst : Welcome to React programming using Javascript extension syntax</h1>
  <h1>CommonSecond : Welcome to React programming using Javascript extension syntax</h1>

</div>

ReactDOM.render(CommonElement,document.getElementById("root3"));



 */

/* 
const a = <h1>trying something on my own</h1>
ReactDOM.render(a,document.getElementById("CommonRoot"));

 */



/* // Working on basic functions

function BasicFunction(EmployeeName)
{
return <div>
  {EmployeeName.firstName}
</div>

}

ReactDOM.render(<BasicFunction firstName="facebook developer"></BasicFunction>,document.getElementById("CommonRoot"));
 */




 /* 
 //Working on functional Components 

function DisplayEmployeeDetails(student)
{
  return <div>

    <h4>Employee ID : {student.id_attribute}  </h4>
    <h4>Employee Name : {student.name_attribute}  </h4>
    <h4>Employee Location : {student.location_attribute}  </h4>
    <h4>Employee Salary : {student.Salary__attribute  }  </h4>

  </div>
}

//student is the object which contains all the attribute properties


const employeeDetails = <DisplayEmployeeDetails id_attribute = "234" 
name_attribute = "Mindtree Developer" location_attribute = "Bangalore" Salary__attribute = "37000"></DisplayEmployeeDetails>

//DisplayEmployeeDetails :- this is a user defined component , if started with small letter then React won't understand and hence output won't be displayed on the browser 


ReactDOM.render(employeeDetails,document.getElementById("CommonRoot"));
 */



/* 

//Now working on code reusability 

function DisplayEmployeeDetailsDepartment(empl)
{
  return <div>
      <h3>Working on code reusability and functional components </h3>
    <h4>Employee ID : {empl.id_attribute}  </h4>
    <h4>Employee Name : {empl.name_attribute}  </h4>
    <h4>Employee Location : {empl.location_attribute}  </h4>
    <h4>Employee Salary : {empl.Salary__attribute  }  </h4>
    <h4>Employee Department : {empl.department_attribute  }  </h4>


  </div>
}

const dept_variable = <DisplayEmployeeDetailsDepartment id_attribute = "234" 
name_attribute = "Mindtree Developer" location_attribute = "Bangalore" Salary__attribute = "37000"
 department_attribute = "Mechanical"></DisplayEmployeeDetailsDepartment>


 ReactDOM.render(dept_variable,document.getElementById("CommonRoot")); */











/* 
 

 //Working on class components 

 class Comp1ClassComponent extends React.Component{


  //output of this class will depend on the rendering using render method . Render is the only method to be used in a class component 

  //this.props contains the properties that got defined by the caller of this component . When we call this component we will be passing attributes and now those properties will be passed as an object to this prop 


  render()
  {
    return <div>

      <h2>Working on class components</h2>
      <h3>Employee Details : </h3>

      <h4>Employee ID : {this.props.id_attribute}  </h4>
    <h4>Employee Name : {this.props.name_attribute}  </h4>
    <h4>Employee Location : {this.props.location_attribute}  </h4>
    <h4>Employee Salary : {this.props.Salary__attribute  }  </h4>
    <h4>Employee Department : {this.props.department_attribute  }  </h4>



    </div>
  }
 }

 const Comp1_classVariable = <Comp1ClassComponent id_attribute = "234 class attribute" 
 name_attribute = "Mindtree Developer class attribute" location_attribute = "Bangalore class attribute" Salary__attribute = "37000 class attribute"
  department_attribute = "Mechanical class attribute"></Comp1ClassComponent>

  ReactDOM.render(Comp1_classVariable,document.getElementById("CommonRoot"));


  




  //class component reusability 
  class Comp1ClassComponentReUse extends React.Component{

    constructor(props)
    {
      super(props);
      
      //Now we are modifying property names , when done it will throw an error 
    //  this.props.name_attribute = "Google name changed from Mindtree";
      console.log(this.props);

    }
  
    render()
  {
    return <div>

      <h2>Working on class components Re-Usability</h2>
      <h3>Employee Details : </h3>

      <h4>Employee ID : {this.props.id_attribute}  </h4>
    <h4>Employee Name : {this.props.name_attribute}  </h4>
    <h4>Employee Location : {this.props.location_attribute}  </h4>
    <h4>Employee Salary : {this.props.Salary__attribute  }  </h4>
    <h4>Employee Department : {this.props.department_attribute  }  </h4>



    </div>
  }
 }
  
  

  const Comp1_classVariable_reUse = <Comp1ClassComponentReUse id_attribute = "234 class attribute reUSe" 
  name_attribute = "facebook Developer class attribute reUSe" location_attribute = "Bangalore class attribute reUSe" Salary__attribute = "37000 class attribute reUSe"
   department_attribute = "Mechanical class attribute reUSe"></Comp1ClassComponentReUse>
 
   ReactDOM.render(Comp1_classVariable_reUse,document.getElementById("CommonRoot"));
 
 */


/* 


    //State in React class components 


    class ClassComponent extends React.Component
    {
 
     state = {counter : 0,firstName : ""};
 
  PrintMessage = () =>
  {
    //this.counter = this.counter+1;
     this.setState({counter : this.state.counter+1,firstName : this.state.firstName + "firstName changed in set state "});
    alert("Executing print message function\n No of times button clicked = " + this.state.counter);
  };
 
      render()
      {
        return <div>
 
         <button onClick={this.PrintMessage}>click here to Print Message function </button>
 
         <h5>No of times button clicked = " + {this.state.counter}</h5>
 
          
 
        </div>
 
      }
 
      //here values are not being changed on the browser . when button is clicked multiple times . To overcome this problem , React introduces state where component outputs can be changed over time  
    
      //set state method for managing states . This method tells React that this component and it's children should be re-rendered  most updated state 
    
       //here state is a user defined object
    
    
     }
 
    const ClassComponent_variable = <ClassComponent></ClassComponent>
 
    ReactDOM.render(ClassComponent_variable,document.getElementById("CommonRoot"));
 
  */







    
  
/* 

  
   //Displaying Number of characters 

   class ClassComponent2 extends React.Component{

    constructor(props)
    {
      super(props);
      this.state = {CountAlphabets : "",FixedVariable : 15};
    }

    PrintLength(text_input) 
    {
        this.setState({CountAlphabets : "No of alphabets typed = " + text_input.length})
    }


    render()
    {
      return <div>

        <h2>Enter characters in the below text</h2>
       <input type="text" onChange = {e =>this.PrintLength(e.target.value)}></input>

       <br></br>
       <br></br>

       <label>{this.state.CountAlphabets}</label>
       <br></br>
       <br></br>

       Fixed Variable property in state JSON object : <label>{this.state.FixedVariable}</label>


       

      </div>
    }

   }

   const ClassComponent2_variable = <ClassComponent2 ></ClassComponent2>

   ReactDOM.render(ClassComponent2_variable,document.getElementById("CommonRoot"));


//  although this property is not modified during flow, it is still rendered on the browser 

 */






/* 

class AppComponent extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      Name :"facebook Developer",
      Role : "Software developer",
      age : 23,
      IsWorkingStill : true
    }

  }

  
  render()
  {
    return <div>

      <h3>Welcome to app component</h3>


      <p>Employee Name : {this.state.Name} </p>

      
      <EmployeeComponent></EmployeeComponent>
     

    
    </div>
  }
}
  


class EmployeeComponent extends React.Component
{

  
  render()
  {
    return <div>

      <h3>Welcome to Employee component</h3>

      <label>Employee Name :   </label>
      <br></br>

      <SalaryComponent></SalaryComponent>
     

    </div>
  }
}
 

class SalaryComponent extends React.Component
{
  render()
  {
    return <div>

      <h3>Welcome to Salary component</h3>

      <label>Employee Name :  </label>
      <br></br>
     

    </div>
  }
}

const nested_components_variable = <AppComponent></AppComponent>
 
ReactDOM.render(nested_components_variable,document.getElementById("CommonRoot"));
 */




ReactDOM.render(<h2>Welcome to programming</h2>,document.getElementById("CommonRoot"));





/* class ControlledInput extends React.Component
{
  // constructor(props)
  // {
  //   super(props)
  // }

  state = {
      EmployeeName_India : "Initial Value Message displayed"
  }

   InputTextChanged(e)
  {

    this.setState({EmployeeName_India : e.target.value});

  }

  showNames_alert = () =>
  {
    alert("Input given = " + this.state.EmployeeName_India);
  }


  showMessage()
  {
    alert("Message given = ");
  }

  render()
  {
    return <div>

      <h3>Employee details : </h3>
      <label>Enter input text :  </label>
      <input type="text" name="input_HTMLtag" value={this.state.EmployeeName_India}></input>

      <h3> {this.state.EmployeeName_India} </h3>

      <br></br>
      <br></br>

      <button onClick={this.showNames_alert}>click for getting names in alert function</button>

      <button onClick={this.showMessage} >click for revision</button>


    </div>
  }
}


const emp_name_variable = <ControlledInput></ControlledInput>


ReactDOM.render(emp_name_variable,document.getElementById("CommonRoot"));
 */















 






/* //Now extending the same functionality to multiple input HTML tags
//Below code not working 



class Controlled_input_extended extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  state = {
    Employee_extendedDetails : {
      Employee_extendedDetails_Name : "",
      Employee_extendedDetails_Location : "",
      Employee_extendedDetails_Salary : "",
      Employee_extendedDetails_Age : "",
      Employee_extended_stillExists : "",

    
    
    }
      
  }

  InputTextChanged = (e) =>
  {

    const n = e.target.name;
    const v = e.target.value;

    this.setState(
      // { Employee_extendedDetails :{[e.target.name] :  e.target.value}
      {[n] : v
      
    
      
      //Now this employee object contains all previous property values and current changed n ad v value 
      //We get all previous used by using spread operator + we should add a new property to employee object and name of this property will be the input element name which we have obtained here 
      // and this property will hold the value of that respective input element 
      
      
      // Employee_extendedDetails_Name : e.target.value,
      // Employee_extendedDetails_Location : e.target.value,
      // Employee_extendedDetails_Salary : e.target.value,
      // Employee_extendedDetails_Age : e.target.value,
      // Employee_extended_stillExists : e.target.value
    });

  }

  showNames_alert = () =>
  {
    alert("Name given = " + this.state.Employee_extendedDetails_Name + "\nLocation given = " + this.state.Employee_extendedDetails_Location
     + "\nSalary given = " + this.state.Employee_extendedDetails_Salary + "\nAge given = " + this.state.Employee_extendedDetails_Age + "\nstillExists given = " + this.state.Employee_extended_stillExists);

     console.log(this.state.Employee_extendedDetails)
 
    }

  render()
  {
    return <div>

      <h3>Employee details : </h3>
      
      <form>

      <label>Enter Employee extended Name :  </label>
      <input type="text" name="Employee_extendedDetails_Name" value={this.state.Employee_extendedDetails.Employee_extendedDetails_Name} onChange={this.InputTextChanged} ></input>
      <br></br>
      <br></br>

      <label>Enter Employee extended Location :  </label>
      <input type="text" name="input_HTMLtag2" value={this.state.Employee_extendedDetails.Employee_extendedDetails_Location} onChange={this.InputTextChanged}></input>
      <br></br>
      <br></br>


      <label>Enter Employee extended Salary :  </label>
      <input type="text" name="input_HTMLtag3" value={this.state.Employee_extendedDetails.Employee_extendedDetails_Salary} onChange={this.InputTextChanged}></input>
      <br></br>
      <br></br>


      <label>Enter Employee extended age :  </label>
      <input type="text" name="input_HTMLtag4" value={this.state.Employee_extendedDetails.Employee_extendedDetails_Age} onChange={this.InputTextChanged}></input>
      <br></br>
      <br></br>


      <label>Enter Employee extended IsWorkingStill :  </label>
      <input type="text" name="input_HTMLtag5" value={this.state.Employee_extendedDetails.Employee_extended_stillExists} onChange={this.InputTextChanged}></input>
      <br></br>
      <br></br>


      <button type='submit' onClick={this.showNames_alert}>click for getting all typed fields in alert function</button>



      </form>
      

    </div>
  }
}


const emp_name_variable_extended = <Controlled_input_extended></Controlled_input_extended>


ReactDOM.render(emp_name_variable_extended,document.getElementById("CommonRoot")); */





/* class FragmentComponent extends React.Component{

  render()
  {
    return(<React.Fragment>    
      <h1>1st container</h1>
    <h1>2nd container</h1>

    </React.Fragment>
  )

      
  }
}

const Fragment_variable = <FragmentComponent></FragmentComponent>

ReactDOM.render(Fragment_variable,document.getElementById("CommonRoot"));
 */




/* 

 //React.Fragment can also be represented using empty tags

class FragmentComponentEmpty extends React.Component{

  render()
  {
    return(<React.Fragment>    
      <h1>1st container empty</h1>
    <h1>2nd container empty</h1>

    </React.Fragment>
  )

      
  }
}

const Fragment_variable_empty = <FragmentComponentEmpty></FragmentComponentEmpty>

ReactDOM.render(Fragment_variable_empty,document.getElementById("CommonRoot"));



//When referrals are removed , then once increment is performed , system won't accept any new value , hence we use referral object . where we can any number of digits at any time and perform addition from that point of time 
//Refs in react */


 







/* 


class RefComponent extends React.Component{

  constructor(props)
  {
    super(props);
       this.state = {quantity_stateObject : 15}
  }
  
  performIncrement = (e) =>
  {
      this.setState({quantity_stateObject : this.state.quantity_stateObject + 5});
  
     //When ref is passed to an element , that element will be accessible using current 
  
     alert(this.state.quantity_stateObject + 5);
  }
  
  render()
  {
    
    return <div>
  
    <label>Enter a number : </label>
  
    <input type="text" value={this.state.quantity_stateObject}></input>
  
    <br></br>
    <br></br>
  
    Final Number given = <label >{this.state.quantity_stateObject}</label>
  
    <br></br> 
  
  
      
  <br></br>
  <br></br>
  
    
  <br></br>
  
    <button onClick={this.performIncrement}>click here for addition</button>
  
  
    </div>
  }
  
  }
  
  const ref_variable = <RefComponent></RefComponent>
  
  ReactDOM.render(ref_variable,document.getElementById("CommonRoot"));
  

 */




/* 
  

//working on some element to be focused when browser is loaded 


class LoginComponent extends React.Component{

  constructor(props)
  {
    super(props);
    this.userNameReferenceObject = React.createRef();

    
  }

  //this method need not be called but it works as a life cycle component where it keeps on working as long as session is present 

  componentDidMount()
  {
    this.userNameReferenceObject.current.focus();
  }

  render()
  {
    return <div>

      <label>UserID : </label>
      <input type="text" ref={this.userNameReferenceObject}></input>
      <br></br>

      <label>Password : </label>
      <input type="text" ref={this.userNameReferenceObject}></input>
      <br></br>


    </div>
  }

}

const login_variable = <LoginComponent></LoginComponent>

ReactDOM.render(login_variable,document.getElementById("CommonRoot"));
 */







/* 



//refs are also used in few other cases such as 
// 1) Playing Video
// 2) Triggering imperative animations 
// 3) Integrating with third party libraries


//We can pass refs to HTML elements also




// Use case :- when clicked on something from summary component hence focus should go on Elevator_component

//for this we pass reference objects from parent to child component . This is called forwarding refs


//working on forwarding refs to DemoComponent variable 


const DemoComponent = React.forwardRef((props,ref) =>
{
 
  function testClick()
  {
  //  ref.current.focus();
  }

  return <div>
    <button onClick={testClick}>Click here</button>
  </div>
}); 


class ElevatorComponent extends React.Component{

  constructor(props)
  {
    super(props);
    this.elevator_reference_object = React.createRef();
  }

  focusCurrentRef()
  {
    this.elevator_reference_object.current.focus();
  }

  
  render()
  {
    return <div>

        <label>Elevator Name Elevator_component class : </label> 
        <input type="text" ref={this.elevator_reference_object} onFocus={this.focusCurrentRef}></input>
        <br></br>

        <label>Elevator Speed Elevator_component class : </label> 
        <input type="text" ></input>
        <br></br>

        <label>Elevator Load Elevator_component class : </label> 
        <input type="text" ></input>
        <br></br>

        <SummaryComponent innerRef = {this.elevator_reference_object}></SummaryComponent>

        <DemoComponent ref={this.elevator_reference_object}></DemoComponent>


    </div>

  }


}

class SummaryComponent extends React.Component{

  
  // constructor(props)
  // {
  //   super(props);

  // }

  focusCorrespondingElement = () =>{
    this.props.innerRef.current.focus()
  }

  render()
  {

    return <div>

      <h2>Summary details = </h2>

<p >
<label>Elevator Name Summary_Component class : <b onClick={this.focusCorrespondingElement} >Philips</b></label> 
<br></br>

<label>Elevator Speed Summary_Component class : <b onClick={this.focusCorrespondingElement} >10 m/s</b></label> 
<br></br>

<label>Elevator Load Summary_Component class : <b onClick={this.focusCorrespondingElement}>550Kgs </b></label> 
<br></br>

</p>



    </div>
  }

}

const Elevator_variable = <ElevatorComponent></ElevatorComponent>
ReactDOM.render(Elevator_variable,document.getElementById("CommonRoot")); */







/* 

//Implementing the same using functional components 

function focus_component()
{

  let focus_variable = null;

  function focusTextElement()
  {
    focus_variable.focus();
  }


    return(
    
    <div>
      <label>Sample element to focus : </label>
      <input type="text" ref={e => focus_variable = e}></input>
      <input type="button" value = "Click here to focus" onClick={focusTextElement}></input> 
     
    </div>

    // don't use this. as this is not a class 
 );
    

}

const f_variable = focus_component();
ReactDOM.render(f_variable,document.getElementById("CommonRoot")); */






/* 


// refs cannot be attached to functional components , they can be attached  to only class components or HTML tags , this is because functional components are not instances .

//In order to attach refs to a functional component , we should forward refs to a functional component or convert class component to functional component 



class Employee extends React.Component
{

  constructor(props)
  {
    super(props)
   // this.setState({ID : 101}); // this will throw an error , check the error in the logs of the console 

   this.state = {Name : ""}
  }

  ChangeName = (event_customObject) =>
  {
    this.setState({Name : event_customObject.target.value});
  }
  render()
  {
    return <div>

          <h2>Welcome to Employee Component</h2>

          <label>Employee Name : </label> <input type="text" value={this.state.Name} onChange={this.ChangeName}></input>
          <br></br>
          <br></br>

          <label>Employee name = {this.state.Name} </label>

        </div>
    
  }
}

const e1 = <Employee></Employee>
ReactDOM.render(e1,document.getElementById("CommonRoot")); */


















// Employee component is added to DOM tree . This is known as mounting

// Most commonly life cycle method is constructor . Constructor of the ReactComponent is called before it is mounted 


//import { useState } from 'react'; writing it at the top as compiler is suggesting to write at the top




/* 
  


function HookFunctionalComponent()
{


  //removing multiple state variables assigned separately and grouping them together

  const [state_variable_name,setName_changeValue_functionName] = useState("Assigning default name =  Google tech"); // it returns 2 values , one is variable and the other is a function which we can use to render values 

  function setName_functionName_name(event_customObject)
{
  setName_changeValue_functionName(event_customObject.target.value);
}


const [state_variable_location,setLocation_changeValue_functionName] = useState("Assigning default location = Mumbai"); // it returns 2 values , one is variable and the other is a function which we can use to render values 

  function setName_functionName_location(event_customObject1)
{
  setLocation_changeValue_functionName(event_customObject1.target.value);
}
 
  
  
  //first represents state variable and the second represents function


  const [employeeDetails_hook,changeAllDetails] = useState(
    {
      Name_JSONObject1 : "Mindtree hook developer",
      Location_JSONObject1 : "Hook Bangalore",
      Salary_JSONObject1 : 23000,
      ID_JSONObject1 : "23",
        
  
  }
    );
  

    function changeEmployee_information(event_customObject2)
    {
      //Names of all input elements are kept as the property names of the useState objet so that we can use them as property names while changing values
      //changeAllDetails({[event_customObject2.target.name]:event_customObject2.target.value}) 
      
      //this function will show only corresponding values in the label , to make all visible we use spread operator 

      changeAllDetails({...employeeDetails_hook,[event_customObject2.target.name]:event_customObject2.target.value}) 
    }

  return <div>

    <h2>Welcome to functional hooks programming language using useState method</h2>


 <p> 

<textarea value = {state_variable_name} onChange={setName_functionName_name}></textarea>

<br></br>

<label>Employee name is :- <b>{state_variable_name} </b> </label>

</p>

<p> 

<textarea value = {state_variable_location} onChange={setName_functionName_location}></textarea>

<br></br>

<label>Employee Location is :- <b>{state_variable_location} </b> </label>

</p> 


<p> 

<textarea value = {employeeDetails_hook.Name_JSONObject1} onChange={changeEmployee_information} name="Name_JSONObject1"></textarea>

<br></br>

<label>Employee name is :- <b>{employeeDetails_hook.Name_JSONObject1} </b> </label>

</p>

<p> 

<textarea value = {employeeDetails_hook.Location_JSONObject1} onChange={changeEmployee_information} name="Location_JSONObject1"></textarea>

<br></br>

<label>Employee Location is :- <b>{employeeDetails_hook.Location_JSONObject1} </b> </label>

</p>

<p> 

<textarea value = {employeeDetails_hook.Salary_JSONObject1} onChange={changeEmployee_information} name="Salary_JSONObject1"></textarea>

<br></br>

<label>Employee Salary is :- <b>{employeeDetails_hook.Salary_JSONObject1} </b> </label>

</p>

<p> 


<br></br>

<label>Employee ID is :- <b>{employeeDetails_hook.ID_JSONObject1}</b> </label>

</p>


  </div>;
   
}

const hook_variable = <HookFunctionalComponent></HookFunctionalComponent>;
ReactDOM.render(hook_variable,document.getElementById("CommonRoot"));

 */







/* 



//Interaction between react functional components i.e passing data among components 

function EmployeeParentComponent()
{


  const [state_variable_parent,function_useState] = useState(
   
    {Id_parent : "",
    Name_parent : "",
    Location_parent : "",
    Salary_parent : ""
  }
  

    ); 

    function changeSalary_emp_parent(ev_object)
    {
      function_useState({...state_variable_parent,[ev_object.target.name] : ev_object.target.value});
      
    }

  return <div>

  <h2>Welcome to Employee Component</h2>

  Employee ID : <input type="text" name = "Id_parent" onChange={changeSalary_emp_parent} ></input>
    Employee ID input given : <label>value={state_variable_parent.Id_parent}</label>
  <br></br>
  <br></br>

  Employee Name : <input type="text" name = "Name_parent" onChange={changeSalary_emp_parent} value={state_variable_parent.Name_parent}></input>
    Employee Name input given : <label>value={state_variable_parent.Name_parent}</label>
  <br></br>
  <br></br>

  Employee Location : <input type="text" name = "Location_parent" onChange={changeSalary_emp_parent} value={state_variable_parent.Location_parent}></input>
    Employee Location input given : <label>value={state_variable_parent.Location_parent}</label>
  <br></br>
  <br></br>

  Employee Salary : <input type="text" name = "Salary_parent" onChange={changeSalary_emp_parent} value={state_variable_parent.Salary_parent}></input>
    Employee Salary input given : <label>value={state_variable_parent.Salary_parent}</label>
  <br></br>
  <br></br>

   <SalaryChildComponent salaryChangeFunction_object = {changeSalary_emp_parent} salaryValue_object = {state_variable_parent.Salary_parent}></SalaryChildComponent>

    
    
   
  </div>

 // {alert(document.readyState)} //We use this to get the status of the DOM  

}


const SalaryChildComponent = function({salaryValue_object,salaryChangeFunction_object})
{
  return <div>

  <h2>Salary Break Up details</h2>

   Employee Salary : <input type="text" name = "Salary_parent" onChange={salaryChangeFunction_object} value={salaryValue_object}></input>
  Employee Salary input given : <label> value={salaryValue_object}</label>
  <br></br>
  <br></br>

  
  </div>
}

const emp_parent_variable = <EmployeeParentComponent></EmployeeParentComponent>
ReactDOM.render(emp_parent_variable,document.getElementById("CommonRoot"));

 */







/* 


//Nesting of components and using useContext() menu


//Passing data from parent to child components 

const context_object = React.createContext({});

  

function AppComponentUseContext()
{


  
  const [app_property_variable] = useState({
    Name : "Mindtree developer context functional components",
    Location : "context functional components Bangalore",
    ID : 24,
      });

  return <div>

  <h2>Welcome to app component</h2>

  <context_object.Provider value={app_property_variable}> 
  <EmployeeComponentUseContext></EmployeeComponentUseContext>
  </context_object.Provider>
 
  </div>
}

function EmployeeComponentUseContext(app_property_variable)
{

 const useContext_pipelineObject_employeeComponent = useContext(app_property_variable); 
  return <div>

  <h2>Welcome to employee component</h2>
  
  Name details got from pipeline : <label>{useContext_pipelineObject_employeeComponent.Name}</label>
  <br></br>
  <br></br>

  Location details got from pipeline : <label>{useContext_pipelineObject_employeeComponent.Location}</label>
  <br></br>
  <br></br>

  ID details got from pipeline : <label>{useContext_pipelineObject_employeeComponent.ID}</label>
  <br></br>
  <br></br>

    <context_object.Provider value={useContext_pipelineObject_employeeComponent}>
   <SalaryComponentUseContext></SalaryComponentUseContext> 
  </context_object.Provider> 
   

  </div>
}

  function SalaryComponentUseContext(useContext_pipelineObject_employeeComponent)
{

const useContext_pipelineObject_SalaryComponent = useContext(useContext_pipelineObject_employeeComponent);
  return <div>

  <h2>Welcome to salary component</h2>

  Does User exists details got from pipeline?  : <label>{useContext_pipelineObject_SalaryComponent.DoesExists}</label>

  </div>
} 
 

ReactDOM.render(<AppComponentUseContext></AppComponentUseContext>,document.getElementById("CommonRoot"));

 */











//Passing data from child to parent components 

var context_object_refined = React.createContext({});
  

function AppComponentUseContextRefined()
{
  
  const [app_property_variable] = useState({
    "Name" : "Mindtree developer context functional components .react framework",
    Location : "context functional components Bangalore .react framework",
    ID : 24,
    DoesExists : true + " yes is present",
    Salary : "23000"
  });

  return <div>

  <h2>Welcome to app component</h2>

   <context_object_refined.Provider value={app_property_variable
  //  data_function : app_function
}> 
  <EmployeeComponentUseContextReDefined></EmployeeComponentUseContextReDefined>
  </context_object_refined.Provider>
  
  </div>
}

function EmployeeComponentUseContextReDefined(context_object_refined)
{

 
  return <div>

  <h2>Welcome to employee component</h2>
  
  Name details got from pipeline :  <label>{context_object_refined.Name}</label> 
  <br></br>
  <br></br>

  Location details got from pipeline : <label>{context_object_refined.Location}</label>
  <br></br>
  <br></br>

  ID details got from pipeline : <label>{context_object_refined.ID}</label>
  <br></br>
  <br></br>

     <context_object_refined.Provider value={context_object_refined}>
  <SalaryComponentUseContext></SalaryComponentUseContext>
  </context_object_refined.Provider>
    

  </div>
}

  function SalaryComponentUseContext(context_object_refined)
{

  
const useContext_pipelineObject_SalaryComponent_refined = useContext(context_object_refined);

/* function updateSalary()
  {
    useContext_pipelineObject_SalaryComponent_refined.data_function({...useContext_pipelineObject_SalaryComponent_refined.data_property,Salary : 50000});
  } */

  return <div>

  <h2>Welcome to salary component</h2>

  Does User exists details got from pipeline?  : <label>{useContext_pipelineObject_SalaryComponent_refined.data_property.DoesExists}</label>

  <br></br>
  <br></br>

  Salary details are : <label> {useContext_pipelineObject_SalaryComponent_refined.data_property.Salary} </label>

  <br></br>
  <br></br>

    {/* <button onClick={updateSalary}>Update Employee Salary</button> */}
  </div>
} 
 

ReactDOM.render(<AppComponentUseContextRefined></AppComponentUseContextRefined>,document.getElementById("CommonRoot"));

