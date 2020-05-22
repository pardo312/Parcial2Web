import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import messages_es from "./locales/es.json";
import messages_en from "./locales/en.json";

import * as serviceWorker from './serviceWorker';

const messages = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];
console.log(language);
ReactDOM.render(
	<IntlProvider locale={language} json={messages[language]}>
		<Navbar/>
		<div style={{marginLeft:"15rem",marginRight:"15rem", marginTop:"5rem"}}>
		<MovieList/>
		</div>	
	</IntlProvider>, 
	document.getElementById("root")
);

serviceWorker.register();