import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import COLORS from '../../consts/colors';
import meds from './meds';

import { addToCart } from '../redux/features/cart/cartSlice';
import {useDispatch, useSelector} from "react-redux"
import { cartTotalSelector } from "../redux/selector";
const width = Dimensions.get('window').width / 2 - 30;


const MedicineScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const total = useSelector(cartTotalSelector);
  const [med, setMed] = useState();

  useEffect(() => {
     //console.log("cart", meds);
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
  }, []);

  //console.log(meds);
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['TABLETS', 'SYRUP'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({med}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MedicineDetails', med)}>
        <View style={style.card}>
          {/* <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: med.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View> */}

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={med.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {med.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Rs {med.price}
            </Text>
            <TouchableOpacity onPress={() => {
                dispatch(addToCart(med));
              }}
              style={{
                height: 28,
                width: 25,
                backgroundColor: '#57D4EB',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: 'white', fontWeight: 'bold',alignSelf: 'center'}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 26, color: '#57D4EB', fontWeight: 'bold'}}>
          {route.params.pharm.name}
          </Text>
        </View>
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
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={'white'} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={meds}
        renderItem={({item}) => {
          return <Card med = {item} />;
        }}
      />
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: '#57D4EB',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#57D4EB',
  },
  card: {
    height: 200,
    backgroundColor: 'white',
    width,
    borderColor: '#ccc',
    borderWidth: 1,    borderColor: '#ccc',
    borderWidth: 0.6,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: '#dedede',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#57D4EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MedicineScreen;