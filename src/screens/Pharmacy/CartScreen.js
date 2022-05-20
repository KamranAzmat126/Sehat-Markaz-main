import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity,Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NIcon from 'react-native-vector-icons/MaterialCommunityIcons';
//import meds from './meds';
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../redux/selector";
const amount = 0;

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.img} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#908e8c'}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Rs {item.quantity *item.price}</Text>
        </View>
        
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.quantity}</Text>
          <View style = {{flexDirection: 'row',}}>
          <View style={style.actionBtn}>
          <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Icon name="remove" size={25} color={'white'} />
              </TouchableOpacity>
              </View>
              <View style={style.actionBtn}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
                <Icon name="add" size={25} color={'white'} />
              </TouchableOpacity>
          </View>
          </View>
          <View style={{ alignSelf: 'flex-end', marginTop:12}}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={{}}
              >
                <NIcon name="trash-can" size={20} color="black" />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <View style = {{alignSelf:'flex-end', marginRight: 24}}>
      <TouchableOpacity onPress={AlertItem}>
        <Text style= {{fontSize: 16, color: 'red'}}>Clear Cart</Text>
      </TouchableOpacity>
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={cart}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rs {totalPrice}</Text>
            </View>
            <View>
                <Text style= {{fontSize:20, color:'#4f4e4c', marginBottom: 10}}>Payment Methood</Text>
                <View style = {{flexDirection: 'row', marginBottom: 20}}>
                <NIcon name="cash" size={25} color={'green'} />
                <Text style= {{fontSize:16, color:'#4f4e4c',marginLeft: 5,marginTop:2 }}>Cash on Delivery</Text>
                </View>
            </View>
            <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
                <TouchableOpacity style= {style.cons} mode="contained" 
                    onPress={() => {(navigation.push('Userdetailphar'))} }>
                    {/* <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} /> */}
                    <Text style={style.btnTxt}> CheckOut</Text>
                </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 30,
    height: 25,
    backgroundColor:'#18b4f5',
    justifyContent: 'center',
    borderRadius: 30,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cons: {
    backgroundColor: '#18b4f5',
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default CartScreen;