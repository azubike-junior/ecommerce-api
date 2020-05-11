import {
    Strategy as facebookStrategy
} from 'passport-facebook'
import {
    facebookConfig
} from '../utils/facebookConfig'
import {
    facebookAuth
} from '../utils/facebookAuth'


const passportfacebookConfiguration = passport => {
    passport.use(new facebookStrategy(facebookConfig, facebookAuth))
}

export {
    passportfacebookConfiguration
}