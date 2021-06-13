import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

// type Props = {
//   children: React.ReactNode;
// };


export class Header extends Component {
    render() {
        return (
          <Text style={styles.header}>{this.props.children}</Text> 
        )
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 26,
      color: theme.colors.primary,
      fontWeight: 'bold',
      paddingVertical: 14,
    },
  });
  
export default Header

// const Header = ({ children }: Props) => (
//   <Text style={styles.header}>{children}</Text>
// );
