import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/utils/app_logo.svg';
import { ReactComponent as ChordIcon } from '../../assets/utils/chord_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faEdit, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './sideBar.styles.scss';



const SideBar = ({ history, linkUrl, match }) => {

    return (
        <nav className="sidebar">
            <div className="sidebar__logo">
                <Logo width='100%' height='100%'/>
            </div>
            <div className="sidebar__buttons">
                <button className="button">
                    <ChordIcon /><br></br>
                    Add Chord
                </button>
                <button className="button" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                    <FontAwesomeIcon icon={faEdit} className="signInLogo" size="lg"/>
                    <br></br>Edit
                </button>

                <button className="button">
                    <FontAwesomeIcon icon={faSave} className="signInLogo" size="lg"/>
                    <br></br>Save
                </button>
            </div>
            <div className="sidebar__buttons sidebar__buttons--log">
                <button className="button" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                    <FontAwesomeIcon icon={faSignInAlt} className="signInLogo" size="lg"/>
                    <br></br>Sign In
                </button>
            </div>
        </nav>
    );
};

export default withRouter(SideBar);