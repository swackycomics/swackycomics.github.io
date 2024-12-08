var comic = document.querySelectorAll("#curcomic")[0].innerHTML;
var comicgrid = {};
var comicnum = 0;
switch(comic){
    case "redbidd":
        comicgrid = comicjson.redbidd;
        comicnum = 0;
    break;
    case "dh":
        comicgrid = comicjson.dh;
        comicnum = 1;
    break;
	case "swackzards":
        comicgrid = comicjson.swackzards;
        comicnum = 2;
    break;
    case "jimmy":
        comicgrid = comicjson.jimmy;
        comicnum = 3;
    break;
    case "vegg":
        comicgrid = comicjson.vegg;
        comicnum = 4;
    break;
}

let array = Object.values(comicgrid);
let rows = 3;
let curcomic = 0;
let columns = Math.ceil(array.length/rows);

document.write( '            <div>\n' );
document.write( '                <p class="medium-text" style=\"margin-bottom:42px; margin-left: auto; margin-right: auto; width:750px;\">'+Object.values(data)[comicnum].desc+'</p>\n' );
document.write( '            </div>' );

//pc version
document.write('		<div class="pctable comicborder pinkborder">');
for(var i = 0; i < columns; i++){
	document.write('			<div class="new_comicgrid">');
	for(var j = 0; j < rows; j++){
		document.write('				<div class="new_comicbox">');
		document.write('					<p id="new_comictop">'+ "#"+(curcomic+1).toString()+": " + array[curcomic].title +'</p>');
		document.write('						<div class="new_comicframe align-center" id="new_frameregular">');
		document.write('							<a href="/comics/'+comic+'_comics/ep'+(curcomic+1).toString()+'">');
		document.write('								<img id="new_comicimg" src="'+"/img/icons/"+array[curcomic].thumb+'">');
		document.write('							</a>');
		document.write('						</div>');
		document.write('					<p>'+array[curcomic].date+'</p>');
		document.write('					<p>'+array[curcomic].pages+" PAGES"+'</p>');
		document.write('				</div>');
		
		curcomic ++;
        if(curcomic >= array.length){
            break;
        }
	}
	document.write('			</div>');
	
	if(i < columns-1){
		document.write('		<hr>');
	}
}
document.write('		</div>');

//mobile version
curcomic = 0;
document.write('		<div class="mobiletable comicborder pinkborder">');
for(var i = 0; i < array.length; i++){
	document.write('				<div class="new_comicbox_mobile">');
	document.write('					<p id="new_comictop">'+ "#"+(curcomic+1).toString()+": " + array[curcomic].title +'</p>');
	document.write('						<div class="new_comicframe align-center" id="new_frameregular">');
	document.write('							<a href="/comics/'+comic+'_comics/ep'+(curcomic+1).toString()+'">');
	document.write('								<img id="new_comicimg" src="'+"/img/icons/"+array[curcomic].thumb+'">');
	document.write('							</a>');
	document.write('						</div>');
	document.write('					<p>'+array[curcomic].date+'</p>');
	document.write('					<p id="new_comicbottom_mobile">'+array[curcomic].pages+" PAGES"+'</p>');
	document.write('				</div>');
	
	curcomic ++;
	if(i < array.length-1){
		document.write('		<hr>');
	}
	if(curcomic >= array.length){
		break;
	}
}
document.write('		</div>');