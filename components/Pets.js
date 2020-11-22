import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

export default function pets({ name, age, location, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />

            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.dog}>Dog</Text>
                <Text style={styles.age}>{age}</Text>
                <View style={styles.icon}>
                    <SimpleLineIcons name="location-pin" size={24} color="black" />
                    <Text style={styles.location} numberOfLines={1}>{location}</Text>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
    },

    image: {
        width: 150,
        height: 190,
        borderRadius: 10,
        marginLeft: 25
    },

    infoContainer: {
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 120,
        width: 150,
        marginTop: 30,

    },

    name: {
        color: "#5b038f",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },

    dog: {
        fontSize: 15,
        marginLeft: 20,
    },

    age: {
        fontSize: 15,
        marginLeft: 20,
        marginBottom: 5
    },

    location: {
        fontSize: 15,
        marginLeft: 5,
    },

    icon: {
        flexDirection: "row",
        marginLeft: 15
    }
})
