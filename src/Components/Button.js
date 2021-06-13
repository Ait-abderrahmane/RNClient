import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

// type Props = React.ComponentProps<typeof PaperButton>;


export class Button extends Component {
    render() {
        return (
            <PaperButton
            style={[ styles.button, { backgroundColor: theme.colors.surface },this.style,   ]}
            labelStyle={styles.text}
            mode="outlined"            {...this.props}          >
            {this.props.children}
          </PaperButton>
        )
    }
}

export default Button;


// const Button = ({ mode, style, children, ...props }: Props) => (
//   <PaperButton
//     style={[
//       styles.button,
//       mode === 'outlined' && { backgroundColor: theme.colors.surface },
//       style,
//     ]}
//     labelStyle={styles.text}
//     mode={mode}
//     {...props}
//   >
//     {children}
//   </PaperButton>
// );

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
