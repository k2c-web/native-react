import { StyleSheet, Text, View } from 'react-native'
const apiKey = '2d55f0e7db853eeec1a4d9d4245cbed5'
const Results = ({ route }) => {
  const { city } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{city}</Text>
    </View>
  )
}
export default Results

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: center,
    justifyContent: center,
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
})
