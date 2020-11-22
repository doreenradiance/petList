import React from 'react'
import { View, StyleSheet, FlatList, TextInput } from 'react-native'
import Pets from "./components/Pets"
import { Feather } from '@expo/vector-icons';

const PetsScreen = () => {
    pets = [
        { image: require('./assets/jenny.jpg'), name: "Jenny", age: "2 years", location: "Honney city" },
        { image: require('./assets/peace.jpg'), name: "Peace", age: "7 years", location: "Canada" },
        { image: require('./assets/terry.jpg'), name: "Terry", age: "5 years", location: "New York" },

    ]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <TextInput placeholder="Search Here" style={styles.textInput} />
                </View>
                <FlatList
                    data={pets}
                    renderItem={({ item }) => {
                        return <Pets name={item.name} age={item.age} location={item.location} image={item.image} />
                    }}
                    keyExtractor={(item) => item.age}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#e8e6e6",
        marginTop: 20
    },
    
    container: {
        flex: 1,
        backgroundColor: "#e8e6e6",
        justifyContent: "space-around",
    },

    textInput: {
        flexDirection: "row",
        backgroundColor: "white",
        width: 330,
        borderRadius: 10,
        marginVertical: 20,
        marginLeft: 15,
        textAlign: "center"
    }
})

export default PetsScreen;
