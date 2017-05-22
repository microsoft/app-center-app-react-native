import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AppsContainer from '../../apps/container';
import Notification from '../../components/Notification';
import UserContainer from '../../user/container';

const setTabItem = (screen, label, iconName) => ({
  screen,
  navigationOptions: {
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <Icon name={iconName} size={25} style={{ color: tintColor }} />
    ),
  }
});

const RouteConfigs = {
  apps: setTabItem(AppsContainer, 'Apps', 'md-apps'),
  notification: setTabItem(Notification, 'Notification', 'md-notifications'),
  user: setTabItem(UserContainer, 'You', 'md-person'),
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#444', // 文字和图片选中颜色
    inactiveTintColor: '#aaa', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#eee', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  },
};

export default TabNavigator(RouteConfigs, TabNavigatorConfig);
