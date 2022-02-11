import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

//版面樣式
export default function App1_1() {
  //初始化
  const [phone, setPhone] = useState('')
  //功能執行
  const getPhone = () => {
    if (phone === '0912345678') {
      return <Text style={{ color: 'yellow', fontSize: 40 }}>輸入成功！</Text>
    } else {
      return <Text style={{ color: 'red', fontSize: 40 }}>手機輸入錯誤！</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>第１章　作業 １</Text>
      <Text style={styles.mainText}>TextInput元件應用</Text>
      <TextInput
        style={{
          height: 60, width: 350, borderRadius: 10,
          backgroundColor: 'gray', color: 'white',
          fontSize: 40, textAlign: 'left', marginTop: 100,
        }}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        maxLength={10}
        placeholder='請輸入手機號碼'
        keyboardType={'numeric'}
        underlineColorAndroid='yellow'
      //secureTextEntry={true}
      //editable={false}
      //autoFocus={false}
      />

      <Text style={{ color: 'yellow', fontSize: 35 }}>您輸入的手機號碼是：{phone}</Text>
      {getPhone()}

    </View>
  );
}
//樣式表
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    color: 'red'
    //backgroundColor: 'skyblue',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  titleText: {
    marginTop: 60,
    fontSize: 40,
    color: 'red'
  },
  mainText: {
    fontSize: 40,
    color: 'red'
  }
});
