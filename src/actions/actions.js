const ADD_COMMENT = 'ADD_COMMENT';
const RESPONSE_COMMENT = 'RESPONSE_COMMENT';

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

export {
    addComment,
    responseComment
}