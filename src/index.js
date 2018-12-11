import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";

const test = {
  backgroundColor: 'pink'
}

ReactDOM.render(<Router><App css={test} /></Router>, document.getElementById('root'));
registerServiceWorker();
