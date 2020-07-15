import React from 'react';
import { connect } from 'react-redux';

import Card from '../../components/card/card.component';
import PartCreator from '../../components/partCreator/partCreator.component';
import PartManager from '../../components/partManager/partManager.component';

import './layout.styles.scss';

const Layout = ({ parts }) => {

    return (
        <div className="layout">
            <Card title="Add a new part">
                <PartCreator />
            </Card>
            {Object.entries(parts).map(([partId, partContent]) => {
                return (
                    <Card key={partId} title={partContent.name}>
                        <PartManager partId={partId} />
                    </Card>
                );
            })}
        </div>
    );
};

const mapStateToPros = ({chordSheet}) => ({
    parts: chordSheet.parts,
})

export default connect(mapStateToPros)(Layout);