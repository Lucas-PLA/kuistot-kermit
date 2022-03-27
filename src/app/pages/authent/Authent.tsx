import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { authenticate } from '../../script/requests';

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
		<Card>
			<CardContent>
				<TextField
					id="outlined-basic"
					variant="outlined"
					label="login"
					value={username}
					onChange={(event) => setUsername(event.target.value)}/>
				<TextField
					id="outlined-basic"
					variant="outlined"
					label="mot de passe"
					value={userPw}
					onChange={(event) => setUserPw(event.target.value)}/>
			</CardContent>
			<CardActions>
				<Button onClick={() => authenticate(username, userPw)}>Login</Button>
			</CardActions>
		</Card>
	);
}

export default Authent;