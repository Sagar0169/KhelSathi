import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { AppUtil } from '../Util/AppUtils';
import BackArrowHeader from '../components/BackArrowHeader';
import { Colors } from '../components/colors/GColors';
import Button from '../components/Button';


export default function EditProfile({navigation}) {
    function backButton() {
        navigation.goBack();
      }
      function buttonHandler(){
        
      }
  return (
    <View style={styles.rootContainer}>
    <BackArrowHeader title="Edit Profile" backButton={backButton} />
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
    <View
            style={{
              flexDirection: "row",
              marginHorizontal: 15,
              marginTop: 20,
              justifyContent: 'center',
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/drawables/profileImg.png")} style={{height:AppUtil.getWP(25),width:AppUtil.getWP(25)}} />
              
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('EditProfile')}>
              <Image source={require("../assets/drawables/editProfile.png")} style={{zIndex:-1,marginStart:-25}} />
            </TouchableOpacity>
          </View>
          <View style={{marginTop:20,marginHorizontal:AppUtil.getWP(5),backgroundColor:'#ffffff',padding:10,borderRadius:AppUtil.getWP(4)}}>
        <Text>
            Full name*
        </Text>
        <TextInput placeholder='Name' style={{backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>
        <Text style={{marginTop:10}}>
            Gender*
        </Text>
        <View style={{flexDirection:'row'}}>
        <TextInput placeholder='Male'  style={{marginEnd:10,flex:1,backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>
        <TextInput placeholder='Female' style={{marginEnd:10,flex:1,backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>
        <TextInput placeholder='Other' style={{flex:1,backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>

        </View>
        <Text style={{marginTop:10}}>
            Email*
        </Text>
        <TextInput placeholder='Email' style={{backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>
        <Text style={{marginTop:10}}>
            Birthday*
        </Text>
        <TextInput placeholder='DOB' style={{backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>

        <Text style={{marginTop:10}}>
            Phone Number*
        </Text>
        <TextInput placeholder='Phone Number' style={{backgroundColor:'#f5f5f5',padding:10,borderRadius:AppUtil.getWP(4),marginTop:10,color:'#000'}}/>

        <Button name="Save Changes" validatonCheck={buttonHandler} />

    </View>
    </ScrollView>
   
  </View>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      paddingTop:AppUtil.getHP(4),
      backgroundColor: "#971c47",
    },
    icon: {
      width: 20,
      height: 20,
      marginTop: 2,
      marginStart: 5,
    },
    header: {
      flex: 4,
      maxWidth: "80%",
      flexDirection: "row",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
    },
    title2: {
      fontSize: 20,
  
      fontWeight: "bold",
    },
    title4: {
      fontSize: 20,
      marginHorizontal: 4,
      fontWeight: "bold",
    },
    title3: {
      fontSize: 16,
  
      color: "#FF1F00",
    },
  });