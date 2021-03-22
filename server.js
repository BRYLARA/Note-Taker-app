const express = require("express");
// psuedo------set up require for routes here then write tjem in seperate folder
// use html routes to respond and connect


const htmlRoutes = require("./routes/htmlRoute");
const apiRoutes = require("./routes/apiRoutes");

// run the APP
const app = express();
//this is setting PORT
const PORT = process.env.PORT || 3000;



// psuedo-----
// set the static, middleware, body parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));