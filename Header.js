import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
      <TouchableOpacity style={styles.header}>
      <Text style={styles.text}>School Attendance</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "purple",
  },
  text: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
})