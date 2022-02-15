import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//版面樣式
export default function App1_2() {
  //初始化
  const [imgA, setImgA] = useState(require('../img/manager.png'))
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  //功能執行


  //圖片來源https://tw.clipart.me/17098/10-user-icons-free-psd-and-png
  return (
    <View style={styles.container}>
      <Text style={styles.titleText1}>第１章　作業 2</Text>
      <Text style={styles.titleText2}>Button元件應用</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={imgA}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.buttonChange}
          onPress={() => {
            setCountA(countA + 1)
            setImgA(require('../img/manager.png'))
          }}>
          <Text style={styles.buttonText}>使用者A</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonChange}
          onPress={() => {
            setCountB(countB + 1)
            setImgA(require('../img/support.png'))
          }} >
          <Text style={styles.buttonText}>使用者B</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.mainText}>A使用次數：{countA}</Text>
        <TouchableOpacity
          style={styles.buttonClear}
          onPress={() => setCountA(0)}>
          <Text style={styles.buttonText}>清空A紀錄</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.mainText}>B使用次數：{countB}</Text>
        <TouchableOpacity
          style={styles.buttonClear}
          onPress={() => setCountB(0)}>
          <Text style={styles.buttonText}>清空B紀錄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//樣式表
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'skyblue', alignItems: 'center', color: 'red'
  },
  titleText1: {
    marginTop: 10, fontSize: 40, color: 'red'
  },
  titleText2: {
    fontSize: 40, color: 'red'
  },
  mainText: {
    color: 'yellow', fontSize: 35
  },
  buttonText: {
    color: 'white', textAlign: 'center', fontSize: 20
  },
  buttonChange: {
    width: 100, height: 40, backgroundColor: '#00aeef', borderRadius: 20, justifyContent: 'center', margin: 20
  },
  buttonClear: {
    width: 120, height: 40, backgroundColor: '#00aeef', borderRadius: 20, justifyContent: 'center', margin: 5
  }
});
