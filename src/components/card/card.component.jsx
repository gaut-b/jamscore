import React from 'react';

import './card.styles.scss';

const Card = ({title, children}) => {

    return (
        <div className="card">
            { (title)
                ? <div className="card__title">
                    <h1>{title}</h1>
                    <hr className="separator" />
                </div>
                : null
            }
            {children}
        </div>
    );
};

export default Card;