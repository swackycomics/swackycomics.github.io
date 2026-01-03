//shortdesc length of string = 200
var swacktalk = [
	{
		title: "Animating DYNAMITEHEAD TNTSON sprites",
		date: "Jan. 3, 2026",
		shortdesc: "HEY EVERYONE!!! Welcome to the first swacktalk post on this website. Recently, I had a thought - \"Hey, wouldn't it be cool if I made a blog page where I share game development related stuff?\". And so here I am, writing this post over here.",
		fields: [
			["image","/swacktalk/img/blog1_thumb.png"],
			[
				"text",
				[
					"<br/>",
					"<p>HEY EVERYONE!!! Welcome to the first swacktalk post on this website. Recently, I had a thought - &quot;Hey, wouldn&#39;t it be cool if I made a blog page where I share game development related stuff?&quot;. And so here I am, writing this post over here.</p>",
					"<br/>",
					"<p>Anyway, enough with this blabbering. Let&#39;s talk ANIMATION!</p>",
					"<p>Most of the animations in DYNAMITEHEAD TNTSON are animated in <strong>18 fps</strong>. All of the frames appear unique thanks to the &quot;boiling line&quot; effect, achieved by basically tracing the lineart of a previous frame a couple of times.</p>",
					"<br/>",
					"<p>Let&#39;s take a look at DynamiteHead&#39;s money pickup animation as an example.</p>",
				]
			],
			["image","/swacktalk/img/blog1_img1.gif","When played in-game, the animation loops a couple times, letting the whole jingle play out."],
			[
				"text",
				[
					"<h1>SKETCH IT OUT</h1>",
					"<p>First of all, let&#39;s come up with the &quot;main pose&quot; of the animation. The spot where it all culminates, so to say. <strong>The Frame</strong>. </p>",
					"<p>This step usually doesn&#39;t take too much time to get through, as most of the time I have a clear idea on how an animation should play out.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog1_img2.png"],
			[
				"text",
				[
					"<br/>",
					"<p>After that, time to sketch out those keyframes! This step is where I usually decide the pacing of an animation. Does it need to happen quick? Does it need to be a longer animation? I stretch some keyframes and experiment a bunch.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog1_img3.gif","Now we're getting somewhere!"],
			[
				"text",
				[
					"<br/>",
					"<p>And to bring this step to a closure, I then add a bunch of in-between frames. This is where squash and stretch comes in quite handy. </p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog1_img4.gif","That was easy!"],
			[
				"text",
				[
					"<h1>THE LINEART PART</h1>",
					"<p>With all the frames sketched out, it&#39;s time to bring this little animation to life... finally.</p>",
					"<p>Now, before I go further into this step of the process, I have to specify that I&#39;m using a multitude of layers for multiple parts of the character - One for the head, another for the body, and a couple more for the limbs. This varies on a per character basis, but just know I never do lineart on a single layer.</p>",
				]
			],
			["image","/swacktalk/img/blog1_img8.png", "We've got plenty of layers."],
			[
				"text",
				[
					"<br/>",
					"<p>First off, I basically just trace the sketch layer. Then, once the first pass is done, I begin drawing the SIGNATUNE DYNAMITEHEAD TNTSON LINEART. You know what I&#39;m talking about. The one that looks all scratchy and stuff.</p>",
					"<p>Spam clicking while following the lineart seems to be the best method of getting it all drawn in my case. I know it might not be the best way to do it, but whatever... SO BE IT!</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog1_img5.gif","Lookin' good."],
			[
				"text",
				[
					"<h1>FINISHING UP</h1>",
				]
			],
			["image","/swacktalk/img/blog1_img6.png","Hang on, what's up with those colors?"],
			[
				"text",
				[
					"<br/>",
					"<p>Here comes the easiest step - Coloring.</p>",
					"<br/>",
					"<p>Now, I&#39;m gonna explain the reason for such color choice, and also deviate into some technical things along the way.</p>",
					"<p>You may have noticed that DynamiteHead is looking a bit... pink. That is due to the fact that the game swaps the player&#39;s colors using a shader during runtime. This is needed to achieve a &quot;stage specific lighting&quot;. I could use some image_blend trickery here, but I didn&#39;t want the lighting to affect the fire. If I were to color it normally, DynamiteHead&#39;s shoes and gloves would cause a bunch of unwanted visual errors.</p>",
					"<br/>",
					"<p>Here&#39;s an image to make things easier to understand:</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog1_img7.png"],
			[
				"text",
				[
					"<br/>",
					"<p>Welp, at this point the animation&#39;s fully done! And it took like what, a couple hours to get through? Yeah, that&#39;s cool. Let&#39;s make a hundred more of those while we&#39;re at it.</p>",
					"<br/>",
					"<p>ANYWAY... If you liked this blog, make sure to stay tuned for more stuff like this. I&#39;m planning on making a post about <strong>The Toxic Demo</strong>&#39;s development process. See ya whenever I update this website again.</p>",
				]
			],
		],
		id: "1",
		href: "/swacktalk/blog/animating_dynamitehead/",
		thumbnail: "/swacktalk/img/blog1_thumb.png"
	},
];