let commentTextDefault = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi esse expedita facilis fuga itaque laudantium molestiae placeat, praesentium quae quia quisquam sequi voluptatem. Autem, eligendi illum perferendis repellat veniam voluptatem.';


const initialState = {
    comments: [
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            comment: commentTextDefault.concat(commentTextDefault),
            id: 12,
            nestedComments:[
                { id: 127, nestedComments: [{ id: 1257, nestedComments: []}]}
            ]
        },
        {
            name: 'Виталий Бурдин',
            email: 'vlvlv.vovov@bk.ru',
            comment: commentTextDefault,
            id: 44,
            nestedComments:[]
        }
    ]
};

const reducer = (state = initialState,  actions) => {
    return state;
};

export default reducer;