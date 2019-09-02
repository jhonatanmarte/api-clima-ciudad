const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=563795804529bd33fd40c83b62a0f6b3&units=metric`)

    return resp.data.main.temp;
}

module.exports = { getClima }