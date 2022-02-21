import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Results from './Results'

const Stack = createNativeStackNavigator()
function SearchComponent({ navigation, placeHolder }) {
  const [city, setCity] = useState('Chelles')
  const changeCity = (e) => setCity(e)
  const searchCountry = () => {
    navigation.navigate('Results', { city })
  }
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        onChangeText={changeCity}
        style={styles.input}
        placeholder={placeHolder}
        value={city}
      />

      <Button onPress={searchCountry} title="Search" color="#841584" />

      <StatusBar style="auto" hidden />
    </View>
  )
}

export default function SearchResults() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchComponent} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
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
