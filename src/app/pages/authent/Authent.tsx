import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { authenticate } from '../../script/requests';
import { GlobalContext } from '../../utils/GlobalContext';

import './Authent.css';

//TODO :
// - Type pour la requête

function Authent() {
	console.log("rerender");
	const context = useContext(GlobalContext);
	const navigate = useNavigate();
	const location : any = useLocation();
	const from = location.state?.from?.pathname || "/";
	
	const [username, setUsername] = useState('');
	const [userPw, setUserPw] = useState('');

	const doAuthenticate = () => {
		authenticate(username, userPw)
			.then(response => {
				context?.dispatch.setToken(response.data.token);
				navigate(from, { replace: true });
			})
			.catch(error => console.log(error));
	};

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
				<Button className="login-form-element" variant="contained" onClick={doAuthenticate}>Login</Button>
			</form>
		</div>
	);
}

export default Authent;