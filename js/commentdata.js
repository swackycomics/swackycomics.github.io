var comment_data = [
	{ page: "/comics/dh_comics/ep8/", user: "Toki", date: "May 8, 2026 at 03:04 PM", comment: "was here", },
	{ page: "/comics/dh_comics/ep8/", user: "brochacho", date: "May 8, 2026 at 10:10 AM", comment: "Dih!", }
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