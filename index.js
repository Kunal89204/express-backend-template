const app = require("./app")
const connectDB = require("./src/db/connectDB")
const PORT = process.env.PORT || 8000


connectDB()


app.use('/api/v1', (req, res) => {
    res.json("hello wolrld")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

