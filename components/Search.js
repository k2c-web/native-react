import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
export default function Search({ placeHolder }) {
  const [city, setCity] = useState('Chelles')
  const changeCity = (e) => setCity(e)
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        onChangeText={changeCity}
        style={styles.input}
        placeholder={placeHolder}
        value={city}
      />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 2,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
})
