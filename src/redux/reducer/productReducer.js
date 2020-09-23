const initialState = {
    product: [

    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "actionAddProduct":
            return { ...state, product: [...state.product, action.payload] }
        case "PRODUCT_UPDATE":
            return { ...state, product: action.payload }
        default:
            return state
    }
}
