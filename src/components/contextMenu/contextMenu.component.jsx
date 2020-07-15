import React, { useState, useEffect, createRef } from 'react';
import './contextMenu.styles.css';

const ContextMenu = (props) => {
    var contextRef = React.createRef();
    const [state, setState] = useState({
        isVisible: false,
        x: 0,
        y: 0,
    });

    useEffect(() => {
        console.log(contextRef.current)
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            const newState = {
                ...state,
                isVisible: true,
                x: event.clientX,
                y: event.clientY,
            };
            setState(newState);
        });

        document.addEventListener('click', (event) => {
            if (contextRef.current) {
                if (contextRef.current.id === 'customContext') {
                    console.log(event.target.getAttribute('index'))
                    click(event.target.getAttribute('index'));
                }
            }

            event.preventDefault();
            const newState = {
                ...state,
                isVisible: false,
                x: 0,
                y: 0,
            };
            setState(newState);
        });
    }, []);

    const click = (index) => {
        if (props.items[index].callback) {
            props.items[index].callback();
        }
    };

    const returnMenu = (items) => {
        var myStyle = {
            'position': 'absolute',
            'top': `${state.y}px`,
            'left': `${state.x + 5}px`,
        };

        return (
            <div ref={contextRef} className="ContextMenu" id='customContext' style={myStyle} >
                {items.map( (item, index, array) => {
                    if (array.length - 1 === index) {
                        return <div key={index} index={index} className="ContextMenu_item-last">{item.label}</div>
                    } else {
                        return <div key={index} index={index} className="ContextMenu_item">{item.label}</div>
                    }
                }
                )}
            </div>
        );
    }

    return (
        <div>
            {(state.isVisible) ? returnMenu(props.items) : null}
        </div>
    );
}

export default ContextMenu;