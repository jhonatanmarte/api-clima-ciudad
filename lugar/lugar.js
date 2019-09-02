const axios = require('axios');

const getLugarLatLng = async(direc) => {


    //funcion para eliminar los espacion de la direccion y caracteres especial 
    //que no son amigables con las URL como los espacios,etc
    const encodedUrl = encodeURI(direc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'af58a37b83msh5a7a0e4f3288c80p138797jsn3d551d503615' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direc}`);
    }

    //creando una constante 'data' para no tener que siempre llamar a resp.data.Results

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }


}

module.exports = { getLugarLatLng }