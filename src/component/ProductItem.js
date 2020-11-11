import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Text } from 'native-base'


// active , complete
const ProductItem = (props) => {
    const { onPress, title, status } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginBottom: 8,
                backgroundColor: status == 'complete' ? "red" : "#ffffff"
            }}
        >
            <Text style={{ textDecorationLine: 'line-through' }}>{title}</Text>
        </TouchableOpacity>
    )
}

ProductItem.defaultProps = {
    onPress: null,
    title: "",
    status: ""
}

ProductItem.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    status: PropTypes.string,
}

export default ProductItem

const styles = StyleSheet.create({})
