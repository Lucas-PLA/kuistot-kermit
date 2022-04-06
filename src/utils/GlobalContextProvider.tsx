import React, { createContext, useState } from 'react';

import { LS_TOKEN_KEY } from 'const/localStorage.const';

type Props = {
	children: JSX.Element
};

interface State {
	token: string
}

type Context = {
	state: State,
	dispatch: {
		setToken: (newToken: string) => void;
	}
} | null;

export const GlobalContext = createContext<Context>(null);

function GlobalContextProvider({ children }: Props) {
	const [state, setState] = useState<State>(loadLocalStorage);

	const setToken = (newToken: string) => setState({...state, token: newToken});

	return (
		<GlobalContext.Provider value={{state: state, dispatch: {setToken: setToken}}}>
			{children}
		</GlobalContext.Provider>
	);
}

function loadLocalStorage() : State {
	const token : string = localStorage.getItem(LS_TOKEN_KEY) || "";
	return ({token: token});
}

export default GlobalContextProvider;