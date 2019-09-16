import React, { Component } from 'react';
import Employee from './Employee';

class Directory extends Component<any, any> {
    // Initialize the state
    constructor(props: any){
        super(props);
        this.state = {
        company: "TAZ Co",
        allowModification: false,
        isLoaded: false,
        employees: []
        }
    }

    getEmployeeData = () => {
        // Mock employee data until there's data added to the backend
        fetch("https://randomuser.me/api/?results=50")
        .then( response => response.json())
        .then(
            // Set the app to loaded since the employee data is the most important
            (result) => {
                this.setState({
                    isLoaded: true,
                    employees: result.results
                });
            },
            // Set the error so that it can be displayed
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            },
        )
    };

    getCompanyData = () => {
        // Hardcoded to work with local development backend
        // TODO: Sort out cross domain error in production
        fetch("http://localhost:3000/api/getCompany")
        .then( response => response.json())
        .then(
            // Set company name and modification flag
            (result) => {
                this.setState({
                    company: result.name,
                    allowModification: result.allowModification
                });
            },
            // Handle error here with grace so that the backend isn't 
            // required to test the look of the frontend 
            (error) => {
                this.setState({
                    company: "Placeholder"
                })
            },
        )
    };

    componentDidMount(){
        this.getEmployeeData();
        this.getCompanyData();
    }
    render() {
        const {error, isLoaded, employees, company, allowModification} = this.state;
        // Only show add/delete buttons if the user is allowed to modify info
        const style = allowModification ? {} : {display: 'none'};
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div id="directory">
                    <h1>{company}</h1>
                    <button style={style}>Add Employee</button>
                    <button style={style}>Delete Employee</button>
                    { Object.keys(employees).length ? (
                        // Get the values because we're starting with an array structure
                        Object.values(employees).map((emp: any, key: any) => (
                            <div key={key}>
                                <Employee employee={emp}/>
                            </div>
                        ))
                    ) : (
                        <div>Missing employee information</div>
                    )
                    }
                </div>
            );
        }
    
    }
};

export default Directory;