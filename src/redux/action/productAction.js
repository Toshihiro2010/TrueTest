// active , complete
const actionAddProduct = (productName) => {
    return { type: "actionAddProduct", payload: { productName: productName, isComplete: false } }
}

const actionUpdateProduct = (productArray) => {
    return { type: "PRODUCT_UPDATE", payload: productArray }
}

const actionToggleCompleteByIndex = (index) => {
    return { type: "PRODUCT_TOGLE_COMPLETE_BY_INDEX", payload: index }
}



export {
    actionAddProduct,
    actionUpdateProduct
}