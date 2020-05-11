import bcrypt from 'bcryptjs'

export const removePassword = ({
    password,
    ...rest
}) => {
    return rest
}

export const hashPassword = (password) => {
    const round = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, round)
}

export const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)

}