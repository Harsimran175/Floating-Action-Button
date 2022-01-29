import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John', age: 18 },
        { name: 'Lilli', age: 23 },
        { name: 'Lavera', age: 46 },
        { name: 'Paul', age: 32 },
        { name: 'John', age: 18 },
        { name: 'Lilli', age: 23 },
        { name: 'Lavera', age: 46 },
        { name: 'Paul', age: 32 },
        { name: 'John', age: 18 },
        { name: 'Lilli', age: 23 },
        { name: 'Lavera', age: 46 },
        { name: 'Paul', age: 32 },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingTest}>Floating Action Button</Text>
        </View>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Text>Name : {item.name}</Text>
              <Text>Age : {item.age}</Text>
            </View>
          )}
          bottomDivider
        />

        <TouchableOpacity
          onPress={() => alert('FAB clicked')}
          style={styles.fab}>
          <AntDesign name="plus" size={32} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    height: 110,
    backgroundColor: '#2460a7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTest: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    margin: 5,
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'space-around',
    paddingLeft: 10,
    borderLeftColor: '#2460a7ff',
    borderLeftWidth: 3,
    elevation: 1,
  },
  fab: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 80,
    backgroundColor: '#d9b48fff',
    borderRadius: 30,
    elevation: 8,
  },
});
