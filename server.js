const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(require("./routes/apiRoutes"))
app.use(require("./routes/htmlRoutes"))

app.listen(PORT, () => {
    console.log("Listening to da smoov server soundz on http://localhost:3001...");
});