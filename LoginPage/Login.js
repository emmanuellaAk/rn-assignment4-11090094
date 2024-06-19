import { StyleSheet, View} from "react-native";
import Header from "../LoginPage/Header";
import Form from "../LoginPage/Form";
import Footer from "../LoginPage/Footer";

export default function Login(){
    return(
        <>
        <View style={styles.container}>
            <Header/>
            <Form/>
            <Footer/>   
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFD',
      alignItems: 'center',
      justifyContent: 'center',
    },
});