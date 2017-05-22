import { NavigationActions } from 'react-navigation';
import * as types from './constants';

import AppNavigator from './page';

// const tabbarAction = AppNavigator.router.getActionForPathAndParams('tabbar');
// const tempNavState = AppNavigator.router.getStateForAction(tabbarAction);
// const loginAction = AppNavigator.router.getActionForPathAndParams('login');

// const initialNavState = AppNavigator.router.getstateforaction(
//   loginAction,
//   tempNavState,
// );

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case types.RESET_TO_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'login' })],
        }),
        state,
      );
      break;
    case types.RESET_TO_TABBAR:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'tabbar' })],
        }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

