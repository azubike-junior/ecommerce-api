const {
    CLIENT_ID,
    CLIENT_SECRET,
    CLIENT_URI
} = process.env

export const facebookConfig = {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CLIENT_URI,
    profileFields: ["customer_id", "name", "email"]
}