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
        case "PRODUCT_TOGLE_COMPLETE_BY_INDEX": {
            let position = action.payload
            let productNew = [...state.product]
            productNew[position].isComplete = !productNew[position].isComplete
            return { ...state, product: productNew }

        }
        default:
            return state
    }
}
