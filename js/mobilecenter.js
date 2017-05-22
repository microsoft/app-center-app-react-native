import React from 'react';
import { StyleSheet, Navigator, Image } from 'react-native';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import CodePush from 'react-native-code-push';

import UserContainer from './user/container';
import Notification from './components/Notification';
import AppsContainer from './apps/container';
import AppContainer from './app/container';
import StartContainer from './app.start/container';
import BuildContainer from './app.build/container';
import TestContainer from './app.test/container';
import DistributeContainer from './appDistribute/container';
import CrashContainer from './app.crash/container';
import AnalyticsContainer from './appAnalytics/container';

import LoginContainer from './login/container';
import TabIcon from './components/tabicon';
import Splash from './components/Splash';
import NavigationDrawer from './components/navigationDrawer';
import ManageApp from './components/app/manageApp';

import AppWithNavigationState from './router';

const RouterWithRedux = connect()(Router);

class MobileCenter extends React.Component {

  constructor() {
    super();
    CodePush.sync(
      { installMode: CodePush.InstallMode.ON_NEXT_RESTART, updateDialog: true }
    );
  }

  render() {
    return (
      <RouterWithRedux
        titleStyle={styles.navBarTitle}
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styles.navBar}
      >
        <Scene key="root">
          <Scene key="splash" component={Splash} hideNavBar hideTabBar />
          <Scene key="login" component={LoginContainer} hideNavBar hideTabBar initial />
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
              component={UserContainer}
              title="You"
              icon={TabIcon}
              iconName="md-person"
            />
          </Scene>
          <Scene
            key="tabbar2" tabs
            tabBarStyle={tabstyles.tabBarStyle}
            tabBarSelectedItemStyle={tabstyles.tabBarSelectedItemStyle}
          >
            <Scene
              key="build"
              component={BuildContainer}
              title="Build"
              icon={TabIcon}
              iconName="md-play"
              onLeft={() => Actions.pop()}
              leftTitle="Back"
            />
            <Scene
              key="test"
              component={TestContainer}
              title="Test"
              icon={TabIcon}
              iconName="ios-checkmark-circle-outline"
              onLeft={() => Actions.pop()}
              leftTitle="Back"
            />
            <Scene
              key="distribute"
              component={DistributeContainer}
              title="Distribute"
              icon={TabIcon}
              iconName="ios-git-branch"
              onLeft={() => Actions.pop()}
              leftTitle="Back"
            />
            <Scene
              key="crash"
              component={CrashContainer}
              title="Crash"
              icon={TabIcon}
              iconName="ios-warning-outline"
              onLeft={() => Actions.pop()}
              leftTitle="Back"
            />
            <Scene
              key="analytics"
              component={AnalyticsContainer}
              title="Analytics"
              icon={TabIcon}
              iconName="ios-stats-outline"
              onLeft={() => Actions.pop()}
              leftTitle="Back"
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

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
};

const tabstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };

// const MobileCenterApp = CodePush(codePushOptions)(MobileCenter);

const MobileCenterApp = CodePush(codePushOptions)(AppWithNavigationState);

export default MobileCenterApp;
