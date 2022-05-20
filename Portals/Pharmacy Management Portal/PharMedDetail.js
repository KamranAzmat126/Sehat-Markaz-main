import React, {useState,useEffect} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const StoreContainer = () => {
//   const dispatch = useDispatch();
//   const [meds, setMeds] = useState();

//   useEffect(() => {
//      console.log("cart", cart);
//     // fetch("https://fakestoreapi.com/products")
//     //   .then((res) => res.json())
//     //   .then((json) => setData(json));
//   }, []);

//   console.log(meds);


const PharMedDetail = ({navigation, route}) => {
  const med = route.params;
  useEffect(() => {
     //console.log("cart", med);
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
  }, []);

  // const med = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>

      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
      <View style={style.imageContainer}>
        <Image source={med.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          {/* <View style={style.line} /> */}
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Quantity</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {/* {med.price} */}100
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{med.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Rs {med.price}
            </Text>
          </View>
        </View>
        
        <View style={{paddingHorizontal: 20, marginTop: 10,marginBottom: '20%'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {med.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom:15
            }}>
            <TouchableOpacity onPress={() => {navigation.navigate('UpdateMed');}}
               style={style.buyBtn}>
              <Text
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Update 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#dedede',
    marginHorizontal: 7,
    marginBottom: 7,
    height: '50%',
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: 'black',
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: '90%',
    height: 50,
    backgroundColor: '#43ba63',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: '#43ba63',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default PharMedDetail;