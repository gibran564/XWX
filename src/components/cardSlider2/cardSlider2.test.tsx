import React from 'react';
import ReactDOM from 'react-dom';
import CardSlider2 from './CardSlider2';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardSlider2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});