import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import StarbucksCardScreen from '../screens/StarbucksCardScreen'
import ShopScreen from '../screens/ShopScreen'
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 64 : 84,
          ...styles.sidebar,
        },
        headerShown: false,
      }}
    >
      {routerApplicationArray.map((item, i) => (
        <Tab.Screen
          key={i}
          name={item.nameScreen}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => {
              const NavText = ({ name }) => {
                if (Platform.OS === 'android') {
                  return (
                    <Text
                      style={{
                        color: focused ? '#4AA366' : '#6F8094',
                        fontSize: 12,
                      }}
                    >
                      {name}
                    </Text>
                  )
                } else {
                  // return null;
                  return (
                    <Text
                      style={{
                        color: focused ? '#4AA366' : '#6F8094',
                        fontSize: 12,
                        marginTop: 3,
                      }}
                    >
                      {name}
                    </Text>
                  )
                }
              }

              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: Platform.OS === 'ios' ? -5 : 0,
                  }}
                >
                  <Image
                    source={item.imageUrl}
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      tintColor: focused ? '#4AA366' : '#6F8094',
                    }}
                  />
                  <NavText name={item.nameScreen} />
                </View>
              )
            },
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const routerApplicationArray = [
  {
    nameScreen: 'Home',
    component: HomeScreen,
    imageUrl: require('../assets/nav/icon-1.png'),
  },
  {
    nameScreen: 'Menu',
    component: MenuScreen,
    imageUrl: require('../assets/nav/icon-2.png'),
  },
  {
    nameScreen: 'Starbucks Card',
    component: StarbucksCardScreen,
    imageUrl: require('../assets/nav/icon-3.png'),
  },
  {
    nameScreen: 'Shop',
    component: ShopScreen,
    imageUrl: require('../assets/nav/icon-4.png'),
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebar: {
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    borderTopWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: 64,
    shadowRadius: 16,
    shadowColor: '#8f9bb3',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    backgroundColor: '#fff',
  },
})

// export default function Navigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         // tabBarShowLabel: Platform.OS === 'android',
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           ...styles.sidebar
//         }
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({focused}) => {

//             const NavText = ({name}) => {
//               if (Platform.OS === 'android') {
//                 return (
//                   <Text>{name}</Text>
//                 )
//               } else {
//                 return false
//               }
//             }

//             return (
//               <View style={{alignItems: 'center', justifyContent: 'center', bottom: 5}}>
//                 <Image
//                   source={require('../assets/nav/icon-1.png')}
//                   style={{
//                     width: 25,
//                     height: 25,
//                     resizeMode: "contain",
//                     tintColor: focused ? '#4AA366' : '#6F8094'
//                   }}
//                 />
//                 <NavText name="Home"/>
//               </View>
//             )
//           }
//         }}
//       />
//       <Tab.Screen name="Menu" component={MenuScreen}/>
//       <Tab.Screen name="Starbucks Card" component={StarbucksCardScreen}/>
//       <Tab.Screen name="Shop" component={ShopScreen}/>
//     </Tab.Navigator>
//   )
// }
