import axios from "axios"

const getWeatherByLocation = (lat, lon) => (dispatch) => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=895284fb2d2c50a520ea537456963d9c`)
        .then((res) => dispatch({ type: "GET_WEATHER_BY_LOCATİON_SUCCESS", payload: res.data }))
        .catch((err) => dispatch({ type: "GET_WEATHER_BY_LOCATİON_ERROR", payload: err }))
}

export default getWeatherByLocation