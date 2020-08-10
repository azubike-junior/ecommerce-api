"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

var _passport = _interopRequireDefault(require("passport"));

var _expressGraphql = require("express-graphql");

var _rootQuery = _interopRequireDefault(require("./graphql/queries/rootQuery"));

var _passport2 = require("./middlewares/passport");

_dotenv.default.config();

const app = (0, _express.default)();
const PORT = process.env.PORT;
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  schema: _rootQuery.default,
  graphiql: true
}));
app.use(_passport.default.initialize());
app.use(_passport.default.session());
(0, _passport2.passportfacebookConfiguration)(_passport.default);
app.use('/swagger', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use((0, _morgan.default)('dev'));
app.use('/', _index.default);
app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});