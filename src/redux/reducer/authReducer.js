const initialState = {
    accessToken: "",
    refeshToken: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "AAAAA":
            return { ...state };

        default:
            return state
    }
};

export default reducer
