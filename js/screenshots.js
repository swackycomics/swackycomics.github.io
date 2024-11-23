//define "dir" before referring to this script | example dir = "/img/games/dynamitehead/"
var len = 7;

for(var i = 1; i < len+1; i++){
	document.write('<a href="'+dir+"scr"+(i.toString())+'.png" target="_blank">');
	document.write('	<img src="'+dir+"scr"+(i.toString())+'.png">');
	document.write('</a>');
}