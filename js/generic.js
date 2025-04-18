let comicarray = [
    ["the_redbidd_comics","The RedBidd Comics"],
    ["dynamitehead_comics","DynamiteHead TNT-Comics"],
    ["jimmys_comical_journey","Jimmy\'s Comical Journey (Discontinued)"],
    ["vegg_n_nameless_comics","Dr. Vegg \'n Nameless Comics (Discontinued)"]
];

document.write("<div style=\"background-color: #000000\" id=\"mousediv\">\r\n  <p id=\"hovertext\"><\/p>\r\n<\/div>");

window.addEventListener('resize', function(ev){
	document.getElementById('mousediv').style.display = "none";
});

document.addEventListener('mousemove', function(ev){
	document.getElementById('mousediv').style.display = "block";
	document.getElementById('mousediv').style.transform = 'translateY('+(ev.clientY+32)+'px)';
	document.getElementById('mousediv').style.transform += 'translateX('+(ev.clientX-32)+'px)';
},false);

function showtext(type, social){
	var texts = ["News","Comics","Games","Trivia","Funny","Misc."];
	var socials = ["YouTube","itch.io","Bluesky","Newgrounds"];
	if(type == -1){
		document.getElementById("hovertext").textContent="";
	} else {
		if(social == -1){
			document.getElementById("hovertext").textContent=texts[type];
		} else {
			document.getElementById("hovertext").textContent=socials[type];
		}
	}
}

//preload
document.write( '<link rel="preload" as="image" href="/img/header/header_logo_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_comics_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_contact_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_misc_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_funny_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_games_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_news_hover.png">');
document.write( '<link rel="preload" as="image" href="/img/header/header_trivia_hover.png">');

document.write( '<link rel="preload" as="image" href="/img/download/download-on.png">');
document.write( '<link rel="preload" as="image" href="/img/back-on.png">');

document.write( '<div class=\"side-border left-border align-left on-top\"></div>\n' );
document.write( '        <div class=\"side-border right-border align-right on-top\"></div>\n' );
document.write( '        <div class=\"align-center header on-top\" style=\"width:100%;\">\n' );

document.write( '            <a class="header-button" href=\"/\" id=\"header1\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/news/\" onmouseout="showtext(-1, -1)" onmouseover="showtext(0, -1)" id=\"header2\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/comics/\" onmouseout="showtext(-1, -1)" onmouseover="showtext(1, -1)" id=\"header3\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/games/\" onmouseout="showtext(-1, -1)" onmouseover="showtext(2, -1)" id=\"header4\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/trivia/\" onmouseout="showtext(-1, -1)" onmouseover="showtext(3, -1)" id=\"header5\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/funny/\" onmouseout="showtext(-1, -1)" onmouseover="showtext(4, -1)" id=\"header6\"></a>\n' );
document.write( '            <a class="not-logo header-button" href=\"/misc/\" onmouseout="showtext(-1, -1)" onmouseover="showtext(5, -1)" id=\"header7\"></a>\n' );

document.write( '        </div>' );
