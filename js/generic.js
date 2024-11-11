let comicarray = [
    ["the_redbidd_comics","The RedBidd Comics"],
    ["dynamitehead_comics","DynamiteHead TNT-Comics"],
    ["jimmys_comical_journey","Jimmy\'s Comical Journey (Discontinued)"],
    ["vegg_n_nameless_comics","Dr. Vegg \'n Nameless Comics (Discontinued)"]
];

document.write("<div style=\"background-color: #000000\" id=\"mousediv\">\r\n  <p id=\"hovertext\"><\/p>\r\n<\/div>");

document.addEventListener('mousemove', function(ev){
	
    document.getElementById('mousediv').style.transform = 'translateY('+(ev.clientY+12)+'px)';
    document.getElementById('mousediv').style.transform += 'translateX('+(ev.clientX-32)+'px)';            
},false);

function showtext(type){
	var texts = ["News","Comics","Trivia","Funny"];
	if(type == -1){
		document.getElementById("hovertext").textContent="";
	} else {
		document.getElementById("hovertext").textContent=texts[type];
	}
}

document.write( '<div class=\"left-border align-left on-top\" style=\"width:186px; height:100%;\"></div>\n' );
document.write( '        <div class=\"right-border align-right on-top\" style=\"width:186px; height:100%;\"></div>\n' );
document.write( '        <div class=\"align-center header on-top\" style=\"width:100%;\">\n' );

document.write( '            <a class="header-button" href=\"/\" id=\"header1\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/news/\" onmouseout="showtext(-1)" onmouseover="showtext(0)" id=\"header2\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/comics/\" onmouseout="showtext(-1)" onmouseover="showtext(1)" id=\"header3\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/trivia/\" onmouseout="showtext(-1)" onmouseover="showtext(2)" id=\"header4\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/funny/\" onmouseout="showtext(-1)" onmouseover="showtext(3)" id=\"header5\"></a>\n' );

document.write( '        </div>' );
