import { StackNavigator } from 'react-navigation';
import LoginContainer from '../login/container';
import Splash from '../components/Splash';
import Tabbar from './component/tabbar';
import Tabbar2 from './component/tabbar2';

const AppRouteConfigs = {
  splash: {
    screen: Splash,
    navigationOptions: {
      title: 'Splash',
    },
  },
  login: {
    screen: LoginContainer,
    navigationOptions: {
      title: 'Login',
    },
  },
  tabbar: {
    screen: Tabbar,
    navigationOptions: {
      title: 'Tabbar',
    },
  },
  tabbar2: {
    screen: Tabbar2,
    navigationOptions: {
      title: 'Tabbar2',
    },
  },
};

const StackNavConfigs = {
  headerMode: 'screen',
  initialRouteName: 'login',
};

export default StackNavigator(AppRouteConfigs, StackNavConfigs);
