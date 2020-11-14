// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: "My first post", like: 2 },
//                 { id: 2, message: "My second post", like: 0 },
//                 { id: 3, message: "My third post", like: 10 },
//                 { id: 4, message: "My fours post", like: 60 },
//             ],
//             newPostText: "",
//         },

//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: "Андрей", img: "img/andrey.jpg" },
//                 { id: 2, name: "Гига", img: "img/giga.jpg" },
//                 { id: 3, name: "Дима", img: "img/dima.jpg" },
//                 { id: 4, name: "Славик", img: "img/andrey.jpg" },
//                 { id: 5, name: "Макс", img: "img/dima.jpg" },
//                 { id: 6, name: "Паша", img: "img/pasha.jpg" },
//                 { id: 7, name: "Кексик", img: "img/giga.jpg" },
//             ],

//             messages: [
//                 { id: 1, message: "Привет" },
//                 { id: 2, message: "Шо ты?" },
//                 { id: 3, message: "Шамарнемся?" },
//                 { id: 4, message: "Чи не хош?" },
//                 { id: 5, message: "Лан я сам" },
//             ],
//             messageNewText: "",
//         },
//         sidebar: {
//             friends: [
//                 { id: 1, name: "Вика", img: "img/vika.jpg" },
//                 { id: 2, name: "Гига", img: "img/giga.jpg" },
//                 { id: 3, name: "Дима", img: "img/dima.jpg" },
//             ],
//         },
//     },
//     _callSubscriber() {
//         console.log("Changeeee");
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(
//             this._state.profilePage,
//             action
//         );
//         this._state.dialogsPage = dialogsReducer(
//             this._state.dialogsPage,
//             action
//         );
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//         this._callSubscriber(this._state);
//     },
// };

// window.store = store;

// export default store;
