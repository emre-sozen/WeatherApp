const updateWeather = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    
    return {
        type: "UPDATE_WEATHER",
        payload: result
    }
}

export default updateWeather