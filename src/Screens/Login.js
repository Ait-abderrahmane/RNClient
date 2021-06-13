import React, { Component } from 'react'
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { TextInput } from "../Components/TextInput";
import { Logo } from "../Components/Logo";

export class Login extends Component {
    render() {
        return (
            <Card>
                <Logo/>
                <TextInput/>
            </Card>
        )
    }
}

export default Login
