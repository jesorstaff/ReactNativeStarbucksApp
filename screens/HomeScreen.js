import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Header from "../components/Header";
import {useRoute} from "@react-navigation/native";

export default function HomeScreen() {
  const route = useRoute();
  return (
    <View>
      <StatusBar/>
      <Header title={route.name}/>
      <View style={styles.shadow}>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/brand.png')}
            style={styles.image}
          />
          <View style={styles.text}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 16,
                }}
              >
                Total Price
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 30,
                }}
              >
                23,35 USD
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 7
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 14,
                  marginBottom: 3
                }}
              >
                Top up balance
              </Text>
              <Image
                source={require('../assets/icons/right-arrow.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowRadius: 33,
    shadowColor: "#1A3B34",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  card: {
    marginTop: 18,
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 20,
    overflow: "hidden",
    height: 142,
    backgroundColor: '#4AA366',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: 177,
  },
  text: {
    position: 'absolute',
    bottom: 21,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 26,
    paddingRight: 32,
    color: '#fff',
  }
})
