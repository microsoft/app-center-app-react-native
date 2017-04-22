import Reactotron, { trackGlobalErrors, asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron
  .configure() // controls connection & communication settings
  .use(trackGlobalErrors({
    veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
   }))
  .use(asyncStorage())
  .use(reactotronRedux())
  .use(sagaPlugin())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!