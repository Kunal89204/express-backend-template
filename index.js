const app = require("./app")
const connectDB = require("./src/db/connectDB")
const PORT = process.env.PORT || 8000





connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
    return error
})




