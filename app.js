var express = require("express");
var app = express();

app.listen(3000, function(){
	console.log("http://127.0.0.1");
});

app.use("/", express.static("./public"));

app.get("/hello", function(req, res) {
	var user = req.query.name;
	res.send(`BOOLDOOK: ${user}님 안녕하세요~`);
});

app.get("/bye", function(req, res) {
	var user = req.query.name;
	res.send(`BOOLDOOK: ${user}님 안녕히 가세요~`);
});

app.get("/search", function(req, res) {
	var q = req.query.q;
	// 앞으로 우리가 실제 데이터베이스에서 결과 가져오는 로직
	var data = ["홍길동", "홍길순", "홍길만"];
	var html = '';
	html += '<h1>검색어 ['+q+'] 에 대한 검색 결과 입니다.</h1>';
	for(var v of data) html += '<h2>'+v+'</h2>';
	res.send(html);
});