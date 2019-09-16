import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Directory from './Directory';
import Employee from './Employee';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing Directory', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Directory />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// This really simple test also checks that the app won't fail on an empty 
// employee object
it('renders without crashing Employee', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Employee employee={{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
