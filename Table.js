import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Table extends React.Component{
  render(){
    return (
      <View style={styles.grid}>
      <Text style={styles.text}>Roll no.  </Text>
      <Text style={styles.text}>    Names            </Text>
      <Text style={styles.text1}>       Attendance      </Text>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "yellow",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  text1: {
    backgroundColor: "yellow",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    //paddingRight: 42,
  },
  grid: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
})