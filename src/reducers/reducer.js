let commentTextDefault = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi esse expedita facilis fuga itaque laudantium molestiae placeat, praesentium quae quia quisquam sequi voluptatem. Autem, eligendi illum perferendis repellat veniam voluptatem.';


const initialState = {
    findingAddCommentForm : [],
    comments: [
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            comment: commentTextDefault.concat(commentTextDefault),
            id: [12],
            nestedComments:[
                {
                    id: [12, 127],
                    name: 'Анна Шумкова',
                    nestedComments: [
                            {
                                id: [12, 127, 123],
                                name: 'Константин Штыков',
                                nestedComments: []
                            }
                        ]
                }
            ]
        },
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            comment: commentTextDefault,
            id: [44],
            nestedComments:[]
        }
    ]
};

const reducer = (state = initialState,  actions) => {
    switch (actions.type) {
        case 'ADD_COMMENT':
            let {name, email, comment, newId} = actions;
            let newComment = {
                name,
                email,
                comment,
                id: newId,
                nestedComments:[]
            };
            function updateComments(comments, newComment, idIndex){
                let sliceIndex = comments.findIndex((el)=> el.id[idIndex] === newComment.id[idIndex]);
                if (sliceIndex > -1){
                    let updateComment = comments[sliceIndex];
                    updateComment.nestedComments = updateComments(updateComment.nestedComments, newComment, ++idIndex);
                    return [
                        ...comments.slice(0, sliceIndex ),
                        updateComment,
                        ...comments.slice( sliceIndex+1 )
                    ]
                }
                return [...comments, newComment];
            }
            let comments = updateComments([...state.comments], newComment, 0);
            return {
                findingAddCommentForm: [],
                comments
            };
        case 'RESPONSE_COMMENT':
            let { idComment } = actions;
            console.log(idComment);
            return {
                ...state,
                findingAddCommentForm: idComment
            };
        default:
            return state;
    }
};

export default reducer;