import React from 'react';
import { useDispatch } from 'react-redux'
import updateWeather from '../redux/actions/updateWeather'

export default function Wheater({ weatherData, key }) {
    const dispatch = useDispatch()

    return (
        <>
            {
                weatherData && weatherData?.name !== undefined &&
                <>
                    <div className="top">
                        <div className="location">
                            <p>{weatherData && weatherData?.name}</p>
                        </div>
                        <div className="temp">
                            {weatherData && <h1>{weatherData && weatherData?.main.temp.toFixed()}°F</h1>}
                        </div>
                        <div className="description">
                            {weatherData && <p>{weatherData && weatherData?.weather[0]?.main}</p>}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels">
                            {weatherData && <p className='bold'>{weatherData && weatherData?.main.feels_like.toFixed()}°F</p>}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {weatherData && <p className='bold'>{weatherData && weatherData?.main.humidity}%</p>}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {weatherData && <p className='bold'>{weatherData && weatherData?.wind.speed.toFixed()} MPH</p>}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                    <button onClick={() => dispatch(updateWeather(weatherData?.weather, key))}>Delete</button>
                </>
            }
        </>
    )
}
