import React from 'react';
import { connect } from 'react-redux';
import { sortBars } from '../../redux/chordSheet/chordSheet.actions';

import Part from '../../components/part/part.component';

import './sheet.styles.scss';

const Sheet = ({ title, author, infos, parts, sortBars }) => {

    const onSortEnd = ({ oldIndex, newIndex, collection }) => {
        sortBars(oldIndex, newIndex, collection);
    };

    return (
        <div className="sheet">
            <div className="title">
                <h1>{title}</h1>
                <h2>{author}</h2>
            </div>
            <div className="infos">
                {infos.timeSignature ? `Time signature: ${infos.timeSignature}` : null}
                <br></br>
                {infos.tempo ? `Tempo: ${infos.tempo}` : null}
            </div>
            <div className="parts">
                { Object.entries(parts).map(([partId, partContent]) => <Part onSortEnd={onSortEnd} axis="x" key={partId} id={partId} partContent={partContent} />) }
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    sortBars: (oldIndex, newIndex, collection) => dispatch(sortBars(oldIndex, newIndex, collection)),
});

const mapStateToProps = ({ chordSheet, pageInfos }) => ({
    title: pageInfos.title,
    author: pageInfos.author,
    infos: pageInfos.infos,
    parts: chordSheet.parts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sheet);