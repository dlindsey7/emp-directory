import * as React from 'react';
import Employee from './Employee';

interface Company {
    name: string;
}

export default class Directory extends React.Component<Company> {

    render() {
        return (
            <div>
            <h1>{this.props.name}</h1>
            <Employee firstName={'hi'}/>
            </div>
        );
    }
};