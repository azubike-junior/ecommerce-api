"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

const app = (0, _express.default)();
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});