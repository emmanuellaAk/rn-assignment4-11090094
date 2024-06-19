import {View, Text, Image, StyleSheet} from "react-native";

function Header(){
    return (
        <View style={styles.header}>
                <Text style={styles.titles}>Eric Atsu</Text>
                <Text style={styles.subtitletext}>eric@gmail.com</Text>
                <View style={styles.imageArea}>
                    <Image style={styles.profiles} source={require('../assets/profile.jpeg')}></Image>
                    <View style={styles.dot}/>
                </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
    },

    titles: {
        position:'absolute',
        width: '254px',
        height: '36px',
        top: 70,
        left: 24,
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '36px',
        color: '#0D0D26',
    },

    subtitletext: { 
        position: 'absolute',
        width: '254px',
        height: '24px',
        top: 100,
        left: 24,
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#95969D',
    },
    
    imageArea: {
        position: 'relative',
    },

    profiles: { 
        width: 54,
        height: 54,
        top: 72,
        left: 335,
        borderRadius: 100,
    },

    dot: {
        position: 'absolute',
        top: 75,
        left: 375,
        width: 16,
        height: 16,
        borderRadius: 7.5,
        backgroundColor: '#FC1010',
        borderWidth: 4,
        borderColor: '#FAFAFD'
    }
    
});

export default Header;