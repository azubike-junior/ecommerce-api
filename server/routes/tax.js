import express from 'express';
import TaxController from '../controllers/tax';
const taxRoute = express.Router()

taxRoute.get('/', TaxController.getAllTaxes)
taxRoute.get('/:tax_id', TaxController.getOneTax)

export default taxRoute;