
import  axios  from 'axios';

export class Clima {

        async climaCiudad( q = ''){
        const intanceClima = axios.create ({
            //
            baseURL: ' https://api.openweathermap.org/data/2.5/forecast',
            params: {
                'q':q,
                'appid': process.env.OPENWEAHER_key,
                'units': 'metric',
                'lang':'es'
            }
        });

        const respClima = await intanceClima.get('');
        return respClima.data
    }
}
