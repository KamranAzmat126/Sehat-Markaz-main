import React from "react";
import { Provider } from "react-native-paper";
import { Text, View, Pressable } from "react-native";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "./core/theme";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard, NotificationsTab } from "./User";
import MyAppoint from './myappoint';
//import PharmacyManagementProfile from "../../Portals/Pharmacy Management Portal/pharmacyManagementProfile";
import ProfileScreen from "../../Portals/Pharmacy Management Portal/Profilephar";
import PatientProfile from "./PatientProfile";


const Tab = createBottomTabNavigator();

function Signout({ navigation }) {
  const handleSignOut = async (navigation) => {
    // try {
    //   await auth.signOut().then(
    navigation.navigate("StartScreen", { otherParam: null }); 
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{
          backgroundColor: "#F4F4F4",
          marginLeft: 20,
          width: 145,
          borderRadius: 50,
        }}
        mode="outlined"
        onPress={handleSignOut}
      >
        Signout
      </Button>
    </View>
  );
}

const MyTabs = ({ navigation }) => {
  return (
    <Provider theme={theme}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="white"
        barStyle={{ backgroundColor: theme.colors.primary }}
        screenOptions={{
          tabBarActiveTintColor: "#18b4f5",
          tabBarInactiveTintColor: "white",
          tabBarActiveBackgroundColor: "#ffff",
          tabBarInactiveBackgroundColor: "#18b4f5",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation, route }) => ({
            title: "Sehat Markaz",
            tabBarLabel: "Dashboard",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            // headerRight: () => (
            //   <Pressable
            //       onPress={() => navigation.navigate('NotificationsTab')}
            //       style={({ pressed }) => ({
            //           opacity: pressed ? 0.5 : 1,
            //       })}>
            //       <FontAwesome
            //           name="bell-o"
            //           size={25}
            //           color='black'
            //           style={{ marginRight: 20 }}
            //       />
            //   </Pressable>
            //   ),
          })}
        />
        {/* <Tab.Screen
        name="ViewProfile"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Profile',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          headerRight: () => (
            <Pressable
                onPress={() => navigation.navigate('NotificationsTab')}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                    name="bell-o"
                    size={25}
                    color='black'
                    style={{ marginRight: 20 }}
                />
            </Pressable>
            ),
        }}
      /> */}
        <Tab.Screen
          name="Profile"
          component={PatientProfile}
          options={{
            tabBarLabel: "Profile",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={25} color={color} />
            ),
          }}
        />
      <Tab.Screen
        name="Yours Appointments"
        component={MyAppoint}
        options={{
          tabBarLabel: 'Appointments',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-clock" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
          name="Notiications"
          component={NotificationsTab}
          options={{
            tabBarLabel: "Notiications",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bell" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Logout"
          component={Signout}
          options={{
            tabBarLabel: "LogOut",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="logout" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
};

export default function Navigation() {
  return <MyTabs />;
}
