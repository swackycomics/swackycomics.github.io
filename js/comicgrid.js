var comicgrid = data;

let array = Object.values(comicgrid);
let curcomic = 0;

//load series
for(var i = 0; i < array.length; i++){
	var dirborder = "right";
	var diricon = "left";
	if(i % 2 == 1){
		dirborder = "left";
		diricon = "right";
	}
	
	curcomic = i;
	
	document.write('			<div class="align-center" id="comicseries_div">');
	document.write('					<a href="'+array[curcomic].href+'">');
	document.write('					<img id="comicseries_thumb" class="pinkborder comicseries_thumb'+diricon+'" src="'+"/img/"+array[curcomic].thumb+'">');
	document.write('					<div id="comicseries_border" class="comicseries_border'+dirborder+'">');
	document.write('						<p class="align-left">'+array[curcomic].title+' | '+array[curcomic].epiodes+(array[curcomic].epiodes == 1 ? " EPISODE" : " EPISODES")+'</p>');
	document.write('						<div class="pinkborder" style="background-color: #000000AA; height: 95%; padding: 12px;">');
	document.write('							<p class="align-'+diricon+' medium-text">'+array[curcomic].minidesc+'</p>');
	if(array[curcomic].discontinued){
		document.write('							<p id="comicseries_ended" class="align-'+dirborder+' medium-text" style="color: #ff0d76;">DISCONTINUED</p>');
	}
	document.write('						</div>');
	document.write('					</div>');
	document.write('				</a>');
	document.write('			</div>');
}