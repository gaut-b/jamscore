import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deletePart } from '../../redux/chordSheet/chordSheet.actions';

import './partManager.styles.scss';

const PartManager = ({ partId, deletePart }) => {

    return (
        <div className="partManager">
            <button onClick={() => deletePart(partId)}>&#128465; Delete Part</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deletePart: (partId) => dispatch(deletePart(partId)),
});

export default connect(null, mapDispatchToProps)(PartManager);