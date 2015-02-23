//Memory, by Eli Moreta-Feliz

"use strict";


//create a game object
var Memory = {

	currentLevel: 0,

	currentElements: [],

	currentPower: 0,

	targetPower: 50,

	fullPower: false,

	win: false,

	lives: 3,

	score: 0,

	slot: false, //this is the placeholder for when the user clicks on the first (of two) cards to match

	currentMatches: 0,

	respawnCounter: 0,

	currentMoves: 0,

	images: ['shapes/circle-blue.png', 'shapes/circle-red.png', 'shapes/circle-green.png', 'shapes/circle-pink.png', 'shapes/crown1-blue.png', 'shapes/crown1-red.png', 'shapes/crown1-green.png', 'shapes/crown1-pink.png', 'shapes/crown2-blue.png', 'shapes/crown2-red.png', 'shapes/crown2-green.png', 'shapes/crown2-pink.png', 
						'shapes/crown3-blue.png', 'shapes/crown3-red.png', 'shapes/crown3-green.png', 'shapes/crown3-pink.png', 'shapes/club-blue.png', 'shapes/club-red.png', 'shapes/club-green.png', 'shapes/club-pink.png', 'shapes/diamond-blue.png', 'shapes/diamond-red.png', 'shapes/diamond-green.png', 'shapes/diamond-pink.png', 
						'shapes/heart-blue.png', 'shapes/heart-red.png', 'shapes/heart-green.png', 'shapes/heart-pink.png', 'shapes/moon-blue.png', 'shapes/moon-red.png', 'shapes/moon-green.png', 'shapes/moon-pink.png', 'shapes/spade-blue.png', 'shapes/spade-red.png', 'shapes/spade-green.png', 'shapes/spade-pink.png', 
						'shapes/star-blue.png', 'shapes/star-red.png', 'shapes/star-green.png', 'shapes/star-pink.png', 'shapes/triangle-blue.png', 'shapes/triangle-red.png', 'shapes/triangle-green.png', 'shapes/triangle-pink.png', 
			],

	//displays the current cardset
	display: function(){

		//variable that will pair elements with images
		var val = 1;

		for(var i = 1; i <= this.levels[this.currentLevel].numberOfTiles; i++){ 
			this.currentElements[(i - 1)] = '<button class="tile" data="' + val + '"><img src="' + this.images[(val - 1)] + '"></button>';

			if((i % 2) === 0){
				val++; //pair data values with each button
			}
		}
		this.currentElements.sort(function(){
			return Math.random() - 0.5;
		});
		
		$('#board').html(this.currentElements); //once randomized, put the tiles in the board 

		this.respawnCounter = val;
	},

	shuffle: function(){
		this.currentElements.sort(function(){
			return Math.random() - 0.5;
		});
		$('#board').fadeOut(500, function(){
			$('#board').html(this.currentElements); //once randomized, put the tiles in the board
			
			$('.tile').click(function(){
				Memory.reveal($(this)); //ensure they can still be clicked
			});
		});
		$('#board').fadeIn(500);
		this.slot = false; //ensure board is reset
	},

	//for timed levels, displays how much time is left
	countdown:  function(){
		if(!this.win){
			$('#time').html(this.levels[this.currentLevel].targetSeconds);
			if(this.levels[this.currentLevel].targetSeconds > 0){
				this.levels[this.currentLevel].targetSeconds -= 1; //change this so that it affects the current level
				setTimeout(function(){
					this.countdown();
				}.bind(this), 1000);
			}else{
				//if they run out of time, end the game
				$('#message').text('Out of Time');
				this.end('time');	
			}
		}
	},

	trackMoves: function(){
		if(this.currentMoves === this.levels[this.currentLevel].targetMoves){
			this.end('moves');
		}
		var ppp = this.levels[this.currentLevel].targetMoves - this.currentMoves;
		$('#moves').text(ppp);
	},

	//for scored levels, tracks the score and matches it against the target score
	trackScore: function(){
		if(this.score === this.levels[this.currentLevel].targetScore){
			this.win = true;
			this.end('score');
		}
	},


	reveal: function(el){
		//increase the number of moves
		this.currentMoves += 1;
		switch(this.levels[this.currentLevel].type){
			case 'time':
				break;
			case 'score':
				this.trackScore();
				break;
			case 'moves':
				this.trackMoves();
				break;
			default:
				break;

		}

		//when you click on the tiles, remove the 'hidden' class or attribute and show the "back" of the card
		if(el.hasClass('active') || el.hasClass('locked')){
			return;
		}
		el.removeClass('hidden');
		el.addClass('active');

		//if the 'slot' variable is empty, assign this node's data value to it. Otherwise, call the match function
		if(!this.slot){
			this.slot = el.attr('data');
		}else{
			this.match(el.attr('data'));
		}
	},

	//matches what the user inputs
	match: function(val){

		//see if the store value and the currently revealed value are equal. If so, leave as is. If not, hide both tiles again.
		if(this.slot === val){
			//check to see if the match text is on the screen, add it if it isn't
			if($('#message').text() === "Match!"){
				$('#message').addClass('accent');
			}else{
				$('#message').text('Match!');
			}
			
			//lock the matches
			setTimeout(function(){
				$('.active').addClass('locked').removeClass('active'); 
				if($('#message').hasClass('accent')){
					$('#message').removeClass('accent');
				}
			}, 500);

			//increase score
			this.score += 100;
			$('#score').text(this.score);

			this.trackMatches();
		}else{
			if($('#message').text() === "Not a Match!"){
				$('#message').addClass('accent');
			}else{
				$('#message').text('Not a Match!');
			}
			setTimeout(function(){
				$('.active').addClass('hidden').removeClass('active'); //this needs some more work. Maybe use replaceWith or remove altogether?
				if($('#message').hasClass('accent')){
					$('#message').removeClass('accent');
				}
			}, 500);
		}
		this.slot = false;
		
		//set the current value to how many matches have happened, then call the track function
	},

	respawn: function(){
		//replace matched tiles with new tiles
		// var yey = $('.locked').each(function(){
		// 	setTimeout(function(){
		// 		$(this).removeClass('locked');
		// 	}.bind($(this)), 500);
		// });
		
		setTimeout(function(){
			var yey = $('.locked').first();
			if(yey.length <= 0){
				console.log('nothing');
				this.shuffle();
				return;
			}
			console.log(yey);
			yey.remove();
			this.respawn();
		}.bind(this), 300);

		
	},

	//tracks each match and keeps score
	trackMatches: function(){
		//increas the number of matches and compare against target
		this.currentMatches += 1;

		//add to the power bar
		this.currentPower += 1;

		$('#powerbar').val(this.currentPower);
		if(this.currentMatches === this.levels[this.currentLevel].targetMatches){
			this.win = true;
			this.end(this.levels[this.currentLevel].type);
		}
	},

	//starts the game
	start: function(){
		this.win = false;
		this.score = 0;
		this.currentMoves = 0;
		this.currentMatches = 0;
		this.display();
		this.setPowerBar();
		$('#title').text("Level " + (this.currentLevel + 1));
		$('#message').text(this.levels[this.currentLevel].levelMessage);
		$('.tile').click(function(){
			Memory.reveal($(this));
		});
		if(this.levels[this.currentLevel].type === 'time'){
			this.countdown();
		}
	},

	//move to the next level or play again
	end: function(type){ 
		//depending on the type of level, do different things
		if(this.win){
			$('#message').html('Onward!');
			$('#reset').val('Next Level');
			
			//determine scoring and other end-of-game mechanics
			switch(type){
				case 'time':
					this.score *= this.levels[this.currentLevel].targetSeconds; 
					$('#score').text(this.score);
					break;

				case 'moves':
					this.score *= this.levels[this.currentLevel].targetMoves;
					$('#score').text(this.score);
					break;
			}
			this.currentLevel += 1; 
		}else{
			$('#message').html('Almost...');
			$('#reset').val('Play Again');
		}
		
		$('#reset').show().click(function(){
			Memory.start();
		}); //resets the game once it ends
	},

	//powerup functions
	setPowerBar: function(){
		if(this.currentLevel <= 10){
			return;
		}else if(this.currentLevel > 10 && this.currentLevel <= 20){
			this.targetPower = 60;
		}else if(this.currentLevel > 20 && this.currentLevel <= 30){
			this.targetPower = 70;
		}else if(this.currentLevel > 30 && this.currentLevel <= 40){
			this.targetPower = 80;
		}else if(this.currentLevel > 40 && this.currentLevel <= 50){
			this.targetPower = 90;
		}else if(this.currentLevel > 50 && this.currentLevel <= 60){
			this.targetPower = 100;
		}else if(this.currentLevel > 60 && this.currentLevel <= 70){
			this.targetPower = 110;
		}else if(this.currentLevel > 70 && this.currentLevel <= 80){
			this.targetPower = 120;
		}else if(this.currentLevel > 80 && this.currentLevel <= 90){
			this.targetPower = 130;
		}else if(this.currentLevel > 90 && this.currentLevel <= 100){
			this.targetPower = 140;
		}
	},

	fillPowerBar: function(){
		//if it's full, do nothing
		if(this.currentPower === this.targetPower){
			this.fullPower = true;
			//indicate that they can use the power bar visually
			return;
		}
		this.currentPower += 1;
	},

	usePowerBar: function(){
		if(this.fullPower){
			//clear the board

			//reset powerbar
			this.currentPower = 0;
			$('#powerbar').val(this.currentPower);

		}else{
			return;
		}
	},

	wildcard: function(){

	},

	revealer: function(){

	},

	extraTime: function(){

	},

	extraMoves: function(){

	}

};

