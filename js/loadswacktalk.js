function loadSwacktalk(type){
	if(type == "all"){
		for(var i = 0; i < swacktalk.length; i++){
			var sentimage = false;
			var curblog = swacktalk[i];
			document.write('<div id="news-full" class="news-container yellow-border align-center" style="cursor: pointer;" onclick="window.location=\''+curblog.href+'\'">');
			document.write('<p class="big-text">' + curblog.title + '</p>');
			document.write('<p class="small-text">' + curblog.date + '</p>');
			document.write('<p>' + curblog.shortdesc + '<strong style="color:#FFB812"> Read more</strong></p>');
			for(var j = 0; j < curblog.fields.length; j++){
				var curfield = curblog.fields[j];
				if(!sentimage && curfield[0] == "image"){
					document.write('<img src="'+curblog.thumbnail+'">');
					sentimage = true;
				}
			}
			document.write('</div>');
		}
	} else if(type == "one"){
		var id = document.querySelectorAll("#newsid")[0].innerHTML;
		var curblog = 0;
		for(var i = 0; i < swacktalk.length; i++){
			if(swacktalk[i].id == id){
				curblog = swacktalk[i];
				break;
			}
		}
		document.write('<div id="news-full" class="news-container yellow-border align-center">');
		document.write('<p class="big-text">' + curblog.title + '</p>');
		document.write('<p class="small-text">' + curblog.date + '</p>');
		for(var j = 0; j < curblog.fields.length; j++){
			var curfield = curblog.fields[j];
			//write fields
			if(curfield[0] == "image"){
				document.write('<img src="'+curfield[1]+'">');
				if(curfield.length >= 3){
					document.write('<p class="align-center" id="underimg_text">'+curfield[2]+'</p>');
				}
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