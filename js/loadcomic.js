//remove previous comic just in case
removeElementsByClass("comicdiv");

document.title = comic_.title;

removeElementsByClass("downloaddiv");

var linkpdf = comic_.download[0];
var linkfla = comic_.download[1];

document.write('			<div id="comics_download" class="align-center" onmouseup="document.getElementById(\'download-popup\').style.display = \'block\';">');
document.write('				<p id="downloadinfo" style="left: 55%;">.fla | .pdf | .ttf</p>');
document.write('			</div>');

/*if(linkpdf.length > 0 || linkfla.length > 0){
    document.write( '<div class=\"align-center pcdownload\">\n' );
	document.write( '<div style="height: 20px;"></div>\n' );
    document.write( '                <table class=\"download\">\n' );
    document.write( '                    <tr>\n' );
    if(linkpdf.length > 0){
        document.write( '                        <td><a id=\"pdf\" target="_blank" href=\"'+comic_.download[0]+'\" download=\"\"></a></td>\n' );
    }
    if(linkfla.length > 0){
        document.write( '                        <td><a id=\"fla\" target="_blank" href=\"'+comic_.download[1]+'\"></a></td>\n' );
    }
    document.write( '                    </tr>\n' );
    document.write( '                </table>\n' );
	document.write( '<div style="height: 20px;"></div>\n' );
    document.write( '            </div>' );

    document.write( '<div class=\"align-center mobiledownload\">\n' );
	document.write( '<div style="height: 70px;"></div>\n' );
    document.write( '                <table class=\"download\">\n' );
    if(linkpdf.length > 0){
        document.write( '                        <tr><td><a id=\"pdf\" target="_blank" href=\"'+comic_.download[0]+'\" download=\"\"></a></td></tr>\n' );
    }
    if(linkfla.length > 0){
        document.write( '                        <tr><td><a id=\"fla\" target="_blank" href=\"'+comic_.download[1]+'\"></a></td></tr>\n' );
    }
    document.write( '                </table>\n' );
	document.write( '<div style="height: 50px;"></div>\n' );
    document.write( '            </div>' );
}

document.write( '<div class="align-center" style=\"width:40%;\">\n' );
document.write( '                <p class="medium-text">Font used: '+comic_.font[0]+'</p><a style=\"display: block; margin: auto; width: 60%; color:#1f62ff; text-decoration-line: underline;\" href="'+comic_.font[1]+'"><p class="medium-text">DOWNLOAD</p></a>');
document.write( '            </div>' );
*/
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