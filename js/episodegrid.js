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
    case "jimmy":
        comicgrid = comicjson.jimmy;
        comicnum = 2;
    break;
    case "vegg":
        comicgrid = comicjson.vegg;
        comicnum = 3;
    break;
}

let array = Object.values(comicgrid);
let rows = 3;
let curcomic = 0;
let columns = Math.ceil(array.length/rows);

document.write( '            <div>\n' );
document.write( '                <p class="medium-text" style=\"margin-bottom:42px; min-width:500px;\">'+Object.values(data)[comicnum].desc+'</p>\n' );
document.write( '            </div>' );

//pc version
document.write("<div class=\"grid\">");
document.write("<table class=\"pctable\" style=\"width:90%; min-width:500px;\">");
for(var i = 0; i < columns; i++){
    document.write("<tr>");
    for(var j = 0; j < rows; j++){
        document.write("<td><p id=\"ptop\">" + "#"+(curcomic+1).toString()+": " + array[curcomic].title + "<\/p><div><a href=\"/comics/"+comic+"_comics/ep"+(curcomic+1).toString()+"\"><img src=\"" +"/img/icons/"+array[curcomic].thumb+ "\" width=\"71.3%\" height=\"71.3%\"><\/a><\/div><p style=\"padding-bottom:42px;\">"+array[curcomic].date+"<\/p><p id=\"pbottom\">"+array[curcomic].pages+" PAGES"+"<\/p><\/td>");
        curcomic ++;
        if(curcomic >= array.length){
            break;
        }
    }
    document.write("<\/tr>");
}
document.write("<\/table>");

//mobile version
curcomic = 0;
document.write("<table class=\"mobiletable\" style=\"width:90%; min-width:500px;\">");
for(var i = 0; i < columns; i++){
    for(var j = 0; j < rows; j++){
        document.write("<tr><td><p id=\"ptop\">" + "#"+(curcomic+1).toString()+": " + array[curcomic].title + "<\/p><div><a href=\"/comics/"+comic+"_comics/ep"+(curcomic+1).toString()+"\"><img src=\"" +"/img/icons/"+array[curcomic].thumb+ "\" width=\"71.3%\" height=\"71.3%\"><\/a><\/div><p style=\"padding-bottom:42px;\">"+array[curcomic].date+"<\/p><p id=\"pbottom\">"+array[curcomic].pages+" PAGES"+"<\/p><\/td><\/tr>");
        curcomic ++;
        if(curcomic >= array.length){
            break;
        }
    }
}
document.write("<\/table>");
document.write("<\/div>");