const data = require('../../sql3Data')

module.exports = async (req, res) =>{
    res.writeHead(200)
    res.end(JSON.stringify(await data.getUsers()))
}