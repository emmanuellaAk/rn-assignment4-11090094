// LoadingPage.js
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoadingPage() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Basketball.png')} style={styles.basketball} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  basketball: {
    width: 40,
    height: 40,
  },
});

export default LoadingPage;
