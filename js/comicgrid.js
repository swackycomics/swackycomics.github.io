var comicgrid = data;

let array = Object.values(comicgrid);
let rows = 3;
let curcomic = 0;
let columns = Math.ceil(array.length/rows);

//pc version
document.write('		<div class="pctable comicborder pinkborder">');
for(var i = 0; i < columns; i++){
	document.write('			<div class="new_comicgrid">');
	for(var j = 0; j < rows; j++){
		document.write('				<div class="new_comicbox">');
		document.write('					<p id="new_comictop">'+array[curcomic].title+'</p>');
		document.write('						<div class="new_comicframe align-center" id="new_frameregular">');
		document.write('							<a href="'+array[curcomic].href+'">');
		document.write('								<img id="new_comicimg" src="'+"/img/"+array[curcomic].thumb+'">');
		document.write('							</a>');
		document.write('						</div>');
		document.write('					<p>'+array[curcomic].epiodes+(array[curcomic].epiodes == 1 ? " EPISODE" : " EPISODES")+'</p>');
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
	document.write('					<p id="new_comictop">'+array[curcomic].title+'</p>');
	document.write('						<div class="new_comicframe align-center" id="new_frameregular">');
	document.write('							<a href="'+array[curcomic].href+'">');
	document.write('								<img id="new_comicimg" src="'+"/img/"+array[curcomic].thumb+'">');
	document.write('							</a>');
	document.write('						</div>');
	document.write('					<p id="new_comicbottom_mobile">'+array[curcomic].epiodes+(array[curcomic].epiodes == 1 ? " EPISODE" : " EPISODES")+'</p>');
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