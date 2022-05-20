import React from 'react'
import {View, Text, Image, ImageBackground,TouchableOpacity} from 'react-native'
import {TextInput,ScrollView,} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#43ba63",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                   // source={require('../images/1.png')}
                    style={{
                        height:10,
                        width:20,
                        marginTop:50
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:5,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Al-Madina Pharmacy</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                           source={require('../assets/sehatblacklog.png')}
                            style={{height:80,width:80}}
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(122, 214, 148,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
            </LinearGradient>
            
        
                <ScrollView 
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                    style={{
                        height:150,
                        elevation:2,
                        backgroundColor:"#FFF",
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:160
                    }}
                    onPress={()=>navigation.navigate("Profile")}
                    >
                        <Icon name="user" size= {70} color= '#43ba63' />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                alignItems: "center"
                            }}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Pe")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Icon name="bell-o" size= {70} color= '#43ba63'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Notification</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("ViewMed")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Fontisto name="pills" size= {70} color= '#43ba63' />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Medicine</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <MaIcon name="pending-actions" size= {70} color= '#43ba63'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Orders</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("ViewMed")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                         <MIcon name="android-messages" size= {70} color= '#43ba63'  /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Messages</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <MIcon name="logout" size= {70} color= '#43ba63'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                </ScrollView>            
        </View>
    )
}
export default Home;