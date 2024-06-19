import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native"

function Search (){
    return (
        <View style={styles.searchSection}>
            <View style={styles.searchbar}>
                <Image style={styles.searchIcon} source={require('../assets/SearchIcon.png')}></Image>
                <TextInput style={styles.searchInput} placeholder='Search job or position' placeholderTextColor={'#95969D'}></TextInput>
            </View>
            <TouchableOpacity style={styles.filter}>
                <Image style={styles.filterIcon} source={require('../assets/filter.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        marginVertical: 25,
        marginTop: 100,
        gap: 20,
        width: '100%',
        left: 24,
    },

    searchIcon: {
        width: 20,
        height: 20,
        top: '14px',
        left: 14,
        border: 1.5,
        opacity: '40%',
    },

    searchInput: {
        width: 174,
        height: 26,
        bottom: 2,
        left: 24,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: '22.5',
    },

    searchbar: {
        width: 299,
        height: 48,
        top: 14,
        backgroundColor: '#F2F2F3',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        padding: 10,
    },

    filter: {
        backgroundColor: '#F2F2F3',
        width: 48,
        height: 48,
        right: 45,
        borderRadius: 12,
        top: 14,
        padding: 10,
    },

    filterIcon: {
        width: 26,
        height: 26,
        top: 1,
        left: 1,
    },
});

export default Search;