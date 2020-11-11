import React, { useRef } from 'react'
import ProductItem from '../component/ProductItem'
import Header from '../component/Header'
import MyFooter from '../component/Footer'
import { FlatList, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { Button, Container, Content, Text } from 'native-base'

const Main = (props) => {

    const { actionAddProduct, product } = props

    const refFlatList = useRef(null)
    const onPressItem = (index) => {
        
    }
    return (
        <>
            <View style={{ flex: 1, padding: 8 }}>
                <StatusBar
                    backgroundColor={'#3F51B5'}
                />
                <Header
                    onAdd={(text) => {
                        if (text && actionAddProduct) {
                            actionAddProduct(text)
                        }
                    }}
                />
                <View
                    style={{ flex: 1, marginTop: 8, marginBottom: 12, }}

                >
                    <FlatList
                        ref={refFlatList}
                        data={product}
                        key={(item) => item.productName}
                        // onScrollEndDrag={(eve) => {
                        //     console.log('eve => ', eve)
                        // }}
                        onEndReached={info => {
                            console.log('endReach => ', info)
                        }}

                        renderItem={({ item, index }) => {
                            return (
                                <ProductItem
                                    title={item.productName}
                                    status={item.status}
                                    onPress={() => {
                                        onPressItem(index)
                                    }}
                                />
                            )
                        }}
                    />
                    {/* <ScrollView>
                        {product?.map((item, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    title={item.productName}
                                    status={item.status}
                                    onPress={() => {
                                        onPressItem(index)
                                    }}
                                />
                            )
                        })}
                        <MyFooter />

                    </ScrollView> */}

                </View>
                <MyFooter />

            </View>
        </>
    )
}

export default Main
