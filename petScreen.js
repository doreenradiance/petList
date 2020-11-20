import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pets from "./components/Pets"

const petsScreen = () => {
    contacts = [
        { name: "jenny", age: "2 years",location:"honney city" },
        { name: "peace", age: "7 years",location:"canada" },
        { name: "terry", age: "5 years" },

    ]
    return (
        <View>
            <FlatList
                data={pets}
                renderItem={({ item }) => {
                    return <Contacts name={item.name} phone={item.number} />
                }}
                keyExtractor={(item) => item.number}
            />
        </View>
    );
}

export default petsScreen;
