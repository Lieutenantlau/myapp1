import React ,{Component} from 'react';
import { AppRegistry, StyleSheet, Text ,View } from 'react-native';

import HomePage from './js/pages/HomePage';

export default class GitCRNA extends Component{
    render(){
        return(
            <View style = {styles.container}><HomePage/></View>
        )
    }
}
/*import { StyleSheet, Text, View ,Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab : "hot"
        }
    }
  render() {
    return (
      <View style={styles.container}>
          <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'hot'}
                  title="最热"
                  selectedTitleStyle={{color:'#63B8FF' }}
                  renderIcon={() => <Image style = {styles.icon} source={require('./res/images/ic_popular.png')} />}
                  renderSelectedIcon={() => <Image style = {[styles.icon,{tintColor:'#63B8FF'}]} source={ require('./res/images/ic_popular.png') } />}

                  onPress={() => this.setState({ selectedTab: 'hot' })}>

                  <View style={{backgroundColor:'red',flex:1}}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'trend'}
                  title="趋势"
                  selectedTitleStyle={{color:'#63B8FF' }}
                  renderIcon={() => <Image style = {styles.icon} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style = {[styles.icon,{tintColor:'#63B8FF'}]} source={require('./res/images/ic_trending.png')} />}

                  onPress={() => this.setState({ selectedTab: 'trend' })}>

                  <View style={{backgroundColor:'yellow',flex:1}}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'favorite'}
                  title="收藏"
                  selectedTitleStyle={{color:'#63B8FF' }}
                  renderIcon={() => <Image style = {styles.icon} source={require('./res/images/ic_favorite.png')} />}
                  renderSelectedIcon={() => <Image style = {[styles.icon,{tintColor:'#63B8FF'}]} source={ require('./res/images/ic_favorite.png') } />}

                  onPress={() => this.setState({ selectedTab: 'favorite' })}>

                  <View style={{backgroundColor:'blue',flex:1}}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'my'}
                  title="我的"
                  selectedTitleStyle={{color:'#63B8FF' }}
                  renderIcon={() => <Image style = {styles.icon} source={require('./res/images/ic_my.png')} />}
                  renderSelectedIcon={() => <Image style = {[styles.icon,{tintColor:'#63B8FF'}]} source={ require('./res/images/ic_my.png') } />}

                  onPress={() => this.setState({ selectedTab: 'my' })}>

                  <View style={{backgroundColor:'green',flex:1}}></View>
              </TabNavigator.Item>
          </TabNavigator>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
    icon:{
      width:26,
      height:26
    }
});
AppRegistry.registerComponent('GitCRNA',()=>GitCRNA);