import React from 'react';

export class SomeComponent extends React.Component
{
    render() {
        return <h3>Welcome to Revision </h3>
    }
}


export class Employee_redux extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {salary_redux : 15000};

    }



    IncrementSalary = () =>
    {
        this.setState({salary_redux : this.state.salary_redux + 10000});
    }

    DecrementSalary= () =>
    {
        this.setState({salary_redux : this.state.salary_redux - 10000});
    }

    render()
    {

        return <div>

            <h2>Welcome to Employee component , discussing about Redux </h2>

            <label>Salary mentioned = {this.state.salary_redux} </label>

            <button onClick={this.IncrementSalary}>Increment Salary</button>

            <button onClick={this.DecrementSalary}>Decrement Salary</button>

        </div>
    }

}

