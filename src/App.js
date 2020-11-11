import React from 'react'
import { connect } from 'react-redux'
import { actionAddProduct } from './redux/action/productAction'
import Main from './screen/Main'

const mapStateToProps = (state) => {
    const { product } = state.productReducer
    return {
        product: product
    }
}

const mapDispatchToProps = {
    actionAddProduct
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
