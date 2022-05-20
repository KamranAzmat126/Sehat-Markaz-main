import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../../src/screens/components/Button';
import TextInputR from '../../src/screens/components/TextInputR';
import { theme } from '../../src/screens/core/theme';
// import { emailValidator } from '../helpers/emailValidator';
// import { passwordValidator } from '../helpers/passwordValidator';
// import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../../src/screens/helpers/emptyfield';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';

const AddMed = ( {navigation}) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [company, setCompany] = useState({ value: '', error: '' });
  const [country, setCountry] = useState({ value: '', error: '' });
  const [weig, setWeig] = useState({ value: '', error: '' });
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = React.useState('tablet');

  const DropdownT = () => {
    return (
      <View style={{width: "100%",
        height: 53,
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        borderColor: "gray",
        backgroundColor: 'white',
        color:'red'}}>
        <Picker
          selectedValue={selectedValue}
          itemStyle = {'blue'}
          style={[{ height: '100%', width: '100%'}, styles.pick]}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          mode ="dropdown"
          onPress
        >
          <Picker.Item label="Choose Type" value="" />
          <Picker.Item label="Tablet " value="ta" />
          <Picker.Item label="Syrup" value="sy" />
        </Picker>
      </View>
    );
  }

  const _onSignUpPressed = () => {
    const nameError = emptyfield(name.value);
    const companyError = emptyfield(company.value);
    const countryError = emptyfield(country.value);
    const weigError = emptyfield(weig.value);
 //   const phoneError = emptyfield(phone.value); 

    if (companyError || countryError || nameError || weigError) {
      setName({ ...name, error: nameError });
      setCompany({ ...company, error: companyError });
      setCountry({ ...country, error: countryError });
      setWeig({ ...weig, error: weigError });
//      setPhone({ ...empty, error: phoneError });
      return;
    }

    navigation.navigate('');
  };

  const pickfromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:350, 
      height:300,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  const pickfromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:350, 
      height:300,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style= {styles.container}>
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Text style = {{color: '#43ba63', fontSize:22,fontWeight: 'bold'}}>Add Medicine</Text>

      <TextInputR
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        
      />
      <TextInputR
        label="Company"
        returnKeyType="next"
        value={company.value}
        onChangeText={text => setCompany({ value: text, error: '' })}
        error={!!company.error}
        errorText={company.error}
      />
      <TextInputR
        label="Country"
        returnKeyType="next"
        value={country.value}
        onChangeText={text => setCountry({ value: text, error: '' })}
        error={!!country.error}
        errorText={country.error}
      />
      <TextInputR
        label="Weightage"
        returnKeyType="next"
        value={weig.value}
        onChangeText={text => setWeig({ value: text, error: '' })}
        error={!!weig.error}
        errorText={weig.error}
      />
{/* 
      <DropdownT/> */}
      <View style = {{marginRight:75}}>
            <Text style = {styles.txt}> Medicine Type</Text>
            <View style = {{flexDirection: 'row'}}>
                <RadioButton
                    value="tablet"
                    color= '#43ba63'
                    status={ checked === 'tablet' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('male')}
                />
                <Text style = {styles.ratxt}> Tablet</Text>
                <RadioButton
                    value="syrup"
                    color= '#43ba63'
                    status={ checked === 'syrup' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('syrup')}
                />
                <Text style = {styles.ratxt}> Syrup</Text>
                <RadioButton
                    value="other"
                    color= '#43ba63'
                    status={ checked === 'other' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('other')}
                />
                <Text style = {styles.ratxt}> Other</Text>
                </View>
            </View>
      <Button
        mode="outlined"
        icon = {'upload'} 
        onPress = {() =>setModalVisible(true)}
        labelStyle={{color: '#3d3c3a'}}
        style={{marginTop: 6, padding:4, width:'100%',borderWidth: 1, marginBottom: 20}}>
        Upload Image
      </Button>
      <Image style = {styles.imagearea} source ={{uri:image}}></Image>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style = {styles.modalview}>
          <Button
            mode="contained"
            icon = 'camera'
            onPress = {pickfromCamera}
            style={{marginTop: 10, alignSelf: 'center', color: "#43ba63" }}>
            Camera
          </Button>
          <Button
            mode="contained"
            icon = 'image-area'
            onPress = {pickfromGallery}
            style={{marginTop: 10, alignSelf: 'center' }}>
            Gallery
          </Button>
          <Button
            mode="contained"
            onPress = {()=> setModalVisible(!modalVisible)}
            style={{marginTop: 10, alignSelf: 'center' }}>
            Cancel
          </Button>
          </View>
        
        </Modal>
      </View>

      </ScrollView>
      <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
                <TouchableOpacity style= {styles.cons} mode="contained" 
                    onPress={_onSignUpPressed }>
                    <Text style={styles.btnTxt}> Add</Text>
                </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    },
  head: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignSelf:'center',
  },
  headcon: {
    alignItems: 'center',
    marginTop: 50
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  modalview: {
    position: 'absolute',
    bottom:0,
    width:'100%',
    backgroundColor: '#e9f0ef'
  },
  cons: {
    backgroundColor: '#43ba63',
    width: '80%',
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
  },
  txt: {
    marginTop: 6,
    marginLeft: 5,
    fontSize: 16 
},
ratxt: {
    marginTop: 8,
    fontSize: 14 
},
});

export default AddMed;