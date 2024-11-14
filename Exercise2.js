//import - step 1
import React from 'react';
import {SectionList, StyleSheet, StatusBar, Text, TouchableOpacity, View} from 'react-native';

//create data - step 2
const datasource = [
    {   data:[
            {key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}
        ],
        title:"Vowels",
        bgcolor:"skyblue"
    },
    {   data:[
            {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'},
            {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'p'},
            {key: 'q'}, {key: 'r'}, {key: 's'},
        ],
        title:"Consonants",
        bgcolor:"khaki",
        classroom: "E63A"
    }];

//how each line/item should look like
const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>
                {item.key}
            </Text>
        </TouchableOpacity>
    );
};

//how each section header should look like
const renderSection = ({section  }) => {
    return (
        <Text style={[styles.headerText, {backgroundColor: section.bgcolor}  ]}>
            {section.title}
        </Text>
    );
};

//What to display in app screen
const App = () => {
    return (
        <View>
            <StatusBar hidden={true}/>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSection}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15, margin: 10, textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20, margin: 10,
        textAlign: 'center', fontWeight:'bold',
        backgroundColor : 'orange'
    },
});

export default App;
