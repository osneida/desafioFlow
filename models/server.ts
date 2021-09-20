import express, { Application } from 'express';

import climaRoutes from '../routes/clima';
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        clima: '/api/clima'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // definir rutas
        this.route();
    }

    route(){
        this.app.use( this.apiPaths.clima, climaRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en pueto ' + this.port );
        })
    }

}

export default Server;