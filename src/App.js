import React from 'react';

import { Form } from './components'

import './App.css';

const inputs = [
  {
    htmlFor: "add-student",
    label: "Add Student",
    placeholder: "Name"
  },
  {
    disabled: true,
    htmlFor: "random-student",
    label: "Random Student",
    placeholder: "(Random Student)"
  }
]

const buttons = [
  {
    buttonText: "Add Student",
    className: "add-btn"
  },
  {
    buttonText: "Random Student",
    className: "random-btn"
  }
]

export const App = () => {
  return (
    <Form inputs={inputs} buttons={buttons} />
  );
}
