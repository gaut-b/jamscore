import React from 'react';
import SignMenu from '../signMenu/signMenu.component';
import './menu.styles.scss';

const Menu = (props) => {
    return (
        <div className="wrapper" >
            <SignMenu />

            <div className="container" >
                <SignMenu />
            </div>
            <div className="container" >
                <SignMenu />
            </div>
            <div className="container" >
                <SignMenu />
            </div>
        </div>
    );
};

export default Menu;