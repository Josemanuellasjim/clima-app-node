const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=83ee901e4c4caf08ef6d60627fcf343d&units=metric`);
    //resp.data.main.temp porque: resp es la peticion de arriba, data es el nombre del objeto que trae toda la info de la api
    //.main y temp es lo que hay dentro del objeto data
    return resp.data;
}

if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${ dir }`);
}


module.exports = {
    getClima
}