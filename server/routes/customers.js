import express from 'express';
import CustomerController from '../controllers/customer';
import TokenTool from '../middlewares/authentication';
import passport from 'passport';
import {
    signUpSchema,
    signInSchema
} from '../validation/schema';
const customersRoute = express.Router();

customersRoute.post('/', signUpSchema, CustomerController.registerCustomer);
customersRoute.post('/login', signInSchema, CustomerController.loginCustomer);
customersRoute.get('/', TokenTool.verifyToken, CustomerController.getCustomer);
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