import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import {useRoute} from "@react-navigation/native";

export default function MenuScreen() {
  const route = useRoute();
  return (
    <View>
      <Header title={route.name}/>
      <Text>Menu Screen</Text>
    </View>
  );
}
