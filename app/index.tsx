import { Link, router } from 'expo-router';
import { useState, } from 'react';
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
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>Say Hello to your</Text>
        <Text style={styles.headerText1}>New App</Text>
        <Link href="/login" />
        <Link href="/signup" />

        <Pressable
          onPress={handleLoginPress}
          style={[
            styles.button,
            { backgroundColor: isPressed ? '#09838e' : '#09838e' },
          ]}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>

        <Text style={styles.orText}>or</Text>

        <Pressable onPress={handleSignupPress} style={styles.button1}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </Pressable>
      </View>
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
  mainContainer: {
    width: '90%',
    maxWidth: 350,
    padding: 70,
    borderRadius: 16,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },

  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#fff', 
    width: 250,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,         
    borderColor: '#000',
  },
    button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#09838e', 
    width: 250,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,         
    borderColor: '#000',
    marginTop: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
  },
  headerText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#09838e',  
  textAlign: 'center',
  marginBottom: 5,
  letterSpacing: 1,
},
headerText1: {
  fontSize: 23,
  fontWeight: 'bold',
  color: '#000',  
  textAlign: 'center',
  marginBottom: 5,
  letterSpacing: 1,
},
  orText: {
    fontSize: 16,
    color: '#696969',
    padding: 10,
  },
});