export const ACTIONS = {
    SET_TITLE: 'SET_TITLE',
    SET_AUTHOR: 'SET_AUTHOR',
};

export const setTitle = (title) => ({
    type: ACTIONS.SET_TITLE,
    payload: title,
});

export const setAuthor = (author) => ({
    type: ACTIONS.SET_AUTHOR,
    payload: author,
});