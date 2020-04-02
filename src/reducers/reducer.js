import rating from "../components/rating/rating";

let commentTextDefault = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi esse expedita facilis fuga itaque laudantium molestiae placeat, praesentium quae quia quisquam sequi voluptatem. Autem, eligendi illum perferendis repellat veniam voluptatem.';


const initialState = {
    findingAddCommentForm : [],
    comments: [
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            comment: commentTextDefault.concat(commentTextDefault),
            rating: 5,
            isHidden: false,
            id: [12],
            nestedComments:[
                {
                    id: [12, 127],
                    name: 'Анна Шумкова',
                    rating: 7,
                    isHidden: false,
                    nestedComments: [
                            {
                                id: [12, 127, 123],
                                name: 'Константин Штыков',
                                isHidden: false,
                                rating: 9,
                                nestedComments: []
                            }
                        ]
                }
            ]
        },
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            rating: -10,
            comment: commentTextDefault,
            isHidden: true,
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
                rating: 0,
                isHidden: false,
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
        case 'UPDATE_RATING':
            let {newRating, id} = actions;
            function updateRating(comments, newRating, idComment, idIndex){
                let sliceIndex = comments.findIndex((el)=> el.id[idIndex] === idComment[idIndex]);

                if (!(idComment.length === idIndex+1)){
                    return [
                        ...comments.slice(0, sliceIndex),
                        {
                            ...comments[sliceIndex],
                            nestedComments: updateRating(comments[sliceIndex].nestedComments, newRating, idComment, ++idIndex ),
                        },
                        ...comments.slice(sliceIndex+1)
                    ]
                }

                comments[sliceIndex]['rating'] = newRating;
                comments[sliceIndex]['isHidden'] = (newRating < -9) ? true : false;

                return [
                    ...comments.slice(0, sliceIndex),
                    comments[sliceIndex],
                    ...comments.slice(sliceIndex+1)
                ];
            }
            return {
                ...state,
                comments: updateRating([...state.comments], newRating, id, 0)
            };
        case 'UPDATE_HIDDEN_COMMENT':

            function updateHidden(comments, hiddenProperty, idComment, idIndex){
                let sliceIndex = comments.findIndex((el)=> el.id[idIndex] === idComment[idIndex]);

                if (!(idComment.length === idIndex+1)){
                    return [
                        ...comments.slice(0, sliceIndex),
                        {
                            ...comments[sliceIndex],
                            nestedComments: updateRating(comments[sliceIndex].nestedComments, newRating, idComment, ++idIndex ),
                        },
                        ...comments.slice(sliceIndex+1)
                    ]
                }

                comments[sliceIndex]['isHidden'] = false;

                return [
                    ...comments.slice(0, sliceIndex),
                    comments[sliceIndex],
                    ...comments.slice(sliceIndex+1)
                ];
            }

            return {
                ...state,
                comments: updateHidden(state.comments, false, actions.id, 0)
            };
        default:
            return state;
    }
};

export default reducer;