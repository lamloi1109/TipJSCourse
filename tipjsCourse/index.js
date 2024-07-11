const app = require("./src/app");

const PORT = 3000 

const server = app.listen(PORT, () => {
    console.log('Nodejs Server Loaded!')
})


// Ctrl + C
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server is Closed')
    })
})