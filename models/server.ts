import express, { Application } from 'express';
import climaRoutes from '../routes/clima';
import cors from 'cors';
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

    middlewares(){

        // cors
        this.app.use( cors() );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en pueto ' + this.port );
        })
    }

}

export default Server;