Memory.levels = [
					{
						type: 'time', //for testing purposes only

						targetSeconds: 90, //these will be assigned

						targetScore: 50000, //in the database  

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 6,

						targetTile: '', //type and color

						levelMessage: 'Clear the board in 90 seconds!',

						targetMatches: 3
					},
					{
						type: 'moves', //for testing purposes only

						targetSeconds: 90, //these will be assigned

						targetScore: 50000, //in the database  

						targetMoves: 40, //and populated at runtime

						numberOfTiles: 8,

						targetTile: '', //type and color

						levelMessage: 'Clear the board in 40 moves!',

						targetMatches: 4
					}
				];


//event handlers
$(document).ready(function(){
	$('#reset').hide();
	var init = function(){
		/*window.addEventListener('contextmenu', function(ev) {
		    ev.preventDefault();
		    //alert('success!');
		    return false;
		}, false);*/
		$('#start').click(function(){
			$(this).hide();
			Memory.start();
		});
	};
	$.ajax({
		url: 'http://misd.info/assets/data.php',
		success: function(e){
			//remember to set the levels when creating these (and maybe keep the cards themselves on the server?)
			for(var i = 0; i < e.length; i++){
				Memory.levels[i] = e[i];
			}
			init();
		},
		error: function(){
			init();
		},
		dataType: 'json'
	});
});