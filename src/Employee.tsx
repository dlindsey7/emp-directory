import * as React from 'react';

interface Person {
    firstName: string;
    /*lastName: string;
    title: string;
    email: string;
    location: string;
    icon: string;
    hobbies: string[];
    empID: number;
    phone: string;*/
}

export default class Employee extends React.Component<Person> {
    static defaultPerson: Person = {
        firstName: 'string'
    /*lastName: 'string',
    title: 'string',
    email: 'string',
    location: 'string',
    icon: 'string',
    hobbies: [],
    empID: 1,
    phone: 'string'*/
    };
    render() {
    return <h1>Name: {this.props.firstName}</h1>;
}
};