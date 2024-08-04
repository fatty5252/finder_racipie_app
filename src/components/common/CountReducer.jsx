

 export  const countReducer = (state, action) => {
    switch (action) {
        case "add":
        return state + 1;
        case "subtract":
        return state - 1;
        case "reset":
        return 0;
        default:
        throw new Error("Unexpected action");
    }
    };