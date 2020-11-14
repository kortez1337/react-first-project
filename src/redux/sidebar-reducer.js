let initialState = {
    friends: [
        { id: 1, name: "Вика", img: "img/vika.jpg" },
        { id: 2, name: "Гига", img: "img/giga.jpg" },
        { id: 3, name: "Дима", img: "img/dima.jpg" },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};
export default sidebarReducer;
