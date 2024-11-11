for(var i = 0; i < newsdata.length; i++){
	var curnews = newsdata[i];
	document.write('<div id="news-container" class="align-center">');
	document.write('<p class="big-text">' + curnews.title + '</p>');
	document.write('<p class="small-text">' + curnews.date + '</p>');
	for(var j = 0; j < curnews.fields.length; j++){
		var curfield = curnews.fields[j];
		//write fields
		if(curfield[0] == "image"){
			document.write('<img src="'+curfield[1]+'">');
		}
		if(curfield[0] == "text"){
			for(var o = 0; o < curfield[1].length; o++){
				document.write(curfield[1][o]);
			}
		}
	}
	document.write('</div>');
}