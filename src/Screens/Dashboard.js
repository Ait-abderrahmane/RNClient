import React, { Component } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

// type Props = {
//   navigation: Navigation;
// };


export class Dashboard extends Component {
    render() {
        return (
            <Background>
            <Logo />
            <Header>Let’s start</Header>
            <Paragraph>
              Your amazing app starts here. Open you favourite code editor and start
              editing this project.
            </Paragraph>
            <Button mode="outlined" onPress={() => navigation('HomeScreen')}>
              Logout
            </Button>
          </Background>
        )
    }
}

export default Dashboard


// const Dashboard = ({ navigation }) => (
//   <Background>
//     <Logo />
//     <Header>Let’s start</Header>
//     <Paragraph>
//       Your amazing app starts here. Open you favourite code editor and start
//       editing this project.
//     </Paragraph>
//     <Button mode="outlined" onPress={() => scene('HomeScreen')}>
//       Logout
//     </Button>
//   </Background>
// );

// export default Component(Dashboard);