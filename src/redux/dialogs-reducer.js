const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.messageNewText,
            };
            state.messages.push(newMessage);
            state.messageNewText = "";
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageNewText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text,
});
export default dialogsReducer;
