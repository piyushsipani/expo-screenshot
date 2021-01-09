import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,useEffect } from 'react-native';
import {usePreventScreenCapture} from "expo-screen-capture"
import * as Permissions from "expo-permissions"

export default function App() {

usePreventScreenCapture();
async function getCameraPermission(){

  const {status}=await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )

  if(status=="granted"){
    addScreenshotListener(()=>{
        alert("You took a screenshot")
    })
  }
}

useEffect(()=>{
  getCameraPermission()
},[])


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder="password"
        secureTextEntry
        style={{borderWidth:1,height:50}}
        onFocus={()=>preventScreenCaptureAsync('password')}
        onBlur={()=>allowScreenCaptureAsync('password')}
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
