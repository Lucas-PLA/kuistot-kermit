import React, { createContext, useState } from 'react';

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

const initialValue : State = {token: ""};
export const GlobalContext = createContext<Context>(null);

function GlobalContextProvider({ children }: Props) {
	const [state, setState] = useState<State>(initialValue);

	const setToken = (newToken: string) => setState({...state, token: newToken});

	return (
		<GlobalContext.Provider value={{state: state, dispatch: {setToken: setToken}}}>
			{children}
		</GlobalContext.Provider>
	);
}

export default GlobalContextProvider;