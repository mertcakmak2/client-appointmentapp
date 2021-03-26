import weatherService from 'axios';

const api = "http://164.90.163.134:5000/api/weather";

const getWeather = () => {
    return new Promise((resolve) => {
        weatherService.get(api).then(response => {
            resolve(response);
        })
    })
}

export default {
    getWeather
}