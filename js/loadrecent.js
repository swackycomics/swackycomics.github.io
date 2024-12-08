//recent comic
document.write('			<div class="pctable comicborder greenborder">');
document.write('				<img id="recent_img1" src="/img/recent1.png"/>');
document.write('				<img id="recent_img2" src="/img/recent2.png"/>');
document.write('				<div class="new_comicbox">');
document.write('						<div class="new_comicframe align-center" id="new_framerecent">');
document.write('							<a href="'+recent.href+'">');
document.write('								<img id="new_new" src="/img/new.png">');
document.write('								<img id="new_comicimg" src="/img/icons/'+recent.thumb+'.png">');
document.write('							</a>');
document.write('						</div>');
document.write('					<p>'+recent.title+'</p>');
document.write('				</div>');
document.write('			</div>');

document.write('			<div class="mobiletable comicborder greenborder">');
document.write('				<div class="new_comicbox_mobile">');
document.write('						<div class="new_comicframe align-center" id="new_framerecent">');
document.write('							<a href="'+recent.href+'">');
document.write('								<img id="new_new" src="/img/new.png">');
document.write('								<img id="new_comicimg" src="/img/icons/'+recent.thumb+'.png">');
document.write('							</a>');
document.write('						</div>');
document.write('					<p id="new_comicbottom_mobile">'+recent.title+'</p>');
document.write('				</div>');
document.write('			</div>');