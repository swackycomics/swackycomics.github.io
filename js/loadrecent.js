//recent comic
	document.write('			<div class="pctable comicborder greenborder">');
	document.write('				<img id="recent_img1" src="/img/recent/recent8_1.png"/>');
	document.write('				<img id="recent_img2" src="/img/recent/recent8_2.png"/>');
	
	var p_text = "No comic is currently being worked on.";
	var p_id = "prog_text_no";
	if(comic_progress > -1){
		p_text = "A new comic is being worked on!";
		p_id = "prog_text_yes";
	}
	
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
	
	document.write('<div style="height:32px"></div>');
	
	document.write('<div class="align-center" id="prog">');
	document.write('	<p>PROGRESS-O-METER STATUS:</p>');
	document.write('	<p id="'+p_id+'">'+p_text+'</p>');
	document.write('	<a href="/progress-o-meter/"><img id="prog_img" src="/img/progress-o-meter/progress_sign_off.png"></a>');
	document.write('	<p>When a new comic is being worked on, click on the Progress-O-Meter to see its progress!</p>');
	document.write('</div>');