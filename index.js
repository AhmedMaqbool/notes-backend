const HyperExpress = require('hyper-express')
const mongoose = require('mongoose');
const app = new HyperExpress.Server();
const PORT = 3000 || process.env.PORT;
const { Notes } = require('./models/notesSchema');


app.get('/', (req, res) => {
        res.json({ 'helllo': "Hello From Hyper Express Container" })
})

app.post('/create', async (req, res) => {
        try {
                const { title, body } = await req.json()
                const dbResponse = await Notes.create({ title, body })
                res.status(201).send("Created")
        } catch (error) {
                res.status(500).send("Error")
        }
})

mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
                console.log('db connected')
                app.listen(PORT)
                        .then(() => console.log(`Server Running On ${PORT}`))
                        .catch(() => console.log(`Server Failed To Start On ${PORT}`))
        })