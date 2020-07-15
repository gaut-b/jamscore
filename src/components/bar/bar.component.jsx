import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { deleteBar, sortBars, addSign, deleteSign } from '../../redux/chordSheet/chordSheet.actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import ChordCreator from '../chordCreator/chordCreator.component';
import BarSymbol from '../../assets/symbols/bar.svg';
import { useDrag, useDrop } from 'react-dnd';
import SignContainer from '../signContainer/signContainer.component';
import ItemTypes from '../itemTypes';

import PropTypes from 'prop-types';

import './bar.styles.scss';

const Bar = (props) => {

    const ref = useRef(null);
    const { barContent, parentId, index } = props;
    const { id, leftSign, rightSign, backgroundSign, centerSign, chords } = barContent;

    const handleDeleteBar = (parentId, index) => {
        props.deleteBar(parentId, index);
    }

    const handleDeleteSign = (parentId, index) => {
        props.deleteSign(parentId, index);
    }

    const [, drop] = useDrop({
        accept: [ItemTypes.BAR, ItemTypes.SIGN],
        drop: () => ({target: 'bar', partId: parentId, barIndex: index}),
        hover(item, monitor) {
            if (!ref.current) return;
            if (item.type === ItemTypes.BAR) {
                props.moveBar(item, index, parentId)
            }
        }
    });

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.BAR, parentId, id, index},
        collect: monitor => ({
            isDragging: !! monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            if (!monitor.didDrop()) {
                handleDeleteBar(parentId, index);
            }
        }
    });

    const [isOpen, setOpen] = useState(false);

    drag(drop(ref));

    return (
        <div ref={ref} className="bar" >
            <SignContainer sign={backgroundSign} position='background' type="bar" />
            <SignContainer sign={leftSign} position='left' type="bar" />
            <SignContainer sign={centerSign} position='center' type="bar" />
            <div className="bar__chords">
                {chords}
            </div>
            <SignContainer sign={rightSign} position='right' type="bar" />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteBar: (parentId, index) => dispatch(deleteBar(parentId, index)),
    sortBars: (oldIndex, newIndex, parentId) => dispatch(sortBars(oldIndex, newIndex, parentId)),
    addSign: (parentId, index, sign) => dispatch(addSign(parentId, index, sign)),
    deleteSign: (parentId, index) => dispatch(deleteSign(parentId, index)),
});
//
export default connect(null, mapDispatchToProps)(Bar);


// <SignContainer className="bar__sign" handleDeleteSign={() => handleDeleteSign(parentId, index)} >
//     {img}
// </SignContainer>