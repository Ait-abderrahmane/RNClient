import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';


export class TextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...this.props}
      />
      {this.props.errorText ? <Text style={styles.error}>{this.props.errorText}</Text> : null}
    </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
export default TextInput


