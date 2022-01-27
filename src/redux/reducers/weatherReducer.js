let initialState = {
    weather: [],
    loading: true,
    error: '',
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_WEATHER_SUCCESS":
            return { ...initialState, loading: false, weather: [...state.weather, action.payload] }
        case "GET_WEATHER_ERROR":
            return { ...initialState, loading: false, error: action.payload }
        default:
            return { ...state }
    }
}

export default weatherReducer