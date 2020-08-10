"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.facebookConfig = void 0;
const {
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_URI
} = process.env;
const facebookConfig = {
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CLIENT_URI,
  profileFields: ["customer_id", "name", "email"]
};
exports.facebookConfig = facebookConfig;