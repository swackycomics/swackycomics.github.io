var comment_data = [
	{ page: "/news/article/comment_section/", user: "Mira", date: "May 9, 2026 at 12:52 PM", comment: "it's... peak", },
	{ page: "/news/article/comment_section/", user: "sxtw_", date: "May 9, 2026 at 12:27 PM", comment: "peak", },
	{ page: "/news/article/comment_section/", user: "Icie", date: "May 9, 2026 at 11:25 AM", comment: "the S W A C K", },
	{ page: "/news/article/comment_section/", user: "toki", date: "May 9, 2026 at 07:44 AM", comment: "I lov dinamithat", },
	{ page: "/news/article/comment_section/", user: "breadft", date: "May 9, 2026 at 05:29 AM", comment: "Wow This Is a. Something.", },
	{ page: "/news/article/comment_section/", user: "PoponTheBozo", date: "May 9, 2026 at 02:18 AM", comment: "wowwowwow!!!", },
	{ page: "/news/article/comment_section/", user: "J.T.A", date: "May 9, 2026 at 01:09 AM", comment: "TUFF", },
	{ page: "/news/article/comment_section/", user: "anoncarr0t", date: "May 9, 2026 at 12:36 AM", comment: "ohio blud gcf 💀💀💀", },
	{ page: "/news/article/comment_section/", user: "Eddiemancurly", date: "May 8, 2026 at 09:45 PM", comment: "Hell yea", },
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

document.write('<p id="comments_btn" class="yellow-text align-center" style="text-decoration: underline; cursor: pointer;">See all comments ('+cur_comment_data.length.toString()+')<p>');