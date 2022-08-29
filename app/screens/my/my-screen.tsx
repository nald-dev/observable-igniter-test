
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { observer } from "mobx-react-lite"
import { useStores } from '../../models'

const possibleNewUsers = [
    {
        username: 'Reynald',
        email: 'reynald@example.com'
    },
    {
        username: 'Prabha',
        email: 'prabha@example.com'
    },
    {
        username: 'Nova',
        email: 'nova@example.com'
    },
]

export const MyScreen = observer(
    () => {
        const { userStore } = useStores()
        const { users, addUser } = userStore

        return (
            <SafeAreaView
                style = {{ 
                    backgroundColor: 'white',
                    flex: 1
                 }}
            >
                <ScrollView
                    style = {{ 
                        flex: 1
                     }}
                    contentContainerStyle = {{ 
                        flexGrow: 1,
                        padding: 20
                     }}
                >
                    {
                        users.map(({ username, email }) => {
                            return (
                                <View
                                    style = {{ 
                                        paddingBottom: 5,
                                        marginBottom: 5,
                                        borderBottomWidth: 1,
                                     }}
                                >
                                    <Text>
                                        {username}
                                    </Text>
                                    <Text
                                        style = {{ 
                                            marginTop: 1.5
                                         }}
                                    >
                                        {email}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>

                <TouchableOpacity
                    onPress={addUser}
                    style = {{ 
                        backgroundColor: 'green',
                        borderRadius: 10,
                        margin: 20,
                     }}
                >
                    <Text
                        style = {{ 
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 20,
                            textAlign: 'center'
                         }}
                    >
                        Add More User
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
)