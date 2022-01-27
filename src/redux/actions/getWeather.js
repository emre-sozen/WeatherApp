import axios from "axios"

const getWeather = (location) => (dispatch) => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
        .then((res) => dispatch({ type: "GET_WEATHER_SUCCESS", payload: res.data }))
        .catch((err) => dispatch({ type: "GET_WEATHER_ERROR", payload: err }))
}

export default getWeather