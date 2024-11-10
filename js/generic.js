let comicarray = [
    ["the_redbidd_comics","The RedBidd Comics"],
    ["dynamitehead_comics","DynamiteHead TNT-Comics"],
    ["jimmys_comical_journey","Jimmy\'s Comical Journey (Discontinued)"],
    ["vegg_n_nameless_comics","Dr. Vegg \'n Nameless Comics (Discontinued)"]
];

document.write( '<div class=\"left-border align-left on-top\" style=\"width:186px; height:100%;\"></div>\n' );
document.write( '        <div class=\"right-border align-right on-top\" style=\"width:186px; height:100%;\"></div>\n' );
document.write( '        <div class=\"align-center header on-top\" style=\"width:100%;\">\n' );
document.write( '            <a id=\"header1\"></a>\n' );
document.write( '            <a id=\"header2\" href=\"/\"></a>\n' );
document.write( '<a id=\"header3\" onclick=\"dropdown()\" class=\"dropbtn\"></a>\n' );
document.write( '            <div id=\"comicdropdown\" class=\"dropdown-content\">\n' );
for(var i = 0; i < comicarray.length; i++){
    document.write( '                <a class=\"dropdown-button\" href=\"' +'/comics/'+comicarray[i][0]+'/'+ '\">' +comicarray[i][1]+ '</a>\n' );
}
document.write( '            </div>' );
document.write( '            <a href=\"/trivia/\" id=\"header5\"></a>\n' );
document.write( '            <a href=\"/funny/\" id=\"header4\"></a>\n' );

document.write( '<script>\n' );
document.write( '                //comic dropdown menu\n' );
document.write( '                function dropdown() {\n' );
document.write( '                    document.getElementById(\"comicdropdown\").classList.toggle(\"show\");\n' );
document.write( '                }\n' );
document.write( '                window.onclick = function(event) {\n' );
document.write( '                    if(!event.target.matches(\'.dropbtn\')) {\n' );
document.write( '                        var dropdowns = document.getElementsByClassName(\"dropdown-content\");\n' );
document.write( '                        var i;\n' );
document.write( '                        for (i = 0; i < dropdowns.length; i++) {\n' );
document.write( '                            var openDropdown = dropdowns[i];\n' );
document.write( '                            if (openDropdown.classList.contains(\'show\')) {\n' );
document.write( '                                openDropdown.classList.remove(\'show\');\n' );
document.write( '                            }\n' );
document.write( '                        }\n' );
document.write( '                    }\n' );
document.write( '                }\n' );
document.write( '            </script>' );

document.write( '        </div>' );
