/**
 * Microsoft Mobile Center App
 *
 * Copyright (c) Microsoft Corporation
 *
 * All rights reserved.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF
 * ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 * THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import Button from 'react-native-button';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class Distribute extends React.Component {

  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 10}}>{title}</Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card styles={{card: {width: 300, height: 100 }}}>
            <CardTitle>
              <Text style={styles.title}>Collaborators</Text>
            </CardTitle>
            <CardContent>
              <Text>Who do you collaborate with?</Text>
            </CardContent>
          </Card>
          <Card styles={{card: {width: 300, height: 100 }}}>
            <CardTitle>
              <Text style={styles.title}>Alpha Testers</Text>
            </CardTitle>
            <CardContent>
              <Text>With whom?</Text>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 16,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});
