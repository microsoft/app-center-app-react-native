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

import { StyleSheet, Navigator, View, Text } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import About from '../pages/about';
import Notification from '../pages/notification';
import User from '../pages/user';
import AppsContainer from './appContainer';
import TabIcon from '../components/tabicon';
const RouterWithRedux = connect()(Router);

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

class MobileCenter extends React.Component{
	render(){
		return (
			<RouterWithRedux
        		titleStyle={styles.navBarTitle}
        		getSceneStyle={getSceneStyle}
				navigationBarStyle={styles.navBar}
			>
				<Scene key='root'>
				 <Scene key='tabbar' tabs pressOpacity={0.8} type={ActionConst.REPLACE}>
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
					<Scene
		              key="about"
		              component={About}
		              title="About"
		              icon={TabIcon}
		              iconName="md-information-circle"
		            />
		          </Scene>
				</Scene>													
			</RouterWithRedux>
		)
	}
}

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