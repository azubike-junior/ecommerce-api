import express from 'express';
import router from './routes/index'
import logger from 'morgan';
import dotenv from 'dotenv'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger.json'
import passport from 'passport';
import {
    graphqlHTTP
} from 'express-graphql'
import schema from './graphql/queries/rootQuery'
import {
    passportfacebookConfiguration
} from './middlewares/passport'
dotenv.config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.use(passport.initialize())
app.use(passport.session())

passportfacebookConfiguration(passport)

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use(logger('dev'))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})