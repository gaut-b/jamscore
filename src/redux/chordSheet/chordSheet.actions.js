export const ACTIONS = {
    ADD_BAR: 'ADD_BAR',
    SORT_BARS: 'SORT_BARS',
    MOVE_BAR: 'MOVE_BARS',
    DELETE_BAR: 'DELETE_BAR',
    ADD_SIGN: 'ADD_SIGN',
    DELETE_SIGN: 'DELETE_SIGN',
    ADD_PART: 'ADD_PART',
    DEL_PART: 'DELETE_PART',
}

export const addBar = (parentId, sign, position) => ({
    type: ACTIONS.ADD_BAR,
    payload: {parentId, sign, position},
});

export const sortBars = (oldIndex, newIndex, parentId) => ({
    type: ACTIONS.SORT_BARS,
    payload: {oldIndex, newIndex, parentId},
});

export const moveBar = (source, destination) => ({
    type: ACTIONS.MOVE_BAR,
    payload: {source, destination},
});

export const deleteBar = (parentId, index) => ({
    type: ACTIONS.DELETE_BAR,
    payload: {parentId, index},
});

export const addSign = (parentId, index, sign, position) => ({
    type: ACTIONS.ADD_SIGN,
    payload: {parentId, index, sign, position},
});

export const deleteSign = (parentId, index) => ({
    type: ACTIONS.DELETE_SIGN,
    payload: {parentId, index},
});

export const addPart = (partName, nbBars) => ({
    type: ACTIONS.ADD_PART,
    payload: {partName, nbBars},
});

export const deletePart = (partId) => ({
    type: ACTIONS.DEL_PART,
    payload: partId,
});