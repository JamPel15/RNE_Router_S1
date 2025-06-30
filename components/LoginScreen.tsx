import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput
        placeholder="Email or Phone Number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

     <Pressable style={[styles.button, { backgroundColor: '#09838e' }]} onPress={handleLogin}>
       <Text style={styles.buttonText}>Login</Text>
     </Pressable>
        <Text style={styles.orText}>OR</Text>
      
      <Pressable style={[styles.button, { backgroundColor: '#09838e' }]} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login with Facebook</Text>
         </Pressable>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
  fontSize: 32,
  color:'#000',
  marginBottom: 24,
  fontWeight: 'bold',
  textAlign: 'left',     
  alignSelf: 'flex-start', 
  marginLeft: 10,        
  marginTop: 15,          
},
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 25,
    marginTop: 35, 
    marginBottom: 5,
    marginLeft:20,
    marginRight:20,
    paddingHorizontal: 20,
  },
 
  button: {  
  marginTop: 35,  
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 15,
  width: 300,
  alignItems: 'center',
  alignSelf: 'center', 
}, 
  buttonText: { 
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
  textAlign: 'center',
  fontSize: 20, 
  marginTop: 30, 
  marginBottom: 5,
},



});