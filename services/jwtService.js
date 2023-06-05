
const jwt = require("jsonwebtoken")


exports.getAuthTokenFromHeaders = async (req) => {
    try {
        const { headers: { authorization } } = req;
        console.log(authorization)
        if (authorization && authorization.startsWith("Bearer")) {
            const token = authorization.split(" ")[1]
            return token;
        }
    } catch (e) {
        console.log(e);
        return Promise.reject(e)
    }
}


exports.signAuthToken = async (id) => {
    return new Promise((resolve, reject) => {
        try {
            const token = jwt.sign({ _id: id }, process.env.AUTH_TOKEN_JWT_SECRET, { expiresIn: '1h' })
            return resolve(token)

        } catch (error) {
            return reject(error)
        }
    })
}


exports.verifyAuthToken = async (token, ignoreExp = false) => {
    return new Promise((resolve, reject) => {
        try {
            const decoded = jwt.verify(token, process.env.AUTH_TOKEN_JWT_SECRET,
                { ignoreExpiration: ignoreExp })

            return resolve(decoded);
        } catch (e) {
            return reject(e)

        }
    })
}