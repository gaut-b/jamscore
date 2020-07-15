import uuid from 'uuid/v4';
import { ACTIONS } from './chordSheet.actions';

const INITIAL_STATE = {
    parts: {
        [uuid()]: {
            name: "Intro",
            bars: [
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
            ],
        },
        [uuid()]: {
            name: "Impro",
            bars: [
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Dm",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "Am",
                },
                {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "E7",
                },
            ],
        },
    },
};

const chordSheetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.ADD_BAR: {

            const { parentId, sign, position } = action.payload;
            const sourcePart = state.parts[parentId];
            const copiedSourceBars = [...sourcePart.bars];

            let newBar = {
                id: uuid(),
                leftSign: null,
                rightSign: null,
                centerSign: null,
                backgroundSign: null,
                chords: "",
            };

            if (position === 'background') {
                newBar.backgroundSign = sign;
            } else {
                newBar.backgroundSign = "/static/media/bar.8e1f77e9.svg";
                switch (position) {
                    case 'center':
                        newBar.centerSign = sign;
                        break;
                    case 'left':
                        newBar.leftSign = sign;
                        break;
                    case 'right':
                        newBar.rightSign = sign;
                        break;
                    default:
                        break;
                };
            };

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [parentId]: {
                        ...sourcePart,
                        bars: [...copiedSourceBars, newBar],
                    }
                },
            };
        };

        case ACTIONS.MOVE_BAR: {

            const { source, destination } = action.payload;

            const sourcePart = state.parts[source.droppableId];
            const destPart = state.parts[destination.droppableId];
            const copiedSourceBars = [...sourcePart.bars];
            const copiedDestBars = [...destPart.bars];

            const [removed] = copiedSourceBars.splice(source.index, 1);
            copiedDestBars.splice(destination.index, 0, removed);

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [source.droppableId]: {
                        ...sourcePart,
                        bars: copiedSourceBars
                    },
                    [destination.droppableId]: {
                        ...destPart,
                        bars: copiedDestBars,
                    },
                },
            };
        };

        case ACTIONS.SORT_BARS: {

            const { oldIndex, newIndex, parentId } = action.payload;

            const sourcePart = state.parts[parentId];
            const copiedSourceBars = [...sourcePart.bars];
            const [removed] = copiedSourceBars.splice(oldIndex, 1);
            copiedSourceBars.splice(newIndex, 0, removed);

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [parentId]: {
                        ...sourcePart,
                        bars: copiedSourceBars,
                    }
                }
            };
        };

        case ACTIONS.DELETE_BAR: {

            const {parentId, index} = action.payload;

            const sourcePart = state.parts[parentId];
            const copiedSourceBars = [...sourcePart.bars];
            copiedSourceBars.splice(index, 1);

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [parentId]: {
                        ...sourcePart,
                        bars: copiedSourceBars,
                    }
                }
            };
        };

        case ACTIONS.ADD_SIGN: {
            const {parentId, index, sign, position} = action.payload;

            const sourcePart = state.parts[parentId];
            const copiedSourceBars = [...sourcePart.bars];
            const modifiedBar = copiedSourceBars[index];

            switch (position) {
                case 'background':
                    modifiedBar.backgroundSign = sign;
                    modifiedBar.leftSign = null;
                    break;
                case 'center':
                    modifiedBar.centerSign = sign;
                    modifiedBar.chords = "";
                    break;
                case 'left':
                    if (!modifiedBar.centerSign) {
                        modifiedBar.leftSign = sign;
                    }
                    break;
                case 'right':
                    modifiedBar.rightSign = sign;
                    break;
            };

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [parentId]: {
                        ...sourcePart,
                        bars: copiedSourceBars,
                    }
                }
            };
        };

        case ACTIONS.DELETE_SIGN: {
            const {parentId, index, sign} = action.payload;

            const sourcePart = state.parts[parentId];
            const copiedSourceBars = [...sourcePart.bars];
            copiedSourceBars[index].signs = null;

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [parentId]: {
                        ...sourcePart,
                        bars: copiedSourceBars,
                    }
                }
            };
        };

        case ACTIONS.ADD_PART: {
            const partName = action.payload.partName;
            const nbBars = action.payload.nbBars;

            let bars = [];
            let i=0;
            for (i = 0; i < nbBars; i++) {
                const bar = {
                    id: uuid(),
                    leftSign: null,
                    rightSign: null,
                    centerSign: null,
                    backgroundSign: "/static/media/bar.8e1f77e9.svg",
                    chords: "",
                };
                bars.push(bar);
            };

            return {
                ...state,
                parts: {
                    ...state.parts,
                    [uuid()]: {
                        name: partName,
                        bars: bars
                    },
                }
            }
        };

        case ACTIONS.DEL_PART: {
            const partId = action.payload;
            const sourceParts = {...state.parts};
            delete sourceParts[partId];

            return {
                ...state,
                parts: sourceParts,
            };
        }

        default:
            return state;
    };
};

export default chordSheetReducer;