import React, { Component } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
// import { Navigation } from '../types';

// Props = {  navigation};

export class HomeScreen extends Component {
    render() {
        return (
            <Background>
            <Logo />
            <Header>Login Template</Header>

            <Paragraph>
            The easiest way to start with your amazing application.
            </Paragraph>
            <Button mode="contained" onPress={() => this.props.navigate.navigate('Dashboard')}>
            Login
            </Button>
            <Button
                mode="outlined"            onPress={() =>  this.props.navigate.navigate('Dashboard')}
            >
            Sign Up
            </Button>
             </Background>
        )
    }
}

export default HomeScreen;


// const HomeScreen = ({ navigation }: Props) => (
//   <Background>
//     <Logo />
//     <Header>Login Template</Header>

//     <Paragraph>
//       The easiest way to start with your amazing application.
//     </Paragraph>
//     <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
//       Login
//     </Button>
//     <Button
//       mode="outlined"
//       onPress={() => navigation.navigate('RegisterScreen')}
//     >
//       Sign Up
//     </Button>
//   </Background>
// );

// export default memo(HomeScreen);