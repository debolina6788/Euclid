import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {
	setSelectedTab,
} from 'Actions';
import {
	getSelectedTab,
} from 'Selectors';

import { scroller } from "react-scroll";

const Header = (props) => {
  const { dispatchSetSelectedTab, selectedTab } = props
  const onTabClick = (event) => {
    console.log("event.target.name",event.target.name);
    dispatchSetSelectedTab(event.target.name);
  }

  useEffect(() => {
    console.log("selectedTab",selectedTab)
    scroller.scrollTo(selectedTab, {
      smooth: 'easeInOutQuart',
    });
  }, [selectedTab]);

	return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Brand</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" name="aboutPage" onClick={onTabClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="infoPage" onClick={onTabClick}>Info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="dataTypePage" onClick={onTabClick}>Data Types</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" name="contactPage" onClick={onTabClick}>Contact Us</a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </React.Fragment>
	);
};



export default connect(
	state => ({
		selectedTab: getSelectedTab(state),
	}),
	{
		dispatchSetSelectedTab: setSelectedTab,
	},
)(Header);
