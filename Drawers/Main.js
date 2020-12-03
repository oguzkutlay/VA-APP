import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

function MainDrawer() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Dummy text to be sure scrol view is working!!
          </Text>
        </ScrollView>  
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    conatiner: {
      flex: 1
    },
    scrollView: {
      backgroundColor: 'white',
    },
    text: {
      fontSize: 20
    }
  });
  export default MainDrawer;