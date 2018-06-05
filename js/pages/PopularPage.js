/**
 * Created by Liu on 2018/5/31.
 */
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import NavigatorBar from '../component/NavigatorBar';
import ScrollableTabView from 'react-native-scrollable-tab-view'

export default class PopularPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSoure:[{key:'sdf'},{key:'sdfasdf'},{key:'asdfasfda'}]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar/>
                <ScrollableTabView
                    tabBarBackgroundColor="#63B8FF"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    tabBarUnderlineStyle={{backgroundColor:"#E7E7E7",height:2}}>
                    <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2'>favorite</Text>
                    <Text tabLabel='Tab #3'>project</Text>
                </ScrollableTabView>
                <FlatList
                    data = {this.state.dataSoure}
                    renderItem = {({item})=><Text>{item.key}</Text>}

                />
                {/*<View style={{backgroundColor:'red',flex:1}}></View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});