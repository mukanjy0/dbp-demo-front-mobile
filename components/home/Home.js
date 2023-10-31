import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../core/theme';
import { Button } from 'react-native-paper';

const Home = ({ children, navigation }) => (
    <>
      <View style={styles.row}>
        <Text style={styles.header}>{children}</Text>
        <Button style={styles.btn} mode="contained" onPress={() => navigation.replace("Login") }>
            Login
        </Button>
        <Button style={styles.btn} mode="outlined" onPress={() => navigation.replace("Register") }>
            Sign up
        </Button>
      </View>
    </>
);

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  btn: {
    width: 300,
    marginVertical: 10
  }
});

export default Home;
