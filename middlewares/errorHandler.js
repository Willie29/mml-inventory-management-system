const errorHandler = (err, req, res, next) => {
    // console.log(err);
    if (err.name == "SequelizeUniqueConstraintError" || err.name == "SequelizeValidationError") {
        res.status(400).json({ message: err.errors[0].message })
    } else if (err.name == "unauthorize") {
        res.status(401).json({ message: err.message })
    } else if (err.name == "Forbidden") {
        res.status(403).json({ message: "access your account!" })
    } else if (err.name == 'jsonWebTokenError') {
        res.status(err.status).json({ message: "Token is invalid!" })
    } else {
        res.status(500).json({ message: err.message || 'Internal Server Error' })
    }
}
module.exports = errorHandler