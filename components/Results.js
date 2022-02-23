import { StyleSheet, Text, FlatList, View, Image } from 'react-native'
import { useState } from 'react'
const apiKey = '2d55f0e7db853eeec1a4d9d4245cbed5'
import axios from 'axios'
import { useEffect } from 'react'
import reactDom from 'react-dom'

const Results = ({ route }) => {
  const { city } = route.params
  const [res, setRes] = useState(null)

  const fetchWeather = () => {
    //http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=2d55f0e7db853eeec1a4d9d4245cbed5
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2d55f0e7db853eeec1a4d9d4245cbed5
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
      )
      .then((res) => {
        //console.log(res)
        const lat = res.data[1].lat
        const lon = res.data[1].lon
        console.log(lat, lon)
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
          )
          .then((data) => {
            //console.log('data', data)
            setRes(data.data.list)
          })
      })
  }
  useEffect(() => fetchWeather(), [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{city}</Text>
      <FlatList
        data={res}
        renderItem={({ item }) => {
          const icon = item.weather[0].icon
          const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

          console.log(urlIcon)
          return (
            <View style={styles.item}>
              <Image style={styles.tinyLogo} source={urlIcon} />
              <Text>{item.dt_txt}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}
export default Results

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 22,
    color: 'red',
    width: 200,
  },
  tinyLogo: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    marginRight: 10,
  },
})
