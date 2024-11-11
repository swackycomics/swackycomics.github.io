var comicgrid = data;

let array = Object.values(comicgrid);
let rows = 3;
let curcomic = 0;
let columns = Math.ceil(array.length/rows);

//pc version
document.write("<div class=\"grid\">");
document.write("<table class=\"pctable\" style=\"width:90%; min-width:500px;\">");
for(var i = 0; i < columns; i++){
    document.write("<tr>");
    for(var j = 0; j < rows; j++){
        document.write("<td><p id=\"ptop\">" + array[curcomic].title + "<\/p><div><a href=\""+'/comics/'+comictitles[curcomic]+'/' +"\"><img src=\"" +"/img/"+array[curcomic].thumb+ "\" width=\"71.3%\" height=\"71.3%\"><\/a><\/div><p id=\"pbottom\">"+array[curcomic].epiodes+" EPISODES"+"<\/p><\/td>");
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
        document.write("<tr><td><p id=\"ptop\">" + array[curcomic].title + "<\/p><div><a href=\""+'/comics/'+comictitles[curcomic]+'/' +"\"><img src=\"" +"/img/"+array[curcomic].thumb+ "\" width=\"71.3%\" height=\"71.3%\"><\/a><\/div><p id=\"pbottom\">"+array[curcomic].epiodes+" EPISODES"+"<\/p><\/td><\/tr>");
        curcomic ++;
        if(curcomic >= array.length){
            break;
        }
    }
}
document.write("<\/table>");
document.write("<\/div>");