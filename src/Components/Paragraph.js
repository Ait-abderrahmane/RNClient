import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

// type Props = {
//   children: React.ReactNode;
// };


export class Paragraph extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.children}</Text>

        )
    }
}



const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default Paragraph;
