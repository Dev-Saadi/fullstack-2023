let secureApi = (req, res, next) => {
    console.log(process.env.SECUREAPIPASS);

    if (req.headers.authorization == process.env.SECUREAPIPASS) {
        next();
    } else {
        res.send({ error: "tor khobor ase" })
    }
}

module.exports = secureApi;