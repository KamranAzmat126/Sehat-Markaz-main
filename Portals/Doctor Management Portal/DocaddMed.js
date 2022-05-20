import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../../src/screens/components/Button';
import TextInput from '../../src/screens/components/TextInput';
import { theme } from '../../src/screens/core/theme';
import {emptyfield } from '../../src/screens/helpers/emptyfield';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';

const DocaddMed = ( {navigation}) => {
 const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [empty, setEmpty] = useState({ value: '', error: '' });
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = React.useState('tablet');


  const _onSignUpPressed = () => {
    const nameError = emptyfield(name.value);
    const emailError = emptyfield(email.value);
    const passwordError = emptyfield(password.value);
    const emptyError = emptyfield(empty.value);
    const phoneError = emptyfield(phone.value); 

    if (emailError || passwordError || nameError || emptyError||phoneError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setEmpty({ ...empty, error: emptyError });
      setPhone({ ...empty, error: phoneError });
      return;
    }

    navigation.navigate('');
  };

  // const _onSignUpPressed = () => {
  //  try {
  //     if (email.value !== '' && password.value !== '') {
  //         auth.createUserWithEmailAndPassword(email.value, password.value); 
  //         navigation.replace('LoginScreen', {otherParam: String})
  //     }
  //   } catch (error) {
  //       alert(error.message)
  //   }
  // };

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
      {/* <StatusBar backgroundColor="skyblue" translucent={true}/> */}
      {/* <Logo /> */}
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Text style = {{color: '#18b4f5', fontSize:22,fontWeight: 'bold'}}>Add Medicine</Text>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        
      />
      <TextInput
        label="Company"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
      />
      <TextInput
        label="Country"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
      />
      <TextInput
        label="Weightage"
        returnKeyType="next"
        value={empty.value}
        onChangeText={text => setEmpty({ value: text, error: '' })}
        error={!!empty.error}
        errorText={empty.error}
      />

      <View style = {{marginRight:75}}>
            <Text style = {styles.txt}> Medicine Type</Text>
            <View style = {{flexDirection: 'row'}}>
                <RadioButton
                    value="tablet"
                    color= '#18b4f5'
                    status={ checked === 'tablet' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('tablet')}
                />
                <Text style = {styles.ratxt}> Tablet</Text>
                <RadioButton
                    value="syrup"
                    color= '#18b4f5'
                    status={ checked === 'syrup' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('syrup')}
                />
                <Text style = {styles.ratxt}> Syrup</Text>
                <RadioButton
                    value="other"
                    color= '#18b4f5'
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
        
      {/* <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View> */}
      </View>

      </ScrollView>
      <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
                <TouchableOpacity style= {styles.cons} mode="contained" 
                    onPress={_onSignUpPressed }>
                    {/* <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} /> */}
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
    backgroundColor: '#ffff'
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
    backgroundColor: '#18b4f5',
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

export default DocaddMed;