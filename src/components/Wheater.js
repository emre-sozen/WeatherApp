import React from 'react';

export default function Wheater({ weatherData }) {
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
                            {weatherData && weatherData?.main ? <h1>{weatherData && weatherData?.main.temp.toFixed()}°F</h1> : null}
                        </div>
                        <div className="description">
                            {weatherData && weatherData?.weather ? <p>{weatherData && weatherData?.weather[0]?.main}</p> : null}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels">
                            {weatherData && weatherData?.main ? <p className='bold'>{weatherData && weatherData?.main.feels_like.toFixed()}°F</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {weatherData && weatherData?.main ? <p className='bold'>{weatherData && weatherData?.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {weatherData && weatherData?.wind ? <p className='bold'>{weatherData && weatherData?.wind.speed.toFixed()} MPH</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
