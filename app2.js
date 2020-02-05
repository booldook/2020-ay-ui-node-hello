/*********** Global Variable ***********/
const express = require('express'); // Module
const app = express();
const port = 3000;
const log = console.log;

/*********** Server Init ***********/
app.listen(port, () => {
	log(`http://127.0.0.1:${port}`);
});

/*********** Module Use ***********/
app.locals.pretty = true;
app.set("view engine", "pug");
app.set("views", "./views");
app.use("/", express.static("./public"));

/*********** Router ***********/
app.get("/pug", (req, res) => {
	res.render('sample.pug')
});
app.get("/pug2", (req, res) => {
	res.render('sample2.pug')
});
app.get("/pug3", (req, res) => {
	res.render('sample3.pug')
});