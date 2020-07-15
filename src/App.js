import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { sortBars, moveBar, deleteBar } from './redux/chordSheet/chordSheet.actions';

import Sheet from './pages/sheet/sheet.component';
import Infos from './pages/infos/infos.component';
import Layout from './pages/layout/layout.component';
import SideBar from './components/sideBar/sideBar.component';

import './App.scss';

const App = (props) => {

    return (
        <div className="App">
            <div className="sidebar" >
                <SideBar />
            </div>
            <DndProvider backend={Backend}>
                <div className="page-container">
                    <div className="left-content">
                        <Route exact path='/' component={null} />
                        <Route exact path='/infos' component={Infos} />
                        <Route exact path='/layout' component={Layout} />
                    </div>
                    <div className="right-content">
                        <Sheet />
                    </div>
                </div>
            </DndProvider>
        </div>
    );
};

export default App;

