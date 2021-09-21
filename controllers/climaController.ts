import { Request, Response } from 'express';
import { Clima } from '../models/clima';

export const getCiudad = async(req: Request, res: Response ) => {
    try {
        const { ciudad } = req.params;
        const buscarClima = new Clima();
        const clima = await buscarClima.climaCiudad( ciudad );
        if ( !clima ) {
            return res.status(404).json({
                msg:  `Ciudad ${ ciudad } no encontrada`
            });
        } else {
            res.json( clima );
        }
    } catch (error) {
        res.status(404).json({
            msg:  `Ciudad no encontrada`
        });
    }

}