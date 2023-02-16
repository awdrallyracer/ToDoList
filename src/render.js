import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoList from './ToDoList';

let reRendererTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <ToDoList />
        </React.StrictMode>
    );
}

reportWebVitals();

export default reRendererTree;