"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = require("./Query");

var _graphql = require("graphql");

var _mutations = require("../mutations/mutations");

var _default = new _graphql.GraphQLSchema({
  query: _Query.query,
  mutation: _mutations.mutation
});

exports.default = _default;