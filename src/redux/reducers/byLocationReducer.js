let initialState = {
    weather: '',
    loading: true,
    error: '',
}

const byLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_WEATHER_BY_LOCATİON_SUCCESS":
            return { ...initialState, loading: false, weather: action.payload }
        case "GET_WEATHER_BY_LOCATİON_ERROR":
            return { ...initialState, loading: false, error: action.payload }
        default:
            return { ...state }
    }
}

export default byLocationReducer