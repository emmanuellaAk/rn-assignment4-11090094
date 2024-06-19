import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../HomePage/Header';
import Search from '../HomePage/Search';
import FeaturedJobs from '../HomePage/FeaturedJobs';
import PopularJobs from '../HomePage/PopularJobs';

export default function HomePage() {
  return (
    <>
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
      <Header/>
      <Search/>
      <FeaturedJobs/>
      <PopularJobs/>
    </View>
    </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FAFAFD',
    },

    container: {
        flex: 1,
        backgroundColor: '#FAFAFD',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

