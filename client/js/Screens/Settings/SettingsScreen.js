import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import Scene from '../../GlamorousComponents/Scene';
import T from '../../Translation/Translator';
import SupportedLanguages from '../../Translation/SupportedLanguages';
import { IntlText } from '../../Translation/IntlText';
import TranslatableComponent from '../../Translation/TranslatableComponent';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: T.locale
    };
  }

  switchLanguage() {
    let index = SupportedLanguages.indexOf(this.state.language);
    index = (index + 1) % SupportedLanguages.length;
    const newLanguage = SupportedLanguages[index];
    this.setState({ language: newLanguage });
    T.switchLanguage(newLanguage);
  }

  render() {
    return (
      <Scene style={{ alignItems: 'center' }}>
        <ScrollView>
          <TouchableOpacity
            style={{ margin: 16, flexDirection: 'column' }}
            onPress={() => this.switchLanguage('pl')}
          >
            <IntlText id={'settings.changeLanguage'}/>
            <IntlText id={`languages.${T.locale}`}/>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('News')}>
            <Text>
              News
            </Text>
          </TouchableOpacity>
          <TranslatableComponent>
            <Text>
              {T.getTranslation('drawer.news')}
            </Text>
          </TranslatableComponent>
        </ScrollView>
      </Scene>
    );
  }
}

SettingsScreen.navigationOptions = {
  title:<IntlText id="drawer.news"/>,
  icon:require('../../Assets/Icons/app_logo.png')
};

export default SettingsScreen;
