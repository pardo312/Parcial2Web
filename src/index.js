import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";
import messages_es from "./locales/es.json";
import messages_en from "./locales/en.json";

const messages = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];
console.log(language);
ReactDOM.render(
	<IntlProvider locale={language} messages={messages[language]}>
		<JobsList/>
	</IntlProvider>, 
	document.getElementById("root")
);