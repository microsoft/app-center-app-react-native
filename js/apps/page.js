import React, { propTypes } from 'react';
import { StyleSheet,
  ListView,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Button,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Identicon from '../components/Identicon';

export default class Apps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2 })
    };
    this.onPressApp = this.onPressApp.bind(this);
  }

  componentDidMount(){
    const { requestAppAction } = this.props;
    requestAppAction();
  }

  onPressApp(app) {
    AsyncStorage.setItem('app', JSON.stringify(app) , () => {
      Actions.tabbar2();
    });
  }

  renderApp(app) {
    return (
      <TouchableOpacity onPress={() => this.onPressApp(app)}>
        <View style={styles.containerItem}>
          <Identicon value={app.display_name[0].toUpperCase()} size="45"/>
          <View style={styles.itemRightContent}>
            <Text style={styles.appName}>
              {app.display_name}
            </Text>
            <Text style={styles.appDescription}>
                {app.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
   const { apps } = this.props;
    return (
      <View style={styles.container}>
        <ListView
          initialListSize={1}
          dataSource={this.state.dataSource.cloneWithRows(apps.apps)}
          renderRow={row => this.renderApp(row)}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 10 : 0
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  appName: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black'
  },
  appDescription: {
    flex: 1,
    fontSize: 14,
    color: '#87CEFA',
    marginTop: 5,
    marginRight: 5
  },
  listView: {
    backgroundColor: '#eeeeec'
  },
  no_data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  drawerTitleContent: {
    height: 120,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#3e9ce9'
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  drawerTitle: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fcfcfc'
  },
  drawerText: {
    fontSize: 18,
    marginLeft: 15,
    textAlign: 'center',
    color: 'black'
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 10
  },
  itemImg: {
    width: 88,
    height: 66,
    marginRight: 10
  },
  itemRightContent: {
    marginLeft: 20,
    flex: 1,
    flexDirection: 'column'
  },
  itemRightBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeAgo: {
    fontSize: 14,
    color: '#aaaaaa',
    marginTop: 5
  },
  refreshControlBase: {
    backgroundColor: 'transparent'
  },
  tab: {
    paddingBottom: 0
  },
  tabText: {
    fontSize: 16
  },
  tabBarUnderline: {
    backgroundColor: '#3e9ce9',
    height: 2
  }
});

Apps.propTypes = propTypes;
