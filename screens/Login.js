import React, { useState, useContext } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
  } from "react-native";
import FormInput from "../components/auth/FormInput";
import Button from "../components/auth/Button";
import Header from "../components/auth/Header";
import { theme } from "../core/theme";
import {
    passwordValidator,
    emailValidator
} from "../components/auth/validators/validators";
import { AuthContext } from "../store/auth-context";


import { signin } from '../api/auth';

const Login = ({navigation}) => {
    const [email, setEmail] = useState({ value: '', error: ''});
    const [password, setPassword] = useState({ value: '', error: ''});

    const authCtx = useContext(AuthContext);

    const login = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });

            return;
        }

        const response = await signin({
            email: email.value,
            password: password.value
        });

        authCtx.authenticate(response.token)
    }

    return (
        <View style={styles.container}>
            <Header>Welcome back</Header>
            <FormInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <FormInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            
            <Button mode="contained" onPress={login}>Login</Button>

            <View style={styles.inline}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row',
    },
    label: {
        color: theme.colors.secondary
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
});

export default Login;
