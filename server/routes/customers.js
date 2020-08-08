import express from 'express';
import CustomerController from '../controllers/customer';
import passport from 'passport';
import {
    validateSchema
} from '../middlewares/valiadateData';
const customersRoute = express.Router();
import verifyToken from '../middlewares/authentication'

customersRoute.post('/signup', validateSchema, CustomerController.registerCustomer);
customersRoute.post('/login', CustomerController.loginCustomer);
customersRoute.get('/', verifyToken, CustomerController.getCustomer);
customersRoute.get(
    '/facebook',
    passport.authenticate('facebook', {
        scope: ['profile', 'email']
    })
);
customersRoute.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
        session: false
    }),
    CustomerController.facebookLogin
);

export default customersRoute;