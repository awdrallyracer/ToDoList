import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoList from './Components/ToDoList/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRendererTree = (state) => {
    root.render(
      <React.StrictMode>
        <ToDoList />
      </React.StrictMode>
    );
}

reportWebVitals();

export default reRendererTree;