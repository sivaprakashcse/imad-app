console.log('Loaded!');

//Display comments for articles
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if(request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200) {
				var comments = request.responseText;
				comments = JSON.parse(comments);
				var list = '';
				for(var i=0; i< comments.length; i++) {
					list += '<li>' + comments[i] + '</li><br>';
				}
				var ul = document.getElementById('commentlist');
				ul.innerHTML = list;
			}
		}
	};

	var articleId = document.getElementById('article_id').innerHTML;
	var id = parseInt(articleId);
	var commentInput = document.getElementById('comment');
	var comment = commentInput.value;
	//request.open('GET','http://localhost:8080/submit-comment/' + id + '?comment=' + comment,true);
	request.open('GET','http://sivaprakashcb.imad.hasura-app.io/submit-comment/' + id + '?comment=' + comment,true);
	request.send(null);
};

/*//Test button counter
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
	counter += 1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();
};*/

/*//Click Counter
var button = document.getElementById('counter');

button.onclick = function () {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if(request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200) {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	};

	request.open('GET','http://localhost:8080/counter',true);
	request.send(null);
};
*/

/*//Submit name
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if(request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200) {
				var names = request.responseText;
				names = JSON.parse(names);
				var list = '';
				for(var i=0; i< names.length; i++) {
					list += '<li>' + names[i] + '</li>';
				}
				var ul = document.getElementById('namelist');
				ul.innerHTML = list;
			}
		}
	};

	var nameInput = document.getElementById('name');
	var name = nameInput.value;
	request.open('GET','http://localhost:8080/submit-name?name=' + name,true);
	request.send(null);
};
*/