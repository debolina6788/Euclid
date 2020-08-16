import React, {
	useState, useEffect,
} from 'react';

import { connect } from 'react-redux';
import {
	getSelectedTab,
} from 'Selectors';
import AboutPage from './about';
import InfoPage from './info';
import ContactPage from './contact';
import DatTypePage from './dataType';

import './home.scss';

const Home = () => {


	return (
		<div className="home" id="home-section">
			<AboutPage />
			<InfoPage />
			<DatTypePage />
			<ContactPage />
    </div>
	);
};



export default connect(
	state => ({
		selectedTab: getSelectedTab(state),
	}),
	{},
)(Home);
