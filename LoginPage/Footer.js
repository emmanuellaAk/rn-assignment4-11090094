import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

function Footer(){
    return(
        <>
        <View style={styles.footer}>
            <View style={styles.line}></View>
            <Text style={styles.footerText}>Or continue with</Text>
            <View style={styles.line}></View>
        </View>

        <View style={styles.icons}>
            <TouchableOpacity style={styles.apple}>
                <Image source={require('../assets/apple.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.google}>
                <Image source={require('../assets/Goggle2.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebook}>
                <Image source={require('../assets/Facebook3.png')}></Image>
            </TouchableOpacity>
        </View>
        
        <View>
            <Text style={styles.registerText}>Haven't an account? <Text style={styles.register}>Register</Text></Text>
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#AFB0B6',
        width: 98,
        bottom: 220,
        marginLeft: 30,
        marginRight: 30,
    },

    footerText: {
        width: 106,
        height: 16,
        bottom: 220,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16.44,
        alignSelf: 'center',
        color: '#AFB0B6',
    },

    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 420,
    },

    apple: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 50,
        width: 56,
        height: 56,
        bottom: 190,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    google: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 50,
        width: 56,
        height: 56,
        bottom: 190,
        alignItems: 'center',
        justifyContent: 'center',
    },

    facebook: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 50,
        width: 56,
        height: 56,
        bottom: 190,
        left: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    registerText: {
        width: 189,
        height: 18,
        bottom: 140,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17.71,
        color: '#BDBEC2',
    },

    register: {
        color: '#356899',
    },
})

export default Footer;