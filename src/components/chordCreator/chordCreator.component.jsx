import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { chordsList } from '../../assets/chordsList';
import { alterationsList } from '../../assets/alterationsList';
import { harmonicFunctionsList } from '../../assets/harmonicFunctionsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import useOnClickOutside from '../../effects/useOnClickOutside';
import Dropdown from '../dropdown/dropdown.component';
import './chordCreator.styles.css';




const INITIAL_STATE = {
  createdChord: "",
  chordSelector: {
    selectedChord: "Select a chord",
    chordsList,
  },
  harmonicFunctionSelector: {
    selectedFunction: "Select a harmonic function",
    harmonicFunctionsList,
  },
  alterationSelector: {
    selectedAlterations: "Select alteration(s)",
    alterationsList,
  }
};

const ChordCreator = ({isOpen, onClose, addChord, ...props}) => {

  const ref = useRef();
  const [state, setState] = useState(INITIAL_STATE)

  const {
    chordSelector,
    harmonicFunctionSelector,
    alterationSelector,
    createdChord,
  } = state;

  const {
    selectedChord,
    chordsList,
  } = chordSelector;

  const {
    selectedFunction,
    harmonicFunctionsList,
  } = harmonicFunctionSelector;

  const {
    selectedAlterations,
    alterationsList,
  } = alterationSelector;


  const selectChord = (index) => {
    var newList = chordsList.slice()

    newList.map( ({id, selected}) => {
      if (index === id) {
        newList[id].selected = true;
      } else {
        newList[id].selected = false;
      }
    });

    setState({
      ...state,
      createdChord: createdChord + newList[index].name,
      chordSelector: {
        selectedChord: newList[index].name,
        chordsList: newList,
      },
    });
  };

  const selectHarmonicFunction = (index) => {
    var newList = harmonicFunctionsList.slice()

    newList.map( ({id, selected}) => {
      if (index === id) {
        newList[id].selected = true;
      } else {
        newList[id].selected = false;
      }
    });

    setState({
      ...state,
      createdChord: createdChord + newList[index].name,
      harmonicFunctionSelector: {
            selectedFunction: newList[index].name,
            harmonicFunctionsList: newList,
      },
    });
  };

  const selectAlterations = (index) => {
    var newList = alterationsList.slice()

    newList.map( ({id, selected}) => {
      if (index === id) {
        newList[id].selected = true;
      } else {
        newList[id].selected = false;
      }
    });

    setState({
      ...state,
      createdChord: createdChord + newList[index].name,
      alterationSelector: {
        selectedAlterations: newList[index].name,
        alterationsList: newList,
      },
    });
  };

  const handleSubmit = () => {
    if (createdChord !== "") {
      addChord(createdChord);
    }
  handleClose();
  }

  const handleClose = () => {
    setState(INITIAL_STATE);
    onClose();
  }

  useOnClickOutside(ref, handleClose);

  const dialog = (
    <div ref={ref} className="dialogStyles">
      <button className="dialogCloseButtonStyles" onClick={handleClose}>X</button>
      <div className="dialogStyles_dd">
        <Dropdown
          title={selectedChord}
          list={chordsList}
          toggleItem={selectChord}
        />
        <Dropdown
          title={selectedFunction}
          list={harmonicFunctionsList}
          toggleItem={selectHarmonicFunction}
        />
        <Dropdown
          title={selectedAlterations}
          list={alterationsList}
          toggleItem={selectAlterations}
        />
      </div>
      <div className="dialogStyles_chord">
        {createdChord}
      </div>
      <button className="dialogStyles_button" onClick={handleSubmit} >
        <FontAwesomeIcon icon={faCheck}/>
      </button>
    </div>
  );

  return (isOpen) ? <div>{dialog}</div> : null

};



export default connect()( ChordCreator);