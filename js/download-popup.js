var linkpdf = comic_.download[0];
var infopdf = comic_.download[1];

var linkfla = comic_.download[2];
var infofla = comic_.download[3];

var fontname = comic_.font[0];
var fontlink = comic_.font[1];
var fontfamily = comic_.font[2];

document.write('		<div id="download-popup">');
document.write('			<script>');
document.write('				document.addEventListener("mousedown", event => {');
document.write('					var _this = document.getElementById("download-popup");');
document.write('					var box = document.getElementById("download-box");');
document.write('					if(!box.contains(event.target)) {');
document.write('						_this.style.display = "none";');
document.write('					};');
document.write('				});');
document.write('			</script>');
document.write('			<div id="download-box">');
document.write('				<div style="position: relative; width: 100%">');
document.write('					<img id="download1" src="/img/download/img1.png" class="pcelement">');
document.write('					<img id="download2" src="/img/download/img2.png" class="pcelement">');
document.write('				</div>');
document.write('				<img id="download-top" src="/img/download.png" class="popup-element align-center">');
document.write('				<div style="height: 4vh"></div>');
if(linkfla.length > 0){
	document.write('				<a href="'+linkfla+'" target="_blank" class="popup-btn popup-element align-center"><img id="download-fla"></a>');
	document.write('				<p class="popup-element align-center" style="left: 55%;">'+infofla+'.fla | google drive</p>');
	document.write('				<p class="popup-element align-center" style="left: 55%;">(external link)</p>');
}
document.write('				<a href="'+linkpdf+'" class="popup-btn popup-element align-center"><img id="download-pdf"></a>');
document.write('				<p class="popup-element align-center" style="left: 55%;">'+infopdf+'</p>');
document.write('				<div style="height: 4vh"></div>');
document.write('				<div class="popup-element align-center" style="font-size: 5vh;"><p style="display: inline;">Font used: </p><p class="'+fontfamily+'" style="display: inline;">'+fontname+'</div>');
document.write('				<a href="'+fontlink+'" class="popup-btn popup-element align-center"><img id="download-ttf"></a>');
document.write('				<div style="height: 4vh"></div>');
document.write('			</div>');
document.write('			<img id="download-back">');
document.write('		</div>');