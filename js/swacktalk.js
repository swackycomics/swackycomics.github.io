//shortdesc length of string = 200
var swacktalk = [
	{
		title: "Developing DynamiteHead: The Prototype",
		date: "Feb. 3, 2026",
		shortdesc: "What up, everybody? SWACK HERE as always! In the last swacktalk post I've promised I would go in detail on The Toxic Demo's development. And so, just like an early worm that's ready to catch the bird, such moment has finally arrived.",
		fields: [
			["image","/swacktalk/img/blog2_thumb.png"],
			[
				"text",
				[
					"<br/>",
					"<p>What up, everybody? SWACK HERE as always! In the last swacktalk post I&#39;ve promised I would go in detail on The Toxic Demo&#39;s development. And so, just like an early worm that&#39;s ready to catch the bird, such moment has finally arrived.</p>",
					"<p>Enough with the chit-chat though. LET&#39;S GET TO IT!</p>",
				]
			],
			[
				"text",
				[
					"<h1>IT STARTS WITH AN IDEA</h1>",
					"<p>Truth be told, I&#39;ve always wanted to make a Beat-em-up game. If you&#39;ve been following my game development hijinks, you&#39;d know that my old game, THE .EXECUTIONER, features an unfinished beat-em-up .mfa file in its source code. Not much is going on in there, as I&#39;ve never bothered polishing it up and all that stuff - And so IT WAS DITCHED.</p>",
					"<br/>",
					"<p>Here&#39;s a couple screenshots of it:</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img1.png","KNUCKLE.mfa - July of 2021."],
			[
				"text",
				[
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img2.png"],
			[
				"text",
				[
					"<p>It seems a game like this would just not work with my at the time experience in game development.</p>",
					"<br/>",
					"<p>Now, fast forward to the beginning of 2024. After playing some Streets of Rage (the first one), I&#39;ve had an idea for a game - A side scroller brawler starring one of my pre-existing characters. After some time of thinking, I&#39;ve settled on DynamiteHead. Yep. It&#39;d be that one guy from Veggocalypse, who&#39;s had one singular four page comic at the time.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img3.png","One of the first concepts."],
			[
				"text",
				[
					"<br/>",
					"<p>And so, with the genre and the protagonist set in place, I began to work...</p>",
					
					"<h1>GREEN FREAKS AND SNACKS</h1>",
				]
			],
			["image","/swacktalk/img/blog2_img4.png"],
			[
				"text",
				[
					"<br/>",
					"<p>First day of development, and I&#39;ve had DynamiteHead running around in the middle of nothing. It looked quite rough. Obviously, everything had placeholder graphics. Well, everything but the solid sprite and the main mask sprite - Those still look the same even in The Groovy Demo. NEAT!</p>",
					"<br/>",
					"Ironically enough, the first build did not feature any combat at all. You couldn't punch, you couldn't slide. You couldn't do ANYTHING! Luckily, that very soon changed.",
				]
			],
			["image","/swacktalk/img/blog2_img5.gif","Enemy bowling."],
			[
				"text",
				[
					"<br/>",
					"<p>Not even a couple days in, and I&#39;ve got some enemy code working. At that point, I&#39;ve had already implemented the majority of combat moves. The only issue is that the enemies were just standing there doing nothing, it&#39;s almost as if their brains were replaced with an unknown goo, or something. We&#39;ll come back to their behavior in a bit.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img6.png"],
			[
				"text",
				[
					"<br/>",
					"<p>Enter THE SECOND WEEK OF DEVELOPMENT. We&#39;ve got the absolute staples of DYNAMITEHEAD TNTSON like, uh, THE SNACK PICKUPS... And THE TNT BOXES!</p>",
					"<p>Back then the items didn&#39;t have that much difference between each other. All of the items healed you in the range of 20-35 HP. Oh yeah. Cool Soda is also there, for some very strange odd reason.</p>",
					
					"<h1>THAT PART I HATED MAKING</h1>",
				]
			],
			["image","/swacktalk/img/blog2_img7.gif"],
			[
				"text",
				[
					"<br/>",
					"<p>It&#39;s the third week of developing the prototype. Listen, when I say this guy&#39;s intelligence was abysmally low, I really mean it.</p>",
					"<p>This freak&#39;s name is Blombo, by the way. Get too close to them, and they&#39;ll follow you around. Stand around for too long, they&#39;ll give you a couple smacks in the face. The old enemy behavior system is not doing them any favors, that&#39;s for sure.</p>",
					"<br/>",
					"<p>Speaking of the enemy system, let&#39;s get a more detailed look at it.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img8.png","Blombo's wandering behavior."],
			[
				"text",
				[
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img9.png","Blombo's following behavior."],
			[
				"text",
				[
					"<br/>",
					"<p>And there you have it. If you don&#39;t understand coding - It all boils down to either them wandering around or following you (when you get close to them).</p>",
					"<p>I guess it&#39;s fine for a little prototype... But I really should&#39;ve overhauled this once I started working on Toxic Trenches.</p>",
					"<br/>",
					"<p>Here&#39;s another nuance of this enemy system - When you pick up an enemy, it stores all their information, replaces them with a &quot;Grabbed&quot; object, and then swaps them back when thrown. This causes their UI to flicker for a frame. You&#39;d think switching their states would have been easier. I still have no idea why I implemented it this way.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img10.png","Back then you had to hold the punch button to grab an enemy."],
			[
				"text",
				[
					"<h1>HERE COMES THE FRIDGE</h1>",
				]
			],
			["image","/swacktalk/img/blog2_img11.png"],
			[
				"text",
				[
					"<br/>",
					"<p>Fourth week of developing the prototype and I&#39;ve decided to add a fridge boss. Honestly, fridges suck. I&#39;d hate to have them be a core part of my game.</p>",
					"<br/>",
					"<p>ANYWAY! Not much thought was put into fighting this guy. You get to the end of the stage. This fridge drops onto the ground. And you beat it up while it does absolutely nothing.</p>",
					"<br/>",
					"<p>Most of my time during this week of development was spent on getting the sound effects and music to work. I&#39;ve also spent quite a bit of time making the menus and finishing up this whole prototype deal.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/blog2_img12.png"],
			[
				"text",
				[
					"<h1>SO, WHAT'S NEXT?</h1>",
				]
			],
			["image","/swacktalk/img/blog2_img13.png"],
			[
				"text",
				[
					"<br/>",
					"<p>Once the prototype was done, me and Onsku immediately began working on Toxic Trenches, based on the concept above.</p>",
					"<br/>",
					"<p>I&#39;ll be going in detail on how I went about making The Toxic Demo in the next swacktalk post, so make sure you stay tuned for that. It&#39;s gonna be... Quite Neat.</p>",
					"<br/>",
					"<p>Swack - out.</p>",
				]
			],
		],
		id: "2",
		href: "/swacktalk/blog/developing_dynamitehead_prototype/",
		thumbnail: "/swacktalk/img/blog2_thumb.png"
	},
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