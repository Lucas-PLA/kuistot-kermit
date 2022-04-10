import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { authenticate } from 'script/requests';
import { GlobalContext } from 'utils/GlobalContextProvider';
import { LS_TOKEN_KEY } from 'const/localStorage.const';

import './Authent.css';

interface StateType {
	from: { pathname: string }
 }

function Authent() {
	const context = useContext(GlobalContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = (location.state as StateType)?.from?.pathname || "/";
	
	const [username, setUsername] = useState('');
	const [userPw, setUserPw] = useState('');

	const doAuthenticate = () => {
		authenticate(username, userPw)
			.then(response => {
				localStorage.setItem(LS_TOKEN_KEY, response.data.token);
				context?.dispatch.setToken(response.data.token);
				navigate(from, { replace: true });
			})
			.catch(error => console.log(error));
	};

	return (
		<div id="login-page__background">
			<form id='login__form'>
				<h2>Authentifiez-vous !</h2>
				<TextField
					id="outlined-basic"
					className="login__form-element"
					variant="outlined"
					label="login"
					value={username}
					onChange={(event) => setUsername(event.target.value)}/>
				<TextField
					id="outlined-basic"
					className="login__form-element"
					variant="outlined"
					label="mot de passe"
					value={userPw}
					onChange={(event) => setUserPw(event.target.value)}/>
				<Button className="login__form-element" variant="contained" onClick={doAuthenticate}>Login</Button>
			</form>
		</div>
	);
}

export default Authent;