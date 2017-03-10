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
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import Drawer from 'react-native-drawer';

import ManageApp from '../../containers/app/Start/ManageAppContainer';

export default class Start extends React.Component {

  render() {
    return (
      <Drawer
        ref={c => this.drawer = c}
        type="overlay"
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        content={<ManageApp />}
        side="right"
        tapToClose
        negotiatePan
      >
        <View>
          <Button
            style={{ fontSize: 20, color: 'green'}}
            containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'orange'}}
            styleDisabled={{ color: 'red' }}
            onPress={() => this.drawer.open()}
          >
            Manage App
          </Button>
          <Text> Add Mobile Center’s SDK to your app. </Text>

          <Text> 1. Integrate using CocoaPods </Text>
          <Text> 2. Start the SDK </Text>
          <Text> 3. Explore Data </Text>
        </View>
      </Drawer>
    );
  }
}
