import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Account</Text>

      <TextInput
        placeholder="Full Name"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="default"
      />

      <TextInput
        placeholder="Phone Number"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="E-mail Address"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

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
  backgroundColor: '#09838e',
  width: 300,
  alignItems: 'center',
  alignSelf: 'center', 
  
},
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});