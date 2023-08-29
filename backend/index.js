const connectToMongo = require('./db');
const express = require("express");
const app = express();
const port = 3000;

// mongo connection
connectToMongo();

app.use(express.json());

// Available routes
app.use('/api/auth', require("./routes/auth"));
app.use('/api/notes', require("./routes/notes"));


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
