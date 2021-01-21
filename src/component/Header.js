import { Button, Text, View } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'


const Header = (props) => {

    const [text, setText] = useState(null)

    const { onAdd } = props

    return (
        <View style={{ flexDirection: 'row', }}>
            <TextInput
                accessibilityLabel="headerInput"
                value={text}
                onChangeText={(text) => {
                    setText(text)
                }}
                style={{
                    flex: 1,
                    marginRight: 8,
                    borderWidth: 1,
                    padding: 4,
                    borderRadius: 4
                }}
            />
            <Button
                onPress={() => {
                    onAdd && onAdd(text)
                    setText(null)
                }}
            >
                <Text>Add Shopping Cart</Text>
            </Button>
        </View>
    )
}

Header.defaultProps = {
    onAdd: null
}

Header.propTypes = {
    onAdd: PropTypes.func
}

export default Header

const styles = StyleSheet.create({})
