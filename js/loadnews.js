function loadNews(type){
	if(type == "all"){
		for(var i = 0; i < newsdata.length; i++){
			var sentimage = false;
			var curnews = newsdata[i];
			document.write('<div id="news-full" class="news-container yellow-border align-center" style="cursor: pointer;" onclick="window.location=\''+curnews.href+'\'">');
			document.write('<p class="big-text">' + curnews.title + '</p>');
			document.write('<p class="small-text">' + curnews.date + '</p>');
			document.write('<p>' + curnews.shortdesc + '<strong style="color:#FFB812"> Read more</strong></p>');
			for(var j = 0; j < curnews.fields.length; j++){
				var curfield = curnews.fields[j];
				if(!sentimage && curfield[0] == "image"){
					document.write('<img src="'+curfield[1]+'">');
					sentimage = true;
				}
			}
			document.write('</div>');
		}
	} else if(type == "one"){
		var id = document.querySelectorAll("#newsid")[0].innerHTML;
		var curnews = 0;
		for(var i = 0; i < newsdata.length; i++){
			if(newsdata[i].id == id){
				curnews = newsdata[i];
				break;
			}
		}
		document.write('<div id="news-full" class="news-container yellow-border align-center">');
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
}