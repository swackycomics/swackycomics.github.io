var comment_data = [
	
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