// active , complete
const actionAddProduct = (productName) => {
    return { type: "actionAddProduct", payload: { productName: productName, status: 'active' } }
}

const actionUpdateProduct = (productArray) => {
    return { type: "PRODUCT_UPDATE", payload: productArray }
}

export {
    actionAddProduct,
    actionUpdateProduct
}