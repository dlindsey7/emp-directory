
import React, { Component } from 'react';
import icon from './spooky.jpg';

interface EmployeeProps {
    employee: Object
}

class Employee extends Component<EmployeeProps, any> {
    constructor(props: EmployeeProps){
        super(props);
        this.state = {
            employee : props.employee        
        };
    }

    render() {
        const {employee} = this.state;

            if (Object.keys(employee).length > 0) {

                return(
                    <div id="person">
                        <div id="name">
                            <img id="icon" src={employee.picture.thumbnail} alt={icon} height='56px' width='56px'/>
                            {employee.name.first} {employee.name.last}
                        </div>
                        <div>Associate</div>
                            <div id="info">{employee.email}</div>
                    </div>
                );
            }

            return <div>Invalid User</div>
        }
      
    }
  
  
  export default Employee;