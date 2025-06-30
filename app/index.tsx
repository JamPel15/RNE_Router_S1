import { Link, router } from 'expo-router';
import React, { useState, } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [isPressed, setIsPressed] = useState(false);

  const handleLoginPress = () => {
  setIsPressed(true);
  console.log("Login button was pressed!");
  setTimeout(() => {
    router.push('/login');
    setIsPressed(false);
  }, 1000);
};

const handleSignupPress = () => {
  setIsPressed(true);
  console.log("Sign Up button was pressed!");
  setTimeout(() => {
    router.push('/signup');
    setIsPressed(false);
  }, 1000);
};
 

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Say Hello to your new App</Text>
      <Link href="/login" />
      <Link href="/signup" />

      {/* Custom Button with border radius and color change */}
      <Pressable
        onPress={handleLoginPress}
        style={[
          styles.button,
          { backgroundColor: isPressed ? '#09838e' : '#09838e' },
        ]}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

      <Pressable onPress={handleSignupPress} style={styles.button1}>
       
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#09838e', 
    width: 250,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 3,         
    borderColor: '#fff',
  },
    button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#09838e', 
    width: 250,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 3,         
    borderColor: '#fff',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  headerText: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#000',  
  textAlign: 'center',
  marginBottom: 5,
  letterSpacing: 1,
},
});