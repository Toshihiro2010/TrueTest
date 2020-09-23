import { Container, Content, Text, View, Body, Footer } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import MyFooter from './component/Footer'
import Header from './component/Header'
import ProductItem from './component/ProductItem'
import { actionAddProduct } from './redux/action/productAction'

const App = (props) => {

    const { addProduct, product } = props

    const onPressItem = (index) => {
        
    }

    return (
        <Container>
            <Content style={{ margin: 8 }}>
                <Header
                    onAdd={(text) => {
                        addProduct && addProduct(text)
                    }}
                />
                <View style={{ flex: 1, marginTop: 8, marginBottom: 12, }}>
                    {product?.map((item, index) => {

                        
                        return (
                            <ProductItem
                                title={item.productName}
                                status={item.status}
                                onPress={() => {
                                    onPressItem(index)
                                }}
                            />
                        )
                    })}
                </View>
            </Content>
            <MyFooter />
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { product } = state.productReducer
    return {
        product: product
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (productName) => {
        dispatch(actionAddProduct(productName))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
