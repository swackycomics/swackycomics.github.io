//remove previous comic just in case
removeElementsByClass("comicdiv");

removeElementsByClass("downloaddiv");

var linkfla = comic_.download[2];
var linkpdf = comic_.download[0];
var linkttf = comic_.font[1];

var linkarray = [];
if(linkfla.length > 0){
	linkarray.push(".fla")
}
if(linkpdf.length > 0){
	linkarray.push(".pdf")
}
if(linkttf.length > 0){
	linkarray.push(".ttf")
}

//preload
document.write( '<link rel="preload" as="image" href="/img/arrowleft-on.png">');
document.write( '<link rel="preload" as="image" href="/img/arrowright-on.png">');
document.write( '<link rel="preload" as="image" href="/img/nextcomic-on.png">');
document.write( '<link rel="preload" as="image" href="/img/prevcomic-on.png">');

document.write('			<div id="comics_download" class="align-center" onclick="document.getElementById(\'download-popup\').style.display = \'block\';">');
document.write('				<p id="downloadinfo_comic" style="left: 55%;">'+linkarray.join(" | ")+'</p>');
document.write('			</div>');

document.write( '<div class="align-center">\n' );
document.write( '                <p class="big-text" style=\"margin-bottom:8px; min-width:500px;\">' +comic_.title+ '</p>\n' );
document.write( '            </div>' );
document.write( '<div class="align-center">\n' );
document.write( '                <p>Creation date: '+comic_.date+'</p> <p class="medium-text _comicdesc" style=\"margin-bottom:64px; margin-left: auto; margin-right: auto;\">' +comic_.desc+ '</p>\n' );
document.write( '            </div>' );

document.write( '<div class=\"align-center comicdiv\">\n' );
for(var i = 0; i < comicpages[seriesnum][1][episode-1]; i++){
	document.write('			<a href="/comics/'+comic+'_comics/ep'+episode+'/'+(i+1).toString()+'.png" target="_blank">');
    document.write( '                <img src="/comics/'+comic+'_comics/ep'+episode+'/'+(i+1).toString()+'.png">\n' );
	document.write('			</a>');
}
document.write( '            </div>' );

var url = window.location.href;
var urlsplit = url.split("/");

var comic_url = urlsplit.slice(0, -2).join("/")+"/ep";

var prevcomic_url = comic_url+(parseInt(episode)-1).toString()+"/";
var nextcomic_url = comic_url+(parseInt(episode)+1).toString()+"/";

var series = Object.values(Object.values(comicjson)[seriesnum]);
var disp_episode = episode-1;
var prevcomic_data = series[Math.max(0,disp_episode-1)];
var nextcomic_data = series[Math.min(series.length-1,disp_episode+1)];

document.writeln('			<div>');
document.writeln('				<div class="comic_prevnext_div" id="comic_prev_div" onclick="window.location=\''+prevcomic_url+'\'">');
document.writeln('					<img id="comic_prev" class="comic_prevnext_button" src="/img/arrowleft.png">');
document.writeln('					<img id="comic_prevtop" class="comic_prevnext_top" src="/img/prevcomic.png">');
document.writeln('					<div class="comic_prevnext_frame align-center">');
document.writeln('						<p class="comic_prevnext_title">#'+(parseInt(episode)-1)+': '+prevcomic_data.title+'</p>');
document.writeln('						<img id="comic_prevnext_image" src="/img/icons/'+prevcomic_data.thumb+'">');
document.writeln('					</div>');
document.writeln('				</div>');
document.writeln('				<div class="comic_prevnext_div" id="comic_next_div" onclick="window.location=\''+nextcomic_url+'\'">');
document.writeln('					<img id="comic_next" class="comic_prevnext_button" src="/img/arrowright.png">');
document.writeln('					<img id="comic_nexttop" class="comic_prevnext_top" src="/img/nextcomic.png">');
document.writeln('					<div class="comic_prevnext_frame align-center">');
document.writeln('						<p class="comic_prevnext_title">#'+(parseInt(episode)+1)+': '+nextcomic_data.title+'</p>');
document.writeln('						<img id="comic_prevnext_image" src="/img/icons/'+nextcomic_data.thumb+'">');
document.writeln('					</div>');
document.writeln('				</div>');
document.writeln('			</div>');

//remove if episode doesnt exist
if(parseInt(episode) <= 1){
	var prev = document.getElementById('comic_prev_div');
	prev.style.display = 'none';
}
if(parseInt(episode) >= series.length){
	var next = document.getElementById('comic_next_div');
	next.style.display = 'none';
}

//load all episodes
document.write('			<div style="height: 32px;"></div>');
document.write('			<p class="big-text">ALL EPISODES</p>');
document.write('			<div id="allepisodes" class="align-center">');
for(var i = 0; i < series.length; i++){
	if(episode == i+1){
		document.write('				<div class="listcomicframe yellow-border">');
		document.write('					<p class="comic_prevnext_title">#'+(i+1).toString()+': '+series[i].title+'</p>');
		document.write('					<img src="/img/icons/'+series[i].thumb+'">');
		document.write('				</div>');
	} else {
		document.write('				<a href="/comics/'+comic+'_comics/ep'+(i+1).toString()+'">');
		document.write('					<div class="listcomicframe other-episode">');
		document.write('						<p class="comic_prevnext_title">#'+(i+1)+': '+series[i].title+'</p>');
		document.write('						<img src="/img/icons/'+series[i].thumb+'">');
		document.write('					</div>');
		document.write('				</a>');
	}
}
document.write('			</div>');

window.addEventListener("load", () => {
	var scrolldiv = document.getElementById('allepisodes');
	var width = (scrolldiv.scrollWidth-scrolldiv.offsetWidth)+24;
	
	var percentpos = (episode-1)/(series.length-1);
	scrolldiv.scrollLeft = percentpos * width;
});

if(comic_.timelapse.length > 0){
	document.write( '<div class="align-center">' );
	document.write( '	<p class="big-text" style=\"margin-top:100px; margin-left: auto; margin-right: auto;">TIMELAPSE</p>');
	document.write( '</div>' );
	
	document.write( '<div class="timelapsediv yellow-border align-center">' );
	document.write( '	'+comic_.timelapse);
	document.write( '</div>' );
}