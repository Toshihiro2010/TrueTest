import React from 'react'
import { View, Text, Button } from 'native-base'

const Footer = (props) => {
    return (
        <View
            style={{
                marginBottom: 16
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <Button>
                    <Text>All</Text>
                </Button>
                <Button>
                    <Text>Active</Text>
                </Button>
                <Button>
                    <Text>Completed</Text>
                </Button>
            </View>

            <View style={{ marginTop: 16, flexDirection: "row" }}>
                <Button>
                    <Text>Undo</Text>
                </Button>
                <Button>
                    <Text>Redo</Text>
                </Button>
            </View>

        </View>
    )
}

export default Footer
