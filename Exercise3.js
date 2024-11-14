import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, Image, Button, SectionList, StyleSheet, View } from 'react-native';

// Sample Pokémon Data (You can expand this data)
const pokemonData = [
    {
        element: 'Water',
        bgColor: '#2196F3', // Blue for Water
        data: [
            {
                name: 'Vaporeon',
                image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134-2x.png',
            },
            {
                name: 'Poliwrath',
                image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_62-2x.png',
            },
        ],
    },
    {
        element: 'Fire',
        bgColor: '#FF5722', // Orange for Fire
        data: [
            {
                name: 'Charizard',
                image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png',
            },
            {
                name: 'Rapidash',
                image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_78-2x.png',
            },
        ],
    },
];

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        color: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
    },
    itemText: {
        flex: 1,
        fontSize: 15,
        alignSelf: 'center',
    },
    itemImage: {
        width: 200, // Set to a reasonable width
        height: 300, // Set to a reasonable height
        borderRadius: 5,
        marginLeft: 10, // Space between text and image
        resizeMode: 'contain', // Ensures the image maintains its aspect ratio
    },
    addPokemonButton: {
        marginBottom: 20,
    },
});

const App = () => {
    const [pokemonList, setPokemonList] = useState(pokemonData);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
        </View>
    );

    const renderSectionHeader = ({ section: { element, bgColor } }) => (
        <Text style={[styles.headerText, { backgroundColor: bgColor }]}>{element}</Text>
    );

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Add Pokémon Button */}
            <Button title="Add Pokémon"/>

            {/* Pokémon List grouped by elements using SectionList */}
            <SectionList
                sections={pokemonList}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default App;
