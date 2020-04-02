import rating from "../components/rating/rating";

let commentTextDefault = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi esse expedita facilis fuga itaque laudantium molestiae placeat, praesentium quae quia quisquam sequi voluptatem. Autem, eligendi illum perferendis repellat veniam voluptatem.';

function updateCommentProperty (comments, objNewProperty, idComment, indexId){
    let sliceIndex = comments.findIndex((el)=> el.id[indexId] === idComment[indexId]);

    if (!(idComment.length === indexId+1)){
        return [
            ...comments.slice(0, sliceIndex),
            {
                ...comments[sliceIndex],
                nestedComments: updateCommentProperty(comments[sliceIndex].nestedComments, objNewProperty, idComment, ++indexId ),
            },
            ...comments.slice(sliceIndex+1)
        ]
    }

    let newComment = {
        ...comments[sliceIndex],
        ...objNewProperty
    };

    return [
        ...comments.slice(0, sliceIndex),
        newComment,
        ...comments.slice(sliceIndex+1)
    ];
}

const initialState = {
    findingAddCommentForm : [],
    comments: [
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            comment: commentTextDefault.concat(commentTextDefault),
            timePublic: new Date(2020, 0, 15).valueOf(),
            rating: 5,
            isHidden: false,
            id: [12],
            nestedComments:[
                {
                    id: [12, 127],
                    name: 'Анна Шумкова',
                    timePublic: new Date(2020, 1, 20).valueOf(),
                    rating: 7,
                    isHidden: false,
                    email: 'as.vovov@bk.ru',
                    comment: commentTextDefault,
                    nestedComments: [
                            {
                                id: [12, 127, 123],
                                name: 'Константин Штыков',
                                isHidden: false,
                                email: 'vlvlv.asdasd@bk.ru',
                                comment: commentTextDefault,
                                timePublic: new Date(2020, 3, 1).valueOf(),
                                rating: 9,
                                nestedComments: []
                            }
                        ]
                }
            ]
        },
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.dd@bk.ru',
            rating: -10,
            comment: commentTextDefault,
            timePublic: new Date(2020, 3, 2).valueOf(),
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
                timePublic: new Date().valueOf(),
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
            let updateProperty = {
                rating: newRating,
                isHidden: newRating < -9 ? true : false
            };

            return {
                ...state,
                comments: updateCommentProperty([...state.comments], updateProperty, id, 0)
            };
        case 'UPDATE_HIDDEN_COMMENT':
            return {
                ...state,
                comments: updateCommentProperty(state.comments, {isHidden: false}, actions.id, 0)
            };
        default:
            return state;
    }
};

export default reducer;