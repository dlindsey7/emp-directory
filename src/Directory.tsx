import React, { Component } from 'react';
import Employee from './Employee';

class Directory extends Component<any, any> {
  // Initialize the state
  constructor(props: any){
    super(props);
    this.state = {
      company: "TAZ Co",
      allowModification: false
    }
  }

  getEmployeeData = () => {
    fetch("https://randomuser.me/api/?results=50")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                isLoaded: true,
                employees: result.results
            });
        },
        // Handle error 
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
    )
  };

  getCompanyData = () => {
    fetch("http://localhost:3000/api/getCompany")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                company: result.name,
                allowModification: result.allowModification
            });
        },
        // Handle error 
        (error) => {
            this.setState({
                error
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
                {
                Object.values(employees).map((emp: any, key: any) => (
                    <div key={key}>
                    <Employee employee={emp}/>
                    </div>
                ))
                }
            </div>
        );
    }
  
}
};

export default Directory;