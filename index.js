const HyperExpress = require('hyper-express')
const app = new HyperExpress.Server();
const PORT = 3000 || process.env.PORT

app.get('/', (req, res) => {
        res.json({ 'Come_On': "Hello From Hyper Express Container" })
})

app.listen(PORT)
        .then((socket) => console.log(`Server started on ${PORT}`))
        .catch((error) => console.log(`Failer To Start Server on ${PORT}`))