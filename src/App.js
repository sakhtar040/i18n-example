import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locale: LOCALES.ENGLISH
		};

		this.onChangeLocale.bind(this);
	}

	onChangeLocale = locale => {
		switch (locale) {
			case "ENGLISH":
				this.setState({ locale: LOCALES.ENGLISH });
				break;

			case "FRENCH":
				this.setState({ locale: LOCALES.FRENCH });
				break;

			default:
				this.setState({ locale: LOCALES.ENGLISH });
		}
	};

	render() {
		return (
			<I18nProvider locale={this.state.locale}>
				<div className="App">
					<header className="App-header">
						<FormattedMessage id="hello" />
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							<FormattedMessage
								id="edit"
								values={{ path: <code>src/App.js</code> }}
							/>
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						<br />
						<button onClick={() => this.onChangeLocale("ENGLISH")}>
							ENGLISH
						</button>
						<br />
						<button onClick={() => this.onChangeLocale("FRENCH")}>
							FRENCH
						</button>
					</header>
				</div>
			</I18nProvider>
		);
	}
}

export default App;
