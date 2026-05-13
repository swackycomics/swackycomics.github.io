function loadSwacktalk(type){
	var has_player_tags = false;
	
	if(type == "all"){
		for(var i = 0; i < swacktalk.length; i++){
			var curblog = swacktalk[i];
			document.write('<div id="news-full" class="news-container yellow-border align-center" style="cursor: pointer;" onclick="window.location=\''+curblog.href+'\'">');
			document.write('<p class="big-text">' + curblog.title + '</p>');
			document.write('<p class="small-text">' + curblog.date + '</p>');
			document.write('<p>' + curblog.shortdesc + '<strong style="color:#FFB812"> Read more</strong></p>');
			document.write('<img src="'+curblog.thumbnail+'">');
			document.write('</div>');
		}
	} else if(type == "one"){
		var id = document.querySelectorAll("#newsid")[0].innerHTML;
		var curblog = 0;
		var curblog_fields = 0;
		for(var i = 0; i < swacktalk.length; i++){
			if(swacktalk[i].id == id){
				curblog = swacktalk[i];
				break;
			}
		}
		
		curblog_fields = swacktalk_current[0].fields;
		
		document.write('<div id="news-full" class="news-container yellow-border align-center">');
		document.write('<p class="big-text">' + curblog.title + '</p>');
		document.write('<p class="small-text">' + curblog.date + '</p>');
		for(var j = 0; j < curblog_fields.length; j++){
			var curfield = curblog_fields[j];
			//write fields
			if(curfield[0] == "image"){
				document.write('<img src="'+curfield[1]+'">');
				if(curfield.length >= 3){
					document.write('<p class="align-center" id="underimg_text">'+curfield[2]+'</p>');
				}
			}
			if(curfield[0] == "video"){
				has_player_tags = true;
				document.write('<video preload="metadata" width="720" class="mejs__player" data-mejsoptions=\'{"alwaysShowControls": "true"}\'">');
				document.write('	<source src="'+curfield[1]+'" type="video/mp4"\'>');
				document.write('	WHOOPS! Your browser doesn\'t support video files!');
				document.write('</video>');
				if(curfield.length >= 3){
					document.write('<p class="align-center" id="underimg_text">'+curfield[2]+'</p>');
				}
			}
			if(curfield[0] == "audio"){
				has_player_tags = true;
				document.write('<audio src="'+curfield[1]+'" class="mejs__player">');
				document.write('	WHOOPS! Your browser doesn\'t support audio files!');
				document.write('</audio>');
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
	
	if(has_player_tags){
		// You can use either a string for the player ID (i.e., `player`), 
		// or `document.querySelector()` for any selector
		var player = new MediaElement('player', {
			iconSprite: '/css/mediaelement/mejs-controls.svg', 
			features: ['playpause', 'current', 'progress', 'duration', 'volume', 'tracks', 'fullscreen'],
			success: function(mediaElement, originalNode, instance) {
			
			}
		});
	}
}