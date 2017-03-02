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
import { StyleSheet, Navigator, Image } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import User from '../pages/User';
import Notification from '../pages/Notification';
import AppsContainer from './appsContainer';
import AppContainer from './appContainer';
import BuildContainer from './app/BuildContainer';
import TestContainer from './app/TestContainer';
import DistributeContainer from './app/DistributeContainer';
import CrashContainer from './app/CrashContainer';
import AnalyticsContainer from './app/AnalyticsContainer';

import Login from './loginContainer';
import TabIcon from '../components/tabicon';
import Splash from '../pages/Splash';

const RouterWithRedux = connect()(Router);

const appBuildImg = require('../img/app-build.png');
const appTestImg  = require('../img/app-test.png');
const appDistributeImg = require('../img/app-distribute.png');
const appCrashImg = require('../img/app-crashes.png');
const appAnalyticsImg = require('../img/app-analytics.png');

class MobileCenter extends React.Component {
  render() {
    return (
      <RouterWithRedux
        titleStyle={styles.navBarTitle}
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styles.navBar}
      >
        <Scene key="root">
          <Scene key="splash" component={Splash} hideNavBar hideTabBar initial />
          <Scene key="login" component={Login} hideNavBar hideTabBar />
          <Scene key="tabbar" tabs pressOpacity={0.8} type={ActionConst.REPLACE} >
            <Scene
              key="apps"
              component={AppsContainer}
              title="Apps"
              icon={TabIcon}
              iconName="md-apps"
            />
            <Scene
              key="notification"
              component={Notification}
              title="Notification"
              icon={TabIcon}
              iconName="md-notifications"
            />
            <Scene
              key="user"
              component={User}
              title="My Info"
              icon={TabIcon}
              iconName="md-person"
            />
          </Scene>
          <Scene key="tabbar2" tabs type={ActionConst.REPLACE}>
            <Scene
              key="build"
              component={BuildContainer}
              title="Build"
              icon={TabIcon}
              iconName="md-play"
            />
            <Scene
              key="test"
              component={TestContainer}
              title="Test"
              icon={TabIcon}
              iconName="ios-checkmark-circle-outline"
            />
            <Scene
              key="distribute"
              component={DistributeContainer}
              title="Distribute"
              icon={TabIcon}
              iconName="ios-git-branch"
            />
            <Scene
              key="crash"
              component={CrashContainer}
              title="Crash"
              icon={TabIcon}
              iconName="ios-warning-outline"
            />
            <Scene
              key="analytics"
              component={AnalyticsContainer}
              title="Analytics"
              icon={TabIcon}
              iconName="ios-stats-outline"
            />
          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ?
      0 : Navigator.NavigationBar.Styles.General.TotalNavHeight;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#3e9ce9'
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 20,
  }
});

export default MobileCenter;
