import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
//import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import url from "../../url.json";

export default function EditLabProfile({ route }) {
  const [data, setData] = useState("");
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [profile_pic, setImage] = useState(
    "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
  );
  const { colors } = useTheme();

  useEffect(() => {
    const apiCall = async () => {
      console.log("a");
      try {
        const res = await axios.get(
          `${url.url}api/pharmacy/62311c1743d3123d6855c921`
        );
        setImage(res.data.profile_pic);
        setName(res.data.name);
        setAddress(res.data.address);
        setContact(res.data.contact);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspectRatio: [1, 1],
        quality: 1,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
        //settemp(newFile);
        //setImage(newFile);
        Alert.alert("Success", "Image Uploaded Successfully!");
      }
      console.log(data);
    } else {
      Alert.alert("Warning", "Permissions to Gallery are Required");
    }
  };

  const handleUpload = (image) => {
    const d = new FormData();
    d.append("file", image);
    d.append("upload_preset", "esehatmarkaz");
    d.append("cloud_name", "esehatnarkaz");

    fetch("https://api.cloudinary.com/v1_1/esehatmarkaz/image/upload", {
      method: "POST",
      body: d,
    })
      .then((response) => response.json())
      .then((items) => {
        setImage(items.url);
        console.log(items.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onPresHandler = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = { name, age, bloodgroup, address, contact, profile_pic };
    try {
      const res = await axios.post(
        `${url}api/pharmacy/update/62311c1743d3123d6855c921`,
        body,
        config
      );
      console.log("abc");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.uploadImageContainer}>
        <View style={styles.naar}>
          <Image
            source={{
              uri: profile_pic,
            }}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity
              onPress={pickFromGallery}
              style={styles.uploadBtn}
            >
              <Text>{profile_pic ? "Edit" : "Upload"} Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <View style={styles.main}>
      <View style={styles.action}>
          <FontAwesome name="user" color={colors.text} size={26} />
          <TextInput
            placeholder="Own By"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Fontisto name="laboratory" color={colors.text} size={26} />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={26} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={26} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} size={26} />
          <TextInput
            placeholder="Address"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => {
            onPresHandler();
            alert("Profile Data Updated");
          }}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 10,
    backgroundColor: '#ffff'
  },
  uploadImageContainer: {
    marginTop: '5%',
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  naar: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  main: {
    marginTop: 5,
    padding: 15,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5a849",
    alignItems: "center",
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -3,
    paddingLeft: 15,
    color: "#05375a",
  },
});
