import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

const users = [
  {name: 'Asep'},
  {name: 'Hikmat'},
  {name: 'Fatahillah'}
]

export default class Component4 extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 4
  },
  rowText: {
    flex: 0
  }
});

AppRegistry.registerComponent('Component4', () => Component4);
