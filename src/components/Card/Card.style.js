import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10,
  },
  body: {
    padding: 10,
  },
  buttonContainer: {
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#00C2FF',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});
