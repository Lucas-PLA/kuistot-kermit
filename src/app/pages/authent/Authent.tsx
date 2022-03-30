import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { authenticate } from '../../script/requests';

import './Authent.css';

function Authent() {
	// UseMemo ?
	// Pourquoi pas de typecheck sur le onChange ?
	// Typographie sur les textes
	const [username, setUsername] = useState('');
	const [userPw, setUserPw] = useState('');

	if (localStorage.getItem("auth-token")) {
		return <Navigate to="/" replace />;
	}

	return (
		<div id="background">
			<form id='authent-form'>
				<h2>Authentifiez-vous !</h2>
				<TextField
					id="outlined-basic"
					className="login-form-element"
					variant="outlined"
					label="login"
					value={username}
					onChange={(event) => setUsername(event.target.value)}/>
				<TextField
					id="outlined-basic"
					className="login-form-element"
					variant="outlined"
					label="mot de passe"
					value={userPw}
					onChange={(event) => setUserPw(event.target.value)}/>
				<Button className="login-form-element" variant="contained" onClick={() => authenticate(username, userPw)}>Login</Button>
			</form>
		</div>
	);
}

export default Authent;