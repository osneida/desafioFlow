import { Request, Response } from 'express';

export const getCiudad = (req: Request, res: Response ) => {

        const { ciudad } = req.params;
        res.json({
            msg: 'getCiudad',
            ciudad
        })
}