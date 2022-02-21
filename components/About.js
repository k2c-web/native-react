import { StyleSheet, Text, View } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Me !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    color: 'white',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
})
