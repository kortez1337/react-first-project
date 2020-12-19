const {
    addPostActionCreator,
    default: profileReducer,
} = require("./profile-reducer");

it("length of posts will be inc", () => {
    let state = {
        posts: [
            { id: 1, message: "My first post", like: 2 },
            { id: 2, message: "My second post", like: 0 },
            { id: 3, message: "My third post", like: 10 },
            { id: 4, message: "My fours post", like: 60 },
        ],
    };

    let action = addPostActionCreator("New post text");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});
