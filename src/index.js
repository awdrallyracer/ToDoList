import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './state';
import reRendererTree from './render';

reRendererTree(state);

reportWebVitals();
