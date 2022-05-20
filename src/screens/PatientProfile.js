import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export default function PatientProfile({ route, navigation }) {
  // const [data, setData] = useState(route.params.doc);

  return (
    <ScrollView style={styles.container}>
      <View style = {{height: 240, backgroundColor: '#f2fafc',justifyContent:'center'}}>
      <Avatar.Image source={require('./asset/image.jpg')} size= {150} style={styles.img} />
      <Text style={styles.name}>Dr. Kamran Azmat </Text>
      <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
      <Text style={{fontSize: 15, alignSelf: 'center', marginBottom: 10, color: '#65767d', marginRight: 50}}>Age 50</Text>
      <Text style={{fontSize: 15, alignSelf: 'center', marginBottom: 10,color: '#65767d'}}>Male</Text>
      </View>
      </View>
      <View style={styles.detailContainer}>
      <View style={styles.cont}>
          <Text style={styles.head}>Phone No</Text>
          <Text style={styles.sub}>03175739548</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Email</Text>
          <Text style={styles.sub}>kamran.azmat926@gmail.com</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Specialities</Text>
          <Text style={styles.sub}>Genral Physician, Neurologist</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Experience</Text>
          <Text style={styles.sub}>10 Years</Text>
        </View>
        <Text style={styles.head}>Qualification</Text>
        <Text style={styles.sub}>Post Graduate, Gift University</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.head}>Serving</Text>
        <View style = {{backgroundColor: '#18b4f5', padding: 7,borderRadius: 8}}>
        <Text style={{fontSize: 14, color: 'white'}}>Private</Text>
        </View>
        </View>
        <Text style={styles.sub}>Noor Hospital, Islamabad</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style= {styles.cons} mode="contained" 
        onPress={() => (navigation.push('EditDocProfile'))}>
          <Text style={styles.btnTxt}>Edit Profile</Text>
        </TouchableOpacity>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", //"#EEEAE2",
    height: '100%'
  },
  img: {
    alignSelf: "center",
  },
  detailContainer: {
    marginVertical: 5,
    padding: 15,
  },
  name: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical:5
  },
  cont: {
    flexDirection: 'column',
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2d2e2e'
  },
  btn: {
    flexDirection: 'column',
    padding: 10,
    alignItems:'center'
  },
  cons: {
    backgroundColor: '#18b4f5',
    height: 44,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
