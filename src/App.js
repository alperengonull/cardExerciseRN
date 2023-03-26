import React from 'react';
import {SafeAreaView,StyleSheet,} from 'react-native';
import Card from './components/Card';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddad stark" text="Winter is coming..." />
      <Card title="Arya stark" text="Winter is coming..." />
      <Card title="John Snow" text="Winter is coming..." />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
