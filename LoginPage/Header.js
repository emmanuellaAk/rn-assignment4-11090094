import {StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.headerSection}>
            <Text style={styles.heading}>Jobizz</Text>
            <Text style={styles.subtitle}>Welcome Back 👋</Text>
            <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
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

    heading: {
        position: 'absolute',
        width: 150,
        height: 33,
        top: 106,
        left: 24,
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 33,
        color: '#356899',
    },

    subtitle: {
        position: 'absolute',
        width: 207,
        height: 34,
        top: 147,
        left: 24,
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 33.6,
        color: '#0D0D26',
    },

    description: {
        position: 'absolute',
        width: 170,
        height: 22,
        top: 188,
        left: 24,
        opacity: 0.40,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22.4,
        color: '#0D0D26',
    },
})