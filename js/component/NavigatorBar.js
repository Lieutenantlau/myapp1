/**
 * Created by Liu on 2018/5/31.
 */
import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {StyleSheet, Text, View, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';

export default class NavigatorBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}>
                    <StatusBar
                        hidden = {true}
                        backgroundColor="blue"
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.navBar}>
                    <View style={styles.navBtn}></View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>热门</Text>
                    </View>
                    <View style={styles.rightBtn}>
                        <TouchableOpacity
                            activeOpacity={0.7}>
                            <Image source={require('../../res/images/ic_search_white_48pt.png')} style={styles.navBtn}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}>
                            <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={styles.navBtn}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#63B8ff',
        padding:5
    },
    statusBar:{
        height:Platform.OS === 'ios' ?20:0
    },
    navBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        bottom:0
    },
    titleWrapper:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        bottom:0
    },
    title:{
        fontSize:16,
        color:'#fff'
    },
    navBtn:{
        width:24,
        height:24
    },
    rightBtn:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:8
    }
});