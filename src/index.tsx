import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from 'mocking/server';
import log, { LogLevelDesc } from 'loglevel';

import { StyledEngineProvider } from '@mui/material/styles';

if (process.env.NODE_ENV === "development") {
	makeServer({environment: "development"});
}

log.setLevel((process.env.LOG_LEVEL || "error") as LogLevelDesc);

ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
