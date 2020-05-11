import CustomerTool from '../tools/customer'
import isEmpty from 'lodash.isempty';
import {
    removePassword
} from './password';

export const facebookAuth = (access, token, profile, done) => {
    process.nextTick(async () => {
        try {
            const customer = await CustomerTool.getCustomer(profile.emails[0].value)
            if (!isEmpty(customer)) {
                const newCustomer = await CustomerTool.createCustomer({
                    name,
                    email,
                    password: ''
                })
                return done(null, removePassword(newCustomer))
            }
            return done(null, removePassword(newCustomer))
        } catch (e) {
            throw e
        }
    })
}