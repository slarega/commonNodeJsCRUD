const http = require('http')

const routeHandler = require('./routes/router')
const server = http.createServer(routeHandler)

// http://localhost:3000/users
const PORT = 3000
server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})