import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText1}>React Native</Text>
            <Button
                title='作業1-1'
                onPress={() => props.navigation.push('App1_1')}//onPress出錯一次不要再犯傻123
            />
            <Button
                title='作業1-2'
                onPress={() => props.navigation.push('App1_2')}
            />
            <Button
                title='作業1-3'
                onPress={() => props.navigation.push('App1_3')}
            />
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
    inputText: {
        height: 60, width: 300, borderRadius: 10, backgroundColor: 'gray', color: 'white',
        fontSize: 30, textAlign: 'center', marginTop: 30
    },
    buttonText: {
        color: 'white', textAlign: 'center', fontSize: 20
    },
    buttonLogin: {
        width: 120, height: 40, backgroundColor: '#00aeef', borderRadius: 20, justifyContent: 'center', margin: 30
    }
});
