import React from "react";
import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import DrawerIcon from "../../Drawer/DrawerIcon";
import Toolbar from "../Base/Toolbar";
import Scene from "../../GlamorousComponents/Scene";
import T from "../../Translation/Translator";
import SupportedLanguages from "../../Translation/SupportedLanguages";
import {IntlText} from "../../Translation/IntlText";
import DrawerComponent from "../../GlamorousComponents/DrawerComponent";
class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: T.locale
    }
  }

  switchLanguage() {
    let index = SupportedLanguages.indexOf(this.state.language);
    index = (index + 1) % SupportedLanguages.length;
    const newLanguage = SupportedLanguages[index];
    this.setState({language: newLanguage});
    T.switchLanguage(newLanguage);
  }

  render() {
    return (
      <Scene style={{alignItems: 'center'}}>
        <Toolbar/>
        <ScrollView>
          <TouchableOpacity style={{margin: 16, flexDirection: 'column'}}
                            onPress={() => this.switchLanguage("pl")}
          >
            <IntlText id={`settings.changeLanguage`}/>
            <IntlText id={`languages.${T.locale}`}/>
          </TouchableOpacity>
        </ScrollView>
      </Scene>
    )
  }
}


SettingsScreen.navigationOptions = {
  drawerLabel: <DrawerComponent>
    <IntlText id="drawer.settings"/>
  </DrawerComponent>,
  drawerIcon: () => (
    <DrawerIcon name="settings-applications"/>
  ),
};

export default SettingsScreen

const styles = StyleSheet.create({
  container: {},
});




