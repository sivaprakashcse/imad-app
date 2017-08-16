var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	'article-one': {
		id: 1,
		title: 'Article One | Sivaprakash Veluthambi',
		heading: 'Article One',
		date: 'Aug 13, 2017',
		content: `
			<p>
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
			</p>
			<p>
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
			</p>
			<p>
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
				This is my first article. This is my first article. This is my first article.
			</p>
		`,
		commentbox: `
			<input type="text" id="comment" placeholder="comment"></input>
	        <input type="submit" value="submit" id="submit_btn"></input>
	        <ul id="commentlist">
	        </ul>
		`
	},
	'article-two': {
		id: 2,
		title: 'Article Two | Sivaprakash Veluthambi',
		heading: 'Article Two',
		date: 'Aug 13, 2017',
		content: `
			<p>
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
			</p>
			<p>
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
			</p>
			<p>
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
				This is my second article. This is my second article. This is my second article.
			</p>
		`,
		commentbox: `
			<input type="text" id="comment" placeholder="comment"></input>
	        <input type="submit" value="submit" id="submit_btn"></input>
	        <ul id="commentlist">
	        </ul>
		`
	},
	'article-three': {
		id: 3,
		title: 'Article Three | Sivaprakash Veluthambi',
		heading: 'Article Three',
		date: 'Aug 13, 2017',
		content: `
			<p>
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
			</p>
			<p>
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
			</p>
			<p>
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
				This is my third article. This is my third article. This is my third article.
			</p>
		`,
		commentbox: `
			<input type="text" id="comment" placeholder="comment"></input>
	        <input type="submit" value="submit" id="submit_btn"></input>
	        <ul id="commentlist">
	        </ul>
		`
	}
};

function createTemplate (data) {
	var id = data.id;
	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;
	var commentbox = data.commentbox;

	var htmlTemplate = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>${title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" />
			<link rel="stylesheet" type="text/css" href="/ui/style.css">
		</head>
		<body>
			<div class="container">
				<div>
					<a href="/">Home</a>
				</div>
				<hr/>
				<h3>${heading}</h3>
				<span id="article_id" hidden>${id}</span>
				<div>
					${date}
				</div>
				<div>
					${content}
				</div>
				<hr/>
				<div>
					<h4>Comments</h4>
					${commentbox}
				</div>
			</div>
			<script type="text/javascript" src="/ui/main.js">
        	</script>
		</body>
		</html>
	`;

	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter += 1;
  res.send(counter.toString());
});

var firstArticleComments = [];
var secondArticleComments = [];
var thirdArticleComments = [];
app.get('/submit-comment/:id', function (req, res) {
  var id = req.params.id;
  var comment = req.query.comment;
  //check article number
  if(id == 1) {
  	firstArticleComments.push(comment);
  	res.send(JSON.stringify(firstArticleComments));
  }
  else if(id == 2) {
  	secondArticleComments.push(comment);
  	res.send(JSON.stringify(secondArticleComments));
  }
  else if(id == 3) {
  	thirdArticleComments.push(comment);
  	res.send(JSON.stringify(thirdArticleComments));
  }
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

/*var names = [];
app.get('/submit-name', function (req, res) {
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});*/

/*//For testing
app.get('/test/:id', function (req, res) {
  var id = req.params.id;
  var msg = req.query.msg;
  res.send('Id: ' + id + ' Msg: ' + msg);
});*/