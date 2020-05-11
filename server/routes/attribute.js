import express from 'express';
import AttributeController from '../controllers/attribute';
const attributeRoute = express.Router()

attributeRoute.get('/', AttributeController.getAttributes)
attributeRoute.get('/:attribute_id', AttributeController.getAttribute);
attributeRoute.get('/values/:attribute_id', AttributeController.getAttributesValue)
attributeRoute.get('/inProduct/:product_id', AttributeController.getAllproductAttributes)

export default attributeRoute