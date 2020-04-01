const ADD_COMMENT = 'ADD_COMMENT';

const addComment = (name, email, comment, newId, id) => ({
    type: ADD_COMMENT,
    email,
    name,
    comment,
    newId
});

export {
    addComment
}