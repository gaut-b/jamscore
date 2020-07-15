import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPart } from '../../redux/chordSheet/chordSheet.actions';

import './partCreator.styles.scss';

const INITIAL_STATE = {
    partName: "",
    nbBars: 16,
}

const PartCreator = ({ addPart }) => {

    const [state, setState] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    };

    const handleClick = (e) => {
        const { partName, nbBars } = state;
        e.preventDefault();
        addPart(partName, nbBars);
        setState(INITIAL_STATE);
    }

    return (
        <div className="partCreator">
            <div className="partCreator__form">
                <form>
                    <label>Part name</label>
                    <input
                        name="partName"
                        type="text"
                        value={state.partName}
                        onChange={e => handleChange(e)} placeholder="Enter the part name"
                    />
                    <label>Number of bars</label>
                    <input
                        name="nbBars"
                        type="number"
                        onChange={e => handleChange(e)}
                        value={state.nbBars}
                    />
                    <button type="submit" onClick={(e) => handleClick(e)} >
                    + Add part
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addPart: (partName, nbBars) => dispatch(addPart(partName, nbBars)),
});

export default connect(null, mapDispatchToProps)(PartCreator);