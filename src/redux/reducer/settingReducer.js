const initialState = {
    language: "en"
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "SETTING/CHANGE_LANGUAGE":
            return { ...state , language:action.payload };

        default:
            return state
    }
};

