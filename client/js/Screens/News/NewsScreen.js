import React from 'react';
import { ScrollView, Text } from 'react-native';
import DrawerIcon from '../../Drawer/DrawerIcon';
import Toolbar from '../Base/Toolbar';
import Scene from '../../GlamorousComponents/Scene';
import Config from '../../Utils/Config';
import { IntlText } from '../../Translation/IntlText';
import DrawerComponent from '../../GlamorousComponents/DrawerComponent';

class NewsScreen extends React.Component {
  componentDidMount () {
    fetch(`${Config.url}/messages`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    return (
      <Scene>
        <Toolbar
          leftButton={{
            icon: 'menu',
            onPress: () => this.props.navigation.navigate('DrawerOpen'),
          }}
          title="drawer.news"
        />
        <ScrollView>
          <Text>
            Tu będzie NewsScreen
            <IntlText id='greeting'/>
          </Text>
        </ScrollView>
      </Scene>
    )
  }
}

NewsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.news"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="flare"/>
  ),
};

export default NewsScreen





