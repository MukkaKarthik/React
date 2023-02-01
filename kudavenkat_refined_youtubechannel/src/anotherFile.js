import React,{useContext, useEffect, useState,} from 'react';
import ReactDOM, { render} from 'react-dom';


import "./index.css";
import {useFormik} from "formik"


import {Employee_redux} from "./EmployeeComponent" // if .js extension is used it works the same , no problem occurs if or not using .js file 



















//import {Employee_redux} from "./EmployeeComponent" .. this should be imported at the starting of the file as React is throwing an error , hence writing at the top 


ReactDOM.render(<Employee_redux></Employee_redux>,document.getElementById("CommonRoot"));

