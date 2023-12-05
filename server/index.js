const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const PostRouter = require('./routes/posts.js');


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', PostRouter);

app.get('/',(req,res) =>{
    res.send('Hello it is a post page')
})

CONNECTION_URL="mongodb+srv://arunak:arunak_123@cluster0.jvg8i.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL )
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
    .catch((err) => console.log(err.message));
