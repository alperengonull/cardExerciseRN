import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './Card.style';

const Card = (props) => {

  const merhabaFunc = () => {
    Alert.alert(`Merhaba ${props.title}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}> {props.title}</Text>
        <Text style={styles.description}> {props.text} </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={merhabaFunc} >
        <Text style={styles.buttonText}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Card;
