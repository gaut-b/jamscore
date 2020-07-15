import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../effects/useOnClickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

import './dropdown.styles.css';

const Dropdown = (props) => {

    const { list, toggleItem } = props;
    const ref = useRef();

    useOnClickOutside(ref, () => handleClickOutside());

    const [state, setState] = useState({
        listOpen: false,
    });

    const handleClickOutside = () => setState({...state, listOpen: false});

    const handleClick = (id, key) => {
        toggleItem(id, key)
        toggle()
    }

    const toggle = () => setState({...state, listOpen: !state.listOpen});

    if (list) {
        return (
            <div ref={ref} className="dd-wrapper">
                <div className="dd-header" onClick={() => toggle()}>
                    <div className="dd-header-title">{props.title}</div>
                    {state.listOpen
                        ? <FontAwesomeIcon icon={faAngleUp} className="angle-up" size="lg"/>
                        : <FontAwesomeIcon icon={faAngleDown} className="angle-down" size="lg"/>
                    }
                    </div>
                    {state.listOpen && <ul className="dd-list">
                        {list.map((item) => (
                            <li
                             className="dd-list-item"
                             key={item.id}
                             onClick={() => handleClick(item.id, item.key)}
                            >
                            {`${item.name}`}
                            {item.selected && <FontAwesomeIcon icon={faCheck}/>}
                            </li>
                        ))}
                </ul>}
            </div>
        );
    }

    return null;

};


export default Dropdown;