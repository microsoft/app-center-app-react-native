import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';
import Identicon from '../../js/components/Identicon'

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('App Icon', module)
  .add('default', () => (
    <View>
      <Identicon value="A" size="45"/>
      <Identicon value="B" size="45"/>
      <Identicon value="C" size="45"/>
    </View>
  ));
