import React, {useState,useEffect} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addToCart } from '../redux/features/cart/cartSlice';
import {useDispatch, useSelector} from "react-redux"
import { cartTotalSelector } from "../redux/selector";

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


const MedicineDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const total = useSelector(cartTotalSelector);
  const [medi, setMedi] = useState();
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
        <TouchableOpacity style={{ flexDirection: "row" }}
         onPress={() => navigation.navigate('CartScreen')}>
          <Icon name="shopping-cart" size={28} />
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#57D4EB",
              borderRadius:30,
              height: 15,
              width:15,
              alignItems:'center',
            }}
          >
            <Text style={{ color: "black", fontSize: 12 }}>{total}</Text>
          </View>
        </TouchableOpacity>
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
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
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
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
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
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View> */}

            <TouchableOpacity onPress={() => {
                dispatch(addToCart(med));
              }}
               style={style.buyBtn}>
              <Text
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Add to Cart
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
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#dedede',
    marginHorizontal: 7,
    marginBottom: 7,
    //borderRadius: 20,
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: 'black',
    marginBottom: 5,
    marginRight: 3,
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
    backgroundColor: '#57D4EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: '#57D4EB',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default MedicineDetails;