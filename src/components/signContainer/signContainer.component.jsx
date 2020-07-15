import React from 'react';
import { connect } from 'react-redux';
import { addSign, addBar } from '../../redux/chordSheet/chordSheet.actions';
import { useDrag } from 'react-dnd';
import ItemTypes from '../itemTypes';

import './signContainer.styles.scss';

const SignContainer = ({ addSign, addBar, handleDeleteSign, type, sign, position }) => {

    const [, drag] = useDrag({
        item: {type: ItemTypes.SIGN, sign: sign, position: position},
        end: (dropResult, monitor) => {
            dropResult = monitor.getDropResult();
            if (dropResult) {
                if (dropResult.target === 'bar') {
                    const { partId, barIndex } = dropResult;
                    addSign(partId, barIndex, sign, position);
                } else if (dropResult.target === 'part') {
                    const { partId } = dropResult;
                    addBar(partId, sign, position);
                }
            }
            if (!monitor.didDrop()) {
                if (handleDeleteSign) {
                    handleDeleteSign();
                }
            }
        }
    });

    let className = "signContainer"
    if (type) {
        className += ` signContainer__${type}`
        if (position) {
            className += ` signContainer__${type}--${position}`
        }
    }

    return <div className={className} ref={drag} style={{ backgroundImage: `url(${sign})` }} />
};

const mapDispatchToProps = (dispatch) => ({
    addSign: (parentId, index, sign, position) => dispatch(addSign(parentId, index, sign, position)),
    addBar: (parentId, sign, position) => dispatch(addBar(parentId, sign, position)),
});

export default connect(null, mapDispatchToProps)(SignContainer);