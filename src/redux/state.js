let state = {
    profilePage: {
        posts: [
            { id: 1, message: "My first post", like: 2 },
            { id: 2, message: "My second post", like: 0 },
            { id: 3, message: "My third post", like: 10 },
            { id: 4, message: "My fours post", like: 60 },
        ],
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
    },
};

export default state;
