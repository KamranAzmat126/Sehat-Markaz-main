import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar } from 'react-native-paper';
import Data from "./ambulanceDummyData";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar'
import axios from "axios";
import url from "../../../url.json";

export default function FoundNearbyAmbulances({ navigation, route }) {
  const [data, setData] = useState();
  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await axios.get(`${url.url}api/lab/`);
        setData(res.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.txt}>
        Ambulance Services in {route.params.add}
        </Text>
      </View>
      <SearchBar/>
      <TouchableOpacity
        onPress={() => ('')}
        >
        <View style = {styles.locbtn} >
        <Ionicons name="location-outline" size={35} color="#57D4EB" />
        <Text style={styles.locTxt}>Nearby Ambulance Service</Text>
        </View>
      </TouchableOpacity>

      {/* <FlatList
        data={Data}
        style={{ width: "90%" }}
        renderItem={(itemData) => {
          if (
            itemData.item.address.toUpperCase() ===
            route.params.add.toUpperCase()
          ) {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AmbulanceDetails", {
                    pharm: itemData.item,
                  })
                }
                style={styles.btn}
              >
                <Text style={styles.btnTxt}>{itemData.item.name}</Text>
              </TouchableOpacity>
            );
          }
        }}
        keyExtractor={(itemData, index) => itemData.id}
      ></FlatList> */}

      <FlatList
        data={Data}
        renderItem={(itemData) => {
          if (
            itemData.item.address.toUpperCase() ===
            route.params.add.toUpperCase()
          ) {
            return (
            <View style= {styles.cardsWrapper}>
              <TouchableOpacity style={styles.card} 
                onPress={() =>
                 navigation.push("AmbulanceDetails", { pharm: itemData.item })
              }>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
              source={require('../asset/ambulance.png')}
              style={styles.cardImg}
                size= {100}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{itemData.item.name}</Text>
              <Text style={styles.cardDetails}>
                Opens: {itemData.item.timing}{"\n"}
              </Text> 
            </View>
          </TouchableOpacity>
          </View>
            );
          }
        }}
        keyExtractor={(itemData, index) => itemData.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "8%",
    flex: 1,
  },
  head: {
    backgroundColor: "#f6f6f6",
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  txt: {
    margin: 20,
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  // btn: {
  //   padding: 25,
  //   elevation: 3,
  //   backgroundColor: "darkgray",
  //   borderRadius: 10,
  //   marginVertical: 10,
  // },
  // btnTxt: {
  //   fontSize: 16,
  // },

  locTxt:{
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight:'bold',
    marginTop:8
    
  },
  locbtn: {
    flexDirection:'row',
    backgroundColor:'#d5e9f0',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center'
  },

  cardsWrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRightWidth:0,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    justifyContent:'center',
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
  },
});
