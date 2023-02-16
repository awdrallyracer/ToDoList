import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoList from './Components/ToDoList/ToDoList';
import Text from './Components/Text/Text';
import state from './state';
import reRendererTree from './render';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// <Text state = {state} />
// root.render(
//   <React.StrictMode>
//     <ToDoList state={state} />
//   </React.StrictMode>
// );

reRendererTree(state);

reportWebVitals();
