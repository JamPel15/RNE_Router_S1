import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Login Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={name}
          onChangeText={(text: string) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          keyboardType="email-address"
        />

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>

          <Text style={styles.orText}>or</Text>


          <Pressable style={styles.button2} onPress={handleSubmit}>
            <Text style={styles.buttonTextfb}>Login with facebook</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText1}>Clear</Text>
          </Pressable>
        </View>

        {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text>Username: {name}</Text>
            <Text>Email: {email}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#09838e', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  button2: {
    backgroundColor: '#3b5998', // Facebook blue
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  clearButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextfb: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  buttonText1: {
    color: '#696969',
    fontSize: 16,
    fontWeight: 'bold',
  },
  output: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orText: {
    fontSize: 16,
    color: '#696969',
    padding: 10,
    textAlign: 'center',
    paddingBottom: 20,
  },
});
