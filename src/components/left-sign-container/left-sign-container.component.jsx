import React from 'react';

import './left-sign-container.styles.scss';

const LeftSignContainer = ({ sign }) => {

    if (!sign) return null;

    return (
        <div className="left-container">
            {sign}
        </div>
    );

};

export default LeftSignContainer;