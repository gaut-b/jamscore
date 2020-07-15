import { combineReducers } from 'redux';
import chordSheetReducer from './chordSheet/chordSheet.reducer';
import pageInfosReducer from './chordSheet/pageInfos/pageInfos.reducer';

export default combineReducers({
    chordSheet: chordSheetReducer,
    pageInfos: pageInfosReducer,
});