import React, {useRef, useCallback} from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { sortBars } from '../../redux/chordSheet/chordSheet.actions';
import Bar from '../bar/bar.component';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from '../itemTypes';

import './part.styles.css';

const Part = ({id, partContent, ...props}) => {

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: [ItemTypes.BAR, ItemTypes.SIGN],
        drop: (item, monitor) => {
            if (monitor.isOver({shallow: true})) {
                return ({target: 'part', partId: id});
            }
            return;
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    const moveBar = useCallback((item, index, parentId) => {
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex !== hoverIndex) {
                props.sortBars(dragIndex, hoverIndex, parentId);
                item.index = hoverIndex;
            }
    }, [partContent]);

    const {name, bars} = partContent;

    drop(ref);

    return (
        <div ref={ref} className="part" >
            <ContextMenuTrigger id={id}>
                <div className="part_title" onContextMenu={()=>props.setSelected(id, null)}>
                    {name}
                </div>
            </ContextMenuTrigger>

            <div className="bars_container"  >
                {bars.map( (barContent, index) => {
                    return <Bar moveBar={moveBar} key={barContent.id} index={index} parentId={id} barContent={barContent} axis="x" />
                })}
            </div>



            <ContextMenu id={id}>
                <MenuItem onClick={() => props.addPart("test", 8)}>
                    Add part
                </MenuItem>
                <MenuItem onClick={() => props.deletePart(props.id)}>
                    Delete part
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    sortBars: (oldIndex, newIndex, parentId) => dispatch(sortBars(oldIndex, newIndex, parentId)),
})

export default connect(null, mapDispatchToProps)(Part);