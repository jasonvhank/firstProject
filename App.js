import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native';
//import App1_1 from './src/screens/App1_1';
//import App1_2 from './src/screens/App1_2';

//版面樣式
export default function App() {
  //初始化
  const [countA, setCountA] = useState('')
  const [countB, setCountB] = useState('')
  //功能執行
  const getResult = () => {
    if (countA != '' & countB != '') {
      if (countA === '0987654321' & countB === 'test') {
        return <Text style={{ color: 'yellow', fontSize: 40 }}>輸入成功！</Text>
      }
      else {
        return <Text style={{ color: 'red', fontSize: 40 }}>輸入錯誤！</Text>
      }
    } else {
      return <Text style={{ color: 'red', fontSize: 40 }}>請輸入帳號密碼！</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText1}>第１章　作業 3</Text>
      <Text style={styles.titleText2}>密碼判斷APP</Text>

      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setCountA(text)}
        maxLength={10}
        placeholder='請輸入手機號碼'
        keyboardType={'numeric'}//限制鍵盤
        value={countA}
        underlineColorAndroid='yellow'
        autoFocus={true}//閃爍

      />
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setCountB(text)}
        maxLength={10}
        placeholder='請輸入密碼(英文大小寫有差別)'
        keyboardType={'numeric'}//限制鍵盤      
        value={countB}
        underlineColorAndroid='yellow'
        secureTextEntry={true}//隱藏        
      />

      <Text style={styles.mainText}>狀態：{getResult()}</Text>
      <TouchableOpacity
        style={styles.buttonLogin}

        onPress={() => getResult()}>

        <Text style={styles.buttonText}>登入</Text>
      </TouchableOpacity>

    </View>
  );
}
//樣式表
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'skyblue', alignItems: 'center', color: 'red'
  },
  titleText1: {
    marginTop: 60, fontSize: 40, color: 'red'
  },
  titleText2: {
    fontSize: 40, color: 'red'
  },
  mainText: {
    color: 'yellow', fontSize: 35
  },
  inputText: {
    height: 60, width: 500, borderRadius: 10, backgroundColor: 'gray', color: 'white',
    fontSize: 30, textAlign: 'center', marginTop: 30
  },
  buttonText: {
    color: 'white', textAlign: 'center', fontSize: 20
  },
  buttonLogin: {
    width: 120, height: 40, backgroundColor: '#00aeef', borderRadius: 20, justifyContent: 'center', margin: 30
  }
});
