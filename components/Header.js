import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={{
              marginRight: 18,
              display: 'flex',
            }}
          >
            <Image
              source={require('../assets/icons/notification.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex'
            }}
          >
            <Image
              source={require('../assets/icons/menu.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 88,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 18,
    paddingBottom: 20,
    paddingRight: 18,
    shadowRadius: 16,
    shadowColor: '#8F9BB3',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 7,
      height: 8
    }
  },
  title: {
    color: 'rgba(29, 77, 79, 1)',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: 'row',
  }
})