//recent comic
	document.write('			<div class="pctable comicborder greenborder">');
	document.write('				<img id="recent_img1" src="/img/recent/recent3_1.png"/>');
	document.write('				<img id="recent_img2" src="/img/recent/recent3_2.png"/>');
	for(var i = 0; i < recent.length; i++){
		var currecent = recent[i];
		document.write('				<div class="new_comicbox">');
		document.write('						<div class="new_comicframe align-center" id="new_framerecent">');
		document.write('							<a href="'+currecent.href+'">');
		document.write('								<img id="new_new" src="/img/new.png">');
		document.write('								<img id="new_comicimg" src="/img/icons/'+currecent.thumb+'.png">');
		document.write('							</a>');
		document.write('						</div>');
		document.write('					<p>'+currecent.title+'</p>');
		document.write('				</div>');
	}
	document.write('			</div>');

	document.write('			<div class="mobiletable comicborder greenborder">');
	for(var i = 0; i < recent.length; i++){
		var currecent = recent[i];
		document.write('				<div class="new_comicbox_mobile">');
		document.write('						<div class="new_comicframe align-center" id="new_framerecent">');
		document.write('							<a href="'+currecent.href+'">');
		document.write('								<img id="new_new" src="/img/new.png">');
		document.write('								<img id="new_comicimg" src="/img/icons/'+currecent.thumb+'.png">');
		document.write('							</a>');
		document.write('						</div>');
		document.write('					<p id="new_comicbottom_mobile">'+currecent.title+'</p>');
		document.write('				</div>');
	}
	document.write('			</div>');