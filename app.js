var express = require("express");
var app = express();

var htmlHeader = `
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title></title>
	<link rel="stylesheet" href="/css/fa.min.css">
	<link rel="stylesheet" href="/css/animate.css">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/base.css">
	<link rel="stylesheet" href="/css/index.css">
	<script src="/js/jquery-3.4.1.min.js"></script>
	<script src="/js/popper.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/imagesloaded.pkgd.min.js"></script>
	<script src="/js/wow.min.js"></script>
</head>
<body>
	<!-- Header -->
	<header class="header bg-dark d-flex justify-content-between">
		<a class="logo p-3" href="/">LOGO</a>
		<div class="navi-wrap d-flex">
			<a class="p-3" href="/">HOME</a>
			<a class="p-3" href="/sample.html">Sample</a>
			<a class="p-3" href="/hello?name=booldook">Hello</a>
			<a class="p-3" href="/bye?name=booldook">Bye</a>
		</div>
	</header>
	<!-- Main -->
	<main class="main-wrap p-3 text-center">`;

var htmlFooter = `
</main>
	<!--  -->
	<!-- Footer -->
	<footer class="footer"></footer>
	<script src="/js/index.js"></script>
</body>
</html>`;

app.listen(3000, function(){
	console.log("http://127.0.0.1");
});

app.use("/", express.static("./public"));

app.get("/hello", function(req, res) {
	var user = req.query.name;
	res.send(`${htmlHeader}BOOLDOOK: ${user}님 안녕하세요~${htmlFooter}`);
});

app.get("/bye", function(req, res) {
	var user = req.query.name;
	res.send(`${htmlHeader}BOOLDOOK: ${user}님 안녕히 가세요~${htmlFooter}`);
});

app.get("/search", function(req, res) {
	var q = req.query.q;
	// 앞으로 우리가 실제 데이터베이스에서 결과 가져오는 로직
	var data = ["홍길동", "홍길순", "홍길만"];
	var html = '';
	html += '<h1>검색어 ['+q+'] 에 대한 검색 결과 입니다.</h1>';
	for(var v of data) html += '<h2>'+v+'</h2>';
	res.send(htmlHeader + html + htmlFooter);
});