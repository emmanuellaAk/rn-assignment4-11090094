import {View, Text, Image, StyleSheet} from "react-native";

function Header(){
    return (
        <View style={styles.headerSection}>
                <Text style={styles.title}>Eric Atsu</Text>
                <Text style={styles.subtext}>eric@gmail.com</Text>
                <View style={styles.imageSection}>
                    <Image style={styles.profile} source={require('../assets/profile.jpeg')}></Image>
                    <View style={styles.redDot}/>
                </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    headerSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
    },

    title: {
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

    subtext: { 
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
    
    imageSection: {
        position: 'relative',
    },

    profile: { 
        width: 54,
        height: 54,
        top: 72,
        left: 335,
        borderRadius: 100,
    },

    redDot: {
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