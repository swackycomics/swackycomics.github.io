function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var series = [];
for(var i = 0; i < comicpages.length; i++){
  series[i] = comicpages[i][0];
}

//check url

var comic = "0"
var episode = "0"
var comicnum = 0;

var failcomic = "redbidd";
var failepisode = "1";

comic = document.querySelectorAll("#curcomic")[0].innerHTML.split(",")[0];
episode = document.querySelectorAll("#curcomic")[0].innerHTML.split(",")[1];

var seriesnum = 0;
for(var i = 0; i < comicpages.length; i++){
  if(comic == comicpages[i][0]){
    seriesnum = i;
  }
}

//load comic
var comic_ = Object.values(Object.values(comicjson)[seriesnum])[parseInt(episode-1)];