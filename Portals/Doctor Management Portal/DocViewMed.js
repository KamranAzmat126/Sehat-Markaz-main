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
import meds from '../../src/screens/Pharmacy/meds';

// import { addToCart } from '../redux/features/cart/cartSlice';
// import {useDispatch, useSelector} from "react-redux"
// import { cartTotalSelector } from "../redux/selector";
const width = Dimensions.get('window').width / 2 - 30;


const DocViewMed = ({navigation, route}) => {
//   const dispatch = useDispatch();
//   const total = useSelector(cartTotalSelector);
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
      <View>
        <View style={style.card}>
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
              marginTop: 2,
            }}>
            <Text style={{fontSize: 15}}>
             {med.price} ml {"\n"}
             Company: Jubliee
            </Text> 
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <View style={style.header}>
        {/* <View>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 26, color: '#18b4f5', fontWeight: 'bold'}}>
          {/* {route.params.pharm.name} Makkah Pharmacy
          </Text>
        </View> */}
      </View>
      <View style={{marginTop: 0, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
        <TouchableOpacity
            onPress={()=>navigation.navigate("DocaddMed")} >
          {/* <Icon name="sort" size={30} color={'white'} /> */}
          <Image
            source={require('../assets/addmed.png')}
            style={{height:25,width:25,}}
            tintColor='white'
            />
          </TouchableOpacity>
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
    color: '#18b4f5',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#18b4f5',
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
    marginTop: 60,
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
    backgroundColor: '#18b4f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DocViewMed;