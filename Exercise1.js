import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const datasource = [
    {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},
    {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}, {key: 'k'},
    {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'}, {key: 'p'}
]

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyles}>
            <Text style={styles.textStyles}>{item.key}</Text>
        </TouchableOpacity>
    );
}

export default function App() {
    return (
        <View>
            <FlatList data={datasource} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 15, margin:10, textAlign:'left',
    },
    opacityStyles: {
        borderWidth: 1,
    }
});
