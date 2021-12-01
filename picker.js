
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//
class PickerComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker style={{height: 50, width: 250}}>
          <Picker.Item label="korea" value={'할일1'} />
          <Picker.Item label="USA" value={'할일2'} />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});

export default PickerComponent;
