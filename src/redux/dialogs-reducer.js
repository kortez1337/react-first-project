const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        { id: 1, name: "Андрей", img: "../assets/img/andrey.jpg" },
        { id: 2, name: "Гига", img: "giga.jpg" },
        { id: 3, name: "Дима", img: "../../../../../../assets/img/dima.jpg" },
        { id: 4, name: "Славик", img: "img/andrey.jpg" },
        { id: 5, name: "Макс", img: "img/dima.jpg" },
        { id: 6, name: "Паша", img: "img/pasha.jpg" },
        { id: 7, name: "Кексик", img: "img/giga.jpg" },
    ],

    messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Шо ты?" },
        { id: 3, message: "Шамарнемся?" },
        { id: 4, message: "Чи не хош?" },
        { id: 5, message: "Лан я сам" },
    ],
    messageNewText: "",
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.messageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                messageNewText: "",
            };

        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                messageNewText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = (messageText) => ({
    type: ADD_MESSAGE,
    messageText,
});
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text,
});
export default dialogsReducer;
