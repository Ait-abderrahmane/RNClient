  
import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

// type Props = {
//   children: React.ReactNode;
// };

export class Background extends Component {
    render() {
        return (
            <ImageBackground
            source={require('../assets/background_dot.png')}
            resizeMode="repeat"
            style={styles.background}
             >
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                   {this.props.children}
                </KeyboardAvoidingView>
          </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default Background

// const Background = ({ children }: Props) => (
//   <ImageBackground
//     source={require('../assets/background_dot.png')}
//     resizeMode="repeat"
//     style={styles.background}
//   >
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       {children}
//     </KeyboardAvoidingView>
//   </ImageBackground>
// );
