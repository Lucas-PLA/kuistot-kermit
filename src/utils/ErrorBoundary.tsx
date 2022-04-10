import React, { ErrorInfo, ReactNode } from "react";

import log from 'loglevel';

type Props = {
	children: ReactNode;
	fallBackUI: ReactNode
}
type State = {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props : Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		log.error("une erreur est survenue : ", error, errorInfo);
	}

	render () {
		return (
			this.state.hasError ?
				(this.props.fallBackUI) :
				(this.props.children)
		);
	}
}

export default ErrorBoundary;