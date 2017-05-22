import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import BuildContainer from '../../app.build/container';
import TestContainer from '../../app.test/container';
import DistributeContainer from '../../appDistribute/container';
import CrashContainer from '../../app.crash/container';
import AnalyticsContainer from '../../appAnalytics/container';

const setTabItem = (screen, label, iconName) => ({
  screen,
  navigationOptions: {
    tabBar: {
      label,
      icon: ({ tintColor }) => (
        <Icon name={iconName} size={25} style={{ tintColor }} />
      ),
    }
  }
});

const RouteConfigs = {
  build: setTabItem(BuildContainer, 'Build', 'md-play'),
  test: setTabItem(TestContainer, 'Test', 'ios-checkmark-circle-outline'),
  distribute: setTabItem(DistributeContainer, 'Distribute', 'ios-git-branch'),
  crash: setTabItem(CrashContainer, 'Crash', 'ios-warning-outline'),
  analytics: setTabItem(AnalyticsContainer, 'Analytics', 'ios-stats-outline'),
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#999', // 文字和图片选中颜色
    inactiveTintColor: '#3e9ce9', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#3e9ce9', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  },
};

export default TabNavigator(RouteConfigs, TabNavigatorConfig);
