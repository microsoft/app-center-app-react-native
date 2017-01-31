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

import React, {PropTypes} from 'react';
import { StyleSheet,
		 ListView,
		 RefreshControl,
		 ScrollView,
		 Text,
		 TouchableOpacity,
		 InteractionManager,
		 ActivityIndicator,
		 RecyclerViewBackedScrollView,
		 Image,
		 View,
		 DeviceEventEmitter,
		 Platform,
		 AlertIOS} from 'react-native';

import LoadingView from '../components/loading';
import { toastShort } from '../utils/ToastUtil';
import Storage from '../utils/StorageUtil';
import { TOKENID } from '../utils/RequestUtil';

const propTypes = {
	appsActions: PropTypes.object,
	app: PropTypes.object.isRequired
};

const pages = [];
let loadMoreTime = 0;
let currentLoadMoreTypeId;

export default class Apps extends React.Component{

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const { app } = this.props;
    this.state = {
      dataSource: ds.cloneWithRows(app),
      tokenId: TOKENID
    };
    this.renderItem = this.renderItem.bind(this);
  }

	componentDidMount(){
    const {appsActions} = this.props;
      DeviceEventEmitter.addListener('loadApps', (tokenId) => {
        appsActions.requestAppList(false, true, tokenId);
        pages.push(1);
      this.setState({
        tokenId
      });
    });

    // InteractionManager.runAfterInteractions(
    //   Storage.get('getTokenId')
    //     .then((tokenIds) => {
    //         if(!tokenIds){
    //           return;
    //         }             
    //         //TODO
    //       }
    //     );
	}

	componentWillReceiveProps(nextProps){
    const {app}  = this.props;
    if (app.isLoadMore && !nextProps.app.isLoadMore && !nextProps.app.isRefreshing){
      if (nextProps.app.noMore) {
        toastShort('no more data');        
      }
    }
	}

	componentWillUnmount(){
    DeviceEventEmitter.removeAllListeners('loadApps');
	}

  onRefresh(tokenId){
    const { appsActions } = this.props;
    appsActions.requestAppList(true, false, tokenId);
  }

  onPress(app){
    const { routes } = this.context;
    //TODO
  }

  renderItem(app){
      return (
          <View style={styles.containerItem}>
             <View style={styles.itemRightBottom} >
              <Text style={styles.userName} >
                {app.appList}
              </Text>
            </View>
          </View>
      );
  }

	render(){
		const { app } = this.props;
    return (
       <ListView
        initialListSize={1}
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
       />
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

Apps.propTypes = propTypes;