var comment_data = [
	{ page: "/news/article/comment_section/", user: "mintyfresh2490", date: "May 8, 2026 at 09:27 PM", comment: "Absolutely wonderful.", },
	{ page: "/news/article/comment_section/", user: "Horse", date: "May 8, 2026 at 07:56 PM", comment: "Hello.", },
	{ page: "/news/article/comment_section/", user: "onsku", date: "May 8, 2026 at 07:46 PM", comment: "it nice : )", },
	{ page: "/news/article/comment_section/", user: "Gubby", date: "May 8, 2026 at 07:42 PM", comment: "Nice I Like It", },
	{ page: "/news/article/comment_section/", user: "jarek tek", date: "May 8, 2026 at 07:40 PM", comment: "Fantastic.", },
	{ page: "/comics/dh_comics/ep8/", user: "Toki", date: "May 8, 2026 at 03:04 PM", comment: "was here", },
];

//get amount of comments on the current page
var cur_comment_data = [];
var path = new URL(window.location).pathname;
for(var i = 0; i < comment_data.length; i++){
	if(comment_data[i].page == path){
		cur_comment_data.push(comment_data[i]);
	}
}

if(cur_comment_data.length > 0){
	document.write('<p id="comments_btn" class="yellow-text align-center" style="text-decoration: underline; cursor: pointer;">See all comments ('+cur_comment_data.length.toString()+')<p>');
}