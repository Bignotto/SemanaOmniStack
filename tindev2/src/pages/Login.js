import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import logo from '../assets/logo.png'
import api from '../services/api'

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  //useEffect com segundo parâmetro vazio executa somente quando o componente
  //for exibido na tela, uma única vez.
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) {
        navigation.navigate('Main', {user});
      }
    })
  }, []);
  
    async function handleLogin () {
      const response = await api.post('/devs',{ username: user });

      const { _id } = response.data;

      await AsyncStorage.setItem('user', _id);

      console.log(_id);
      navigation.navigate('Main', { user:_id });
    }

    return (
        <KeyboardAvoidingView
          behavior="padding"
          enabled={Platform.OS === 'ios'}
          style={styles.container}
        >
          <Image source={logo} />
          <TextInput
            placeholder='GitHub Username'
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="#999"
            style={styles.input}
            value={user}
            onChangeText={setUser}
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#DF4723",
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 16,
  }
})