import React, { propTypes }from 'react';
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

export default class Analytics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ 
        rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  }

  componentDidMount(){
    const { requestAppAnalysisAction } = this.props;
    requestAppAnalysisAction();
  }

  renderApp(analysis) {
    return (
      <TouchableOpacity>
        <View style={styles.containerItem}>
          <View style={styles.itemRightContent}>
            <Text style={styles.title}>
              {analysis.datetime}
            </Text>
            <Text style={styles.userName}>
                {analysis.count}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { appAnalysis } = this.props;

    return (
      <View>
       <ListView
          initialListSize={1}
          dataSource={this.state.dataSource.cloneWithRows(appAnalysis)}
          renderRow={row => this.renderAnalysis(row)}
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
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black'
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
    flex: 1,
    flexDirection: 'column'
  },
  itemRightBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    flex: 1,
    fontSize: 14,
    color: '#87CEFA',
    marginTop: 5,
    marginRight: 5
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

Analytics.propTypes = propTypes;
