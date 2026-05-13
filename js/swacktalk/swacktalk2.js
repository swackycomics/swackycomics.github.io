var swacktalk_current = [
	{
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
			["image","/swacktalk/img/swacktalk2/blog2_img1.png","KNUCKLE.mfa - July of 2021."],
			[
				"text",
				[
					"<br/>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img2.png"],
			[
				"text",
				[
					"<p>It seems a game like this would just not work with my at the time experience in game development.</p>",
					"<br/>",
					"<p>Now, fast forward to the beginning of 2024. After playing some Streets of Rage (the first one), I&#39;ve had an idea for a game - A side scroller brawler starring one of my pre-existing characters. After some time of thinking, I&#39;ve settled on DynamiteHead. Yep. It&#39;d be that one guy from Veggocalypse, who&#39;s had one singular four page comic at the time.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img3.png","One of the first concepts."],
			[
				"text",
				[
					"<br/>",
					"<p>And so, with the genre and the protagonist set in place, I began to work...</p>",
					
					"<h1>GREEN FREAKS AND SNACKS</h1>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img4.png"],
			[
				"text",
				[
					"<br/>",
					"<p>First day of development, and I&#39;ve had DynamiteHead running around in the middle of nothing. It looked quite rough. Obviously, everything had placeholder graphics. Well, everything but the solid sprite and the main mask sprite - Those still look the same even in The Groovy Demo. NEAT!</p>",
					"<br/>",
					"Ironically enough, the first build did not feature any combat at all. You couldn't punch, you couldn't slide. You couldn't do ANYTHING! Luckily, that very soon changed.",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img5.gif","Enemy bowling."],
			[
				"text",
				[
					"<br/>",
					"<p>Not even a couple days in, and I&#39;ve got some enemy code working. At that point, I&#39;ve had already implemented the majority of combat moves. The only issue is that the enemies were just standing there doing nothing, it&#39;s almost as if their brains were replaced with an unknown goo, or something. We&#39;ll come back to their behavior in a bit.</p>",
					"<br/>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img6.png"],
			[
				"text",
				[
					"<br/>",
					"<p>Enter THE SECOND WEEK OF DEVELOPMENT. We&#39;ve got the absolute staples of DYNAMITEHEAD TNTSON like, uh, THE SNACK PICKUPS... And THE TNT BOXES!</p>",
					"<p>Back then the items didn&#39;t have that much difference between each other. All of the items healed you in the range of 20-35 HP. Oh yeah. Cool Soda is also there, for some very strange odd reason.</p>",
					
					"<h1>THAT PART I HATED MAKING</h1>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img7.gif"],
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
			["image","/swacktalk/img/swacktalk2/blog2_img8.png","Blombo's wandering behavior."],
			[
				"text",
				[
					"<br/>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img9.png","Blombo's following behavior."],
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
			["image","/swacktalk/img/swacktalk2/blog2_img10.png","Back then you had to hold the punch button to grab an enemy."],
			[
				"text",
				[
					"<h1>HERE COMES THE FRIDGE</h1>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img11.png"],
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
			["image","/swacktalk/img/swacktalk2/blog2_img12.png"],
			[
				"text",
				[
					"<h1>SO, WHAT'S NEXT?</h1>",
				]
			],
			["image","/swacktalk/img/swacktalk2/blog2_img13.png"],
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
	}
];