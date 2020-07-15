import { ACTIONS } from './pageInfos.actions';

const INITIAL_STATE = {
    title: 'Minor Swing',
    author: 'Django Reindhardt',
    infos: {
        timeSignature: '4/4',
        tempo: '160BPM',
    },
}

const pageInfosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.SET_TITLE:
            return {
                ...state,
                title: action.payload,
            };

        case ACTIONS.SET_AUTHOR:
            return {
                ...state,
                author: action.payload,
            };

        default:
            return state;
    };
};

export default pageInfosReducer;