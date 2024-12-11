//remove previous comic just in case
removeElementsByClass("comicdiv");

document.title = comic_.title;

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
document.write( '<link rel="preload" as="image" href="/img/next-on.png">');
document.write( '<link rel="preload" as="image" href="/img/prev-on.png">');

document.write('			<div id="comics_download" class="align-center" onmouseup="document.getElementById(\'download-popup\').style.display = \'block\';">');
document.write('				<p id="downloadinfo_comic" style="left: 55%;">'+linkarray.join(" | ")+'</p>');
document.write('			</div>');

document.write( '<div class="align-center">\n' );
document.write( '                <p class="big-text" style=\"margin-bottom:8px; min-width:500px;\">' +comic_.title+ '</p>\n' );
document.write( '            </div>' );
document.write( '<div class="align-center">\n' );
document.write( '                <p>Creation date: '+comic_.date+'</p> <p class="medium-text" style=\"margin-bottom:64px; margin-left: auto; margin-right: auto; width:750px;\">' +comic_.desc+ '</p>\n' );
document.write( '            </div>' );

document.write( '<div class=\"align-center comicdiv\">\n' );
for(var i = 0; i < comicpages[seriesnum][1][episode-1]; i++){
    document.write( '                <img src=\"/comics/'+comic+'_comics/ep'+episode+'/'+(i+1).toString()+'.png\">\n' );
}
document.write( '            </div>' );

var url = window.location.href;
var urlsplit = url.split("/");

var comic_url = urlsplit.slice(0, -2).join("/")+"/ep";

var prevcomic = comic_url+(parseInt(episode)-1).toString()+"/";
var nextcomic = comic_url+(parseInt(episode)+1).toString()+"/";

removeElementsByClass("pagesdiv");

document.write( '<div class=\"align-center pagesdiv\">\n' );
document.write( '                <table class=\"prevnext\">\n' );
document.write( '                    <tr>\n' );
document.write( '                        <td><a id=\"prev\" href=\"'+prevcomic+'\"></a></td>\n' );
document.write( '                        <td><a id=\"next\" href=\"'+nextcomic+'\"></a></td>\n' );
document.write( '                    </tr>\n' );
document.write( '                </table>\n' );
document.write( '            </div>' );