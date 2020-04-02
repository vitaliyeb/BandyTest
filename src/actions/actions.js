const ADD_COMMENT = 'ADD_COMMENT';
const RESPONSE_COMMENT = 'RESPONSE_COMMENT';
const UPDATE_RATING = 'UPDATE_RATING';

const addComment = (name, email, comment, newId, id) => ({
    type: ADD_COMMENT,
    email,
    name,
    comment,
    newId
});
const responseComment = (idComment) => ({
    type: RESPONSE_COMMENT,
    idComment
});
const updateRating = (newRating, id) => ({
    type: UPDATE_RATING,
    newRating,
    id
});

export {
    addComment,
    responseComment,
    updateRating
}