import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wheater from './components/Wheater'
import getWeather from './redux/actions/getWeather'
import getWeatherByLocation from './redux/actions/getWeatherLocation'

function App() {
  const dispatch = useDispatch()
  let weatherData = useSelector(state => state.weatherStore)
  let weatherbyLocation = useSelector(state => state.weatherbyLocation)

  const [allWheather, setAllWheather] = useState(weatherData)
  const [location, setLocation] = useState('')

  const searchLocation = () => {
    dispatch(getWeather(location))
    setLocation('')
  }

  useEffect(() => {
    setAllWheather(weatherData)
  }, [weatherData])

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      dispatch(getWeatherByLocation(position.coords.latitude, position.coords.longitude))
    })
  }, [])

  return (
    <div className='appContainer'>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder='Enter Location'
            type="text" />
          <button onClick={() => searchLocation()}>Add</button>
        </div>

        <div className="container">
          {
            allWheather && allWheather?.weather?.map((item, key) => (
              <Wheater weatherData={item} key={key} />
            ))
          }
          <p className='text'>
            Live Weather Yout Location
          </p>
          <Wheater weatherData={weatherbyLocation.weather} />
        </div>
      </div>
    </div>
  );
}

export default App;