const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        //hay que escribir -d , pejemplo node app -d Madrid
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        //obliga a meter el -d
        demand: true
    }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);

clima.getClima(41.660000, -0.880000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${coords.direccion} es de ${temp}ºC`;
    } catch (error) {
        return `No se puede obtener la temperatura de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);