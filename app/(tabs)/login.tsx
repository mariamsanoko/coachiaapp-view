import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connectez-vous à CoachIAApp 🚀</Text>

      <Text style={styles.subtitle}>Créez un compte pour commencer votre aventure avec CoachIAApp!</Text>
      <Text style={styles.subtitle}>Ou connectez-vous si vous avez déjà un compte.</Text>

      <button>Se connecter</button>
      <button>S'inscrire</button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  
  
}); 