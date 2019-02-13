import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dependency from './Dependency'

jest.mock('./Dependency');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(Dependency.getResult()).toBe('mockedResult');
});
