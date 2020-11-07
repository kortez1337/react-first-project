let rerenderAllTree = () => {
    console.log("Changeeee");
};

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "My first post", like: 2 },
            { id: 2, message: "My second post", like: 0 },
            { id: 3, message: "My third post", like: 10 },
            { id: 4, message: "My fours post", like: 60 },
        ],
        newPostText: "",
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Андрей", img: "img/andrey.jpg" },
            { id: 2, name: "Гига", img: "img/giga.jpg" },
            { id: 3, name: "Дима", img: "img/dima.jpg" },
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
    },
    sitebar: {
        friends: [
            { id: 1, name: "Вика", img: "img/vika.jpg" },
            { id: 2, name: "Гига", img: "img/giga.jpg" },
            { id: 3, name: "Дима", img: "img/dima.jpg" },
        ],
    },
};
window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 13,
    };
    state.profilePage.newPostText = "";
    state.profilePage.posts.push(newPost);

    rerenderAllTree(state);
};

export let addMessage = () => {
    let newMessage = { id: 6, message: state.dialogsPage.messageNewText };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.messageNewText = "";
    rerenderAllTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAllTree(state);
};
export let updateMessageText = (newText) => {
    state.dialogsPage.messageNewText = newText;
    rerenderAllTree(state);
};

export const subscribe = (observer) => {
    rerenderAllTree = observer;
};

export default state;
