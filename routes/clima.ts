import { Router } from "express";
import { getCiudad } from '../controllers/climaController';

const router = Router();

router.get('/:ciudad', getCiudad);

export default router